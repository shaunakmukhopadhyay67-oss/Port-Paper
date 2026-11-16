/* Service worker: makes the app work offline.
   On install it downloads every file of the app into a cache on the device.
   Afterwards each request is answered from that cache first, and from the network only if missing.
   The cache name changes with every new version, which makes phones pick up updates. */
const CACHE = "port-papers-c564c7d0a7";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "jszip.min.js", "pdf-lib.min.js", "pdf.min.js", "pdf.worker.min.js"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  if(e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request, {ignoreSearch:true}).then(hit => hit || fetch(e.request)));
});
