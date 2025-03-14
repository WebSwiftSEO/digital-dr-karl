const cacheName = 'drkarl-pwa-v1';
const assets = [
    './',
    './index.html'
];

self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing...');
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log('[Service Worker] Caching app shell');
            return cache.addAll(assets);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
