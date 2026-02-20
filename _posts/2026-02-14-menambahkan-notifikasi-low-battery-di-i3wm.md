---
layout: default
title: Menambahkan notifikasi low battery di i3wm
tags: Tech
---

Di customizable window manager seperti i3wm, segala hal yang berkaitan dengan desktop environment harus kita konfigurasikan. Salah satu hal yang perlu diatur konfigurasinya adalah notifikasi low battery.

Sudah beberapa kali saya tidak sadar kalau baterai laptop saya di bawah 20%, dan berujung pada laptop yang tiba-tiba mati sendiri. Menyebalkan, pastinya. Apalagi kalau kita sedang mengerjakan pekerjaan penting.

Saya minta GLM 4.7 untuk buatkan bash script yang akan memunculkan notifikasi low battery ketika persentase baterai di bawah 11%. Saya modifikasi sedikit untuk handle beberapa case yang belum ke-cover sepenuhnya oleh GLM.

Berikut script-nya:

```bash
#!/bin/bash

# Configuration
BATTERY_PATH="/sys/class/power_supply/BAT*"
LOW_BATTERY_THRESHOLD=11
CHECK_INTERVAL=1
SOUND_THEME="/usr/share/sounds/Yaru/stereo"
SOUND_LOW_BATTERY="${SOUND_THEME}/battery-low.oga"
SOUND_POWER_PLUG="${SOUND_THEME}/power-plug.oga"
SOUND_POWER_UNPLUG="${SOUND_THEME}/power-unplug.oga"
NOTIFICATION_COOLDOWN=300

last_low_battery_notification=0

read_battery_info() {
  local capacity_file=$(echo ${BATTERY_PATH}/capacity 2>/dev/null | head -1)
  local status_file=$(echo ${BATTERY_PATH}/status 2>/dev/null | head -1)

  if [ -z "$capacity_file" ] || [ ! -f "$capacity_file" ]; then
    echo "ERROR: Battery not found" >&2
    return 1
  fi

  capacity=$(cat "$capacity_file" 2>/dev/null)
  status=$(cat "$status_file" 2>/dev/null)

  return 0
}

play_sound() {
  local sound_file=$1
  if [ -f "$sound_file" ]; then
    paplay "$sound_file" &
  fi
}

send_notification() {
  local urgency=$1
  local title=$2
  local message=$3
  notify-send -u "$urgency" "$title" "$message"
}

status_file=$(echo ${BATTERY_PATH}/status 2>/dev/null | head -1)
prev_status=$(cat "$status_file" 2>/dev/null)

while true; do
  if ! read_battery_info; then
    sleep "$CHECK_INTERVAL"
    continue
  fi

  current_time=$(date +%s)

  echo $prev_status
  if [ "$status" = "Discharging" ]; then
    if [ "$prev_status" != "Discharging" ]; then
      play_sound "$SOUND_POWER_UNPLUG"
    elif [ "$capacity" -lt "$LOW_BATTERY_THRESHOLD" ]; then
      time_since_last_notification=$((current_time - last_low_battery_notification))
      if [ "$time_since_last_notification" -ge "$NOTIFICATION_COOLDOWN" ]; then
        send_notification "critical" "Battery Low" "Battery at ${capacity}%"
        last_low_battery_notification=$current_time
      fi
      play_sound "$SOUND_LOW_BATTERY"
      sleep 2
    fi
  elif [[ ("$status" = "Charging" || "$status" = "Not charging" || "$status" = "Full") && "$prev_status" = "Discharging" ]]; then
    play_sound "$SOUND_POWER_PLUG"
  fi

  prev_status="$status"
  sleep "$CHECK_INTERVAL"
done
```

Script ini disimpan di `~/.config/i3/scripts/battery-notify.sh`. Script ini kemungkinan ditambahkan ke file `~/.config/i3/config`.

```
# CHECK FOR BATTERY PERCENTAGE. NOTIFY WHEN LOW
exec --no-startup-id "sleep 2; ~/.config/i3/scripts/battery-notify.sh &"
```

Kenapa harus sleep selama 2 detik dulu sebelum menjalankan script? Hanya untuk memastikan bahwa proses Dunst (program untuk notifikasi) sudah berjalan sebelum script `battery-notify.sh` dieksekusi, sehingga notifikasinya pakai notifikasi yang tampilannya sudah saya custom ketimbang pakai notifikasi bawaan Ubuntu MATE.
