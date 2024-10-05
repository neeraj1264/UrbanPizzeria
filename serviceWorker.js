const CACHE_NAME = 'urban-pizzeria-v1';
const urlsToCache = [
  '/', // Cache root page
  '/index.html',
  '/img/urban/logo.png',
  "/img/urban/Gallery/img7.jpg",
  "/img/urban/Gallery/img8.jpg",
  "/img/urban/Gallery/reel1.mp4",
  "/img/urban/Gallery/reel2.mp4",
  "/img/urban/Gallery/reel3.mp4",
  "/img/urban/Gallery/reel4.mp4",
  "/img/urban/Gallery/reel5.mp4",
  "/img/urban/Gallery/reel6.mp4",
];

// Install Service Worker and cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate Service Worker and clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch resources from cache first, then from network if not cached
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
