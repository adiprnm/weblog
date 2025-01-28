---
layout: default
title: I deleted the Windows partition and go all-in on Linux
---

This post is still about my developer laptop's story.

The first thing I did when I bought this laptop was to install the Ubuntu MATE. That time, I decided to dual-boot it with pre-installed Windows. I was not dared enough to go all-in on Linux, not because Linux wasn't good enough (Linux is always good enough for me), but because I might still need Windows for the things I couldn't do on Linux.

As time went by, I realized that I rarely used the Windows. My daily workflow could be done entirely on Linux. But still, I wasn't brave enough to remove Windows. It was too risky, and I was in a condition of not being willing to do the difficult but unnecessary things. So I postponed it again.

The storage of my Linux disk partition was slowly increased and now only 40GB left. This time I decided to remove the Windows. I had to accept the risk, no matter what.

Removing the Windows partition required some planning. First, I had to research whether is it possible to remove the Windows partition without having to do a clean uninstall the laptop. It's because my Linux partition was on the right side after the Windows partition.

Later I found that it's possible. All I need is a bootable flash drive that contains Linux installation as the installation media. Then, I booted to the OS using the flash drive, opened up the GParted, removed the Windows Partition, shifted the Linux partition to the left, and extended the unallocated storage after the deletion of the Windows partition.

It took about 30 minutes to do the operations. The longest operation was the shifting process since it shifted gigabytes of data.

It was all good. The Windows partition was completely deleted and my Linux partition gained ~130GB more storage!

## The silly mistake

Even though the deletion of the Windows partition was successful, my OCD couldn't stand it when I saw two small partitions of the FAT32 filesystem were there altogether. Both of them were the boot partition. My OCD said that it should be one partition only, so I wanted to delete one of them and extend the other partition. The problem is, that I don't know which one to delete.

Unfortunately, I deleted the wrong partition: the EFI partition. It caused me not to be able to boot to the system! I was in a panic for real.

![Panic](https://media.giphy.com/media/1EghTrigJJhq8/giphy.gif?cid=790b7611y7508d0ofs5qreczfdpz6pyvismukyg3ml1f92aj&ep=v1_gifs_search&rid=giphy.gif&ct=g)

But come to think of it, the root data should be safe because I still remember that when I dual-booted years ago, I separated the boot partition and the root partition. Based on what I know about the booting process, theoretically, there should be a way to restore the deleted boot partition.

I found the answers on StackOverflow, but it wasn't detailed enough so I couldn't follow the steps. Then, I asked Claude. Surprisingly, Claude could solve the issue with only 6 prompts!

![Mindblown](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2FiODl1Z21mbGdtZnpydHR4cHN4NnNvY3c0OXhqZm42ZW40NmVhMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Um3ljJl8jrnHy/giphy.gif)

Since I couldn't find the share button of the chat with Claude, I'll summarize the steps here. Hopefully, this will help others in the future.

1. Boot using a flash drive that contains Linux installation media
2. Open GParted, and re-create the FAT32 filesystem. The size should be between at least 250MB. Mine is around 736MB.
3. Mount root partition: `mount /dev/sdXY /mnt`. Replace `/dev/sdXY` with the partition that contains your root data. It can be easily checked at GParted.
4. Mount boot partition: `mount /dev/sdXZ /mnt/boot`. Replace `/dev/sdXZ` with the newly created formatted partition.
5. Run this command: `for i in /dev /proc /sys /run; do mount --bind $i /mnt$i; done; chroot /mnt`
6. Install GRUB: `grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=GRUB; update-grub`

Is it finished already? Not yet. When I reboot the laptop, at first it is successfully booted, but somehow it takes a longer time than usual. The next time I rebooted, it entered the emergency mode.

![Ambulance](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2treG5wemM5ZmI4d2s5OWNjZHZxd3p0ZG5wdHdzM2wyYnN6ZDk4YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/QmKySYr0lCsrC/giphy.gif)

After checking the log using `journalctl—xb`, I found that the EFI partition failed to mount. So I asked Claude again, and one of the suggestions was to check the value of the `/etc/fstab` file and make sure the partition's UUID matches the actual partition's UUID. The partition UUID could be checked using `blkid`.

Turned out the UUID of the EFI partition was different from the UUID within the `/etc/fstab` file. I changed the value and then rebooted the system. Viola! The system booted successfully!

![Tada](https://media.giphy.com/media/xTka04BCNBizaAUKKA/giphy.gif?cid=790b7611lit191h535oxm5y3gy91rq9qdbfg9njk8waf8vbj&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## Key learning

This experience taught me some lessons as follows:

### 1. Research more when you have any doubt

Before deleting the EFI system partition, I researched a little bit about EFI. My mistake here is that I didn't do enough research. I just read the definition of the EFI. I didn't research how it works on my computer.

### 2. Sometimes we should take a risk and failed

If I didn't delete the EFI partition, there were no guarantee that I wouldn't encounter any unexpected errors. It probably even worse than the EFI problem. Who knows until we tried it. So, take risks when it's necessary. If we failed, at least we get some information future that might be useful in the future.

### 3. Know what you're doing

This is the most important learning. I dare to take risks because I know what I'm going to do. I understand the disk partition mechanism, the filesystem, and how the OS boots in general. So when the EFI problem hit me, I knew that theoretically, the issue was at the bootloader partition only. This means, that my root data should not be affected at all.

So, that's it. I'm happy that now my Ubuntu partition gained more space, and don't have to choose Ubuntu or Windows anymore every time I boot the computer. Just me and Ubuntu ❤️

