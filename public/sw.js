var cacheName = 'sainvektor';
var filesToCache = [
    '/',
    '/public/index.html',
    '/public/blog2.html',
    '/public/blog1.html',
    '/public/js',
    '/public/scss',
    '/public/images',
    '/public/fonts',
    '/public/css',
    '/public/sw.js',
    '/public/manifest.json',
    '/public/firebase-messaging-sw.js'
];
self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then(response => {
            return response || fetch(event.request);
        })
    );
});