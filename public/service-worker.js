var cacheName = "demo-app";
var filesToCache = [
  "/static/js/bundle.js",
  "/static/js/0.chunk.js",
  "/static/js/main.chunk.js",

  "/manifest.json",
  "/favicon.ico",
  "https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2",

  "/9ddf0bdac639273c6eec.hot-update.json",
  "/sockjs-node",
  "/index.html",
  "/service-worker.tsx",
  "/app.tsx",
  "/QuestionCard.tsx",
  "/",
];

self.addEventListener("activate", function (e) {
  console.log("[ServiceWorker] Activate");
});

self.addEventListener("install", function (e) {
  console.log("[ServiceWorker] Install");
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", function (e) {
  console.log("[ServiceWorker] Fetch", e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
