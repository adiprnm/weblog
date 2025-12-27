const CACHE_NAME = 'item-saver-v1';
const ASSETS = [
  '/tools/item-saver/',
  '/tools/item-saver/index.html',
  '/tools/item-saver/main.js',
  '/tools/item-saver/icon.svg',
  '/tools/item-saver/main.css',
  '/tools/item-saver/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});


