const cacheName="pwa-v2",assets=["./","./index.html","./app.bundle.js","./assets/logo.svg","./favicon.png"];self.addEventListener("install",(e=>{e.waitUntil(caches.open("pwa-v2").then((e=>e.addAll(assets))))})),self.addEventListener("fetch",(e=>{e.respondWith(caches.match(e.request,{ignoreSearch:!0}).then((s=>s||fetch(e.request))))}));