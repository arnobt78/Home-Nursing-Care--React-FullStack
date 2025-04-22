self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("static-assets").then((cache) => {
      return cache.addAll([
        // icons
        "/assets/icon/ambulance-1.svg",
        "/assets/icon/care-1.svg",
        "/assets/icon/care-2.svg",
        "/assets/icon/handshake-1.svg",
        "/assets/icon/health-1.svg",
        "/assets/icon/health-2.svg",
        "/assets/icon/home-1.svg",
        "/assets/icon/home-2.svg",
        "/assets/icon/nurse-1.svg",
        "/assets/icon/nurse-2.svg",
        "/assets/icon/time-1.svg",

        // images
        "/assets/american.png",
        "/assets/ankara.png",
        "/assets/goethe.png",
        "/assets/hero-1.jpg",
        "/assets/hero-2.jpg",
        "/assets/hero-3.jpg",
        "/assets/hero-4.jpg",
        "/assets/hr-1.jpg",
        "/assets/hr-2.jpg",
        "/assets/hr-3.jpg",
        "/assets/hr-4.jpg",
        "/assets/iec.png",
        "/assets/logo-bg.png",
        "/assets/logo.png",
        "/assets/lwl.png",
        "/assets/markische.png",
        "/assets/nicc.png",
        "/assets/sernitas-group.png",
        "/assets/sernitas-hr.png",
        "/assets/sernitas-institute.png",
        "/assets/sernitas-kliniken.png",
        "/assets/service-2.jpg",
        "/assets/service-3.jpg",
        "/assets/timer.png",
      ]);
    })
  );
});

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((cachedResponse) => {
//       return cachedResponse || fetch(event.request);
//     })
//   );
// });

self.addEventListener("fetch", (event) => {
  console.log("Fetching:", event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        console.log("Serving from cache:", event.request.url);
      } else {
        console.log("Fetching from network:", event.request.url);
      }
      return cachedResponse || fetch(event.request);
    })
  );
});
