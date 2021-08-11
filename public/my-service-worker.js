const CACHE_NAME = "cache-v3";
const DYNAMIC_CACHE_NAME = "dynamic-cache-v2";
const CACHE_THIS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icon-256x256.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(CACHE_THIS);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key !== DYNAMIC_CACHE_NAME)
          .map((key) => {
            caches.delete(key);
          })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((cacheResponse) => {
        return (
          cacheResponse ||
          fetch(event.request).then((fetchResponse) => {
            return caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
              cache.put(event.request.url, fetchResponse.clone());
              return fetchResponse;
            });
          })
        );
      })
      .catch(() => {
        if (event.request.url.indexOf(".html") > -1) {
          return caches.match("/");
        }
      })
  );
});