const cacheName = 'cache-v1';
const resourcesToPrecache = [
    '/RollTheDice/',
    '/RollTheDice/index.html',
    '/RollTheDice/images/icon-192.png',
    '/RollTheDice/images/icon-512.png',
    '/RollTheDice/main.css',
    '/RollTheDice/main.js'
];

self.addEventListener('install', event => {
    console.log('Install event!');
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            return cache.addAll(resourcesToPrecache);
        }).catch(err => {
            console.log('Caching failed: ', err);
        })
    )
});

self.addEventListener('activate', () => {
    console.log('ServiceWorker activated!');
});

self.addEventListener('fetch', event => {
    console.log('Fetch intercepted for: ', event.request.url);
    event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        }).catch(err => {
            console.log('Fetching failed: ', err);
        })
    );
});