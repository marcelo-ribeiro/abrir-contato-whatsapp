const cacheName = "pwa-v1";
const assets = [
  "./",
  "./index.html",
  "./app.bundle.js",
  "./assets/logo.svg",
  "./favicon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(assets))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true })
      .then(response => response || fetch(event.request))
  );
});
