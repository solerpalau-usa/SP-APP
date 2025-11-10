// Define the cache name and resources to cache
const cacheName = 'Soler-Palau-App-Data-v6';
const essentialCacheResources = [
  '/SP-APP/',
  '/SP-APP/index.html',
  '/SP-APP/assets/icons/favicon.ico',
  '/SP-APP/assets/icons/icon.png',
  '/SP-APP/assets/icons/favicon.png',
  '/SP-APP/assets/icons/icon-v2.png',
  '/SP-APP/assets/icons/icon-v3.png',
  '/SP-APP/assets/icons/icon-v4.png',
  '/SP-APP/assets/icons/icon-v6.png',
  '/SP-APP/assets/images/AR.png',
  '/SP-APP/assets/images/blog.svg',
  '/SP-APP/assets/images/circle-play-solid.svg',
  '/SP-APP/assets/images/events.svg',
  '/SP-APP/assets/images/fan-solid.svg',
  '/SP-APP/assets/images/fan-white.svg',
  '/SP-APP/assets/images/file-pdf-solid.svg',
  '/SP-APP/assets/images/GD.png',
  '/SP-APP/assets/images/helpcenter.svg',
  '/SP-APP/assets/images/home.svg',
  '/SP-APP/assets/images/library.svg',
  '/SP-APP/assets/images/links-nav.svg',
  '/SP-APP/assets/images/links.svg',
  '/SP-APP/assets/images/Losone-Select-Ceiling.webp',
  '/SP-APP/assets/images/new-branch.svg',
  '/SP-APP/assets/images/new-rep.svg',
  '/SP-APP/assets/images/optisizer.svg',
  '/SP-APP/assets/images/PC.png',
  '/SP-APP/assets/images/PCD.png',
  '/SP-APP/assets/images/PCLP.png',
  '/SP-APP/assets/images/PCV.png',
  '/SP-APP/assets/images/print-shop.svg',
  '/SP-APP/assets/images/product-returns.svg',
  '/SP-APP/assets/images/return-back-button.svg',
  '/SP-APP/assets/images/right-left-solid.svg',
  '/SP-APP/assets/images/right-left-white.svg',
  '/SP-APP/assets/images/search-icon.svg',
  '/SP-APP/assets/images/Share-outline-01.svg',
  '/SP-APP/assets/images/solidplay-white.svg',
  '/SP-APP/assets/images/logo-mb.png',
  '/SP-APP/assets/images/ACF-recat.png',
  '/SP-APP/assets/images/BGH-recat.png',
  '/SP-APP/assets/images/CFD-recat.png',
  '/SP-APP/assets/images/CM-recat.png',
  '/SP-APP/assets/images/CSF-recat.png',
  '/SP-APP/assets/images/CTB-recat.png',
  '/SP-APP/assets/images/CWD-recat.png',
  '/SP-APP/assets/images/DD-recat.png',
  '/SP-APP/assets/images/DEDPV-recat.png',
  '/SP-APP/assets/images/DF-recat.png',
  '/SP-APP/assets/images/HRE-recat.png',
  '/SP-APP/assets/images/HRS-recat.png',
  '/SP-APP/assets/images/ifab-recat.png',
  '/SP-APP/assets/images/ifft-recat.png',
  '/SP-APP/assets/images/KSFV-recat.png',
  '/SP-APP/assets/images/L2-recat.png',
  '/SP-APP/assets/images/L3-recat.png',
  '/SP-APP/assets/images/LCE.png',
  '/SP-APP/assets/images/Losone-Select-Inline.webp',
  '/SP-APP/assets/images/LPD-recat.png',
  '/SP-APP/assets/images/LSF-recat.png',
  '/SP-APP/assets/images/MD-recat.png',
  '/SP-APP/assets/images/PRF-recat.png',
  '/SP-APP/assets/images/PV-recat.png',
  '/SP-APP/assets/images/RCXII-recat.png',
  '/SP-APP/assets/images/RF8-120EC-Low-Profile.webp',
  '/SP-APP/assets/images/RF10-160EC-Full-Size.webp',
  '/SP-APP/assets/images/RFV-recat.png',
  '/SP-APP/assets/images/RLX-recat.png',
  '/SP-APP/assets/images/SDB-recat.png',
  '/SP-APP/assets/images/SDBD-recat.png',
  '/SP-APP/assets/images/SMXD-recat.png',
  '/SP-APP/assets/images/smxdk.webp',
  '/SP-APP/assets/images/SQB-recat.png',
  '/SP-APP/assets/images/SQD-recat.png',
  '/SP-APP/assets/images/STXB-recat.png',
  '/SP-APP/assets/images/SWF-recat.png',
  '/SP-APP/assets/images/TD-MIXVENT-recat.png',
  '/SP-APP/assets/images/TD-SILENT-recat.png',
  '/SP-APP/assets/images/TDB-recat.png',
  '/SP-APP/assets/images/TDD-recat.png',
  '/SP-APP/assets/images/tjfu-recat.png',
  '/SP-APP/assets/images/TR-recat.png',
  '/SP-APP/assets/images/TRC-recat.png',
  '/SP-APP/assets/images/TRe2-recat.png',
  '/SP-APP/assets/images/trcen-cat.png',
  '/SP-APP/assets/images/TRLPe110_RGB.webp',
  '/SP-APP/assets/images/TUB-HT-recat.png',
  '/SP-APP/assets/images/UBRD-recat.png',
  '/SP-APP/assets/images/UBSRD-recat.png',
  '/SP-APP/assets/images/vgd-recat.png',
  '/SP-APP/assets/css/styles.css',
  '/SP-APP/assets/css/cross-ref-style.css',
  '/SP-APP/js/main.js',
  '/SP-APP/pages/cross-ref.html',
  '/SP-APP/pages/library.html',
  '/SP-APP/pages/products.html',
  '/SP-APP/pages/important-links.html',
  '/SP-APP/data/competitors.json',
  '/SP-APP/data/cross-references.json',
  '/SP-APP/data/documents.json',
  '/SP-APP/data/products.json',
  '/SP-APP/data/importantLinks.json',
  '/SP-APP/components/cross-reference-table.js',
  '/SP-APP/components/document-viewer.js',
  '/SP-APP/components/navbar.js',
  '/SP-APP/components/backButton.js',
  '/SP-APP/components/links.js',
  '/SP-APP/components/product-list.js',
  '/SP-APP/assets/images/DBF-100XC.jpg',
  '/SP-APP/assets/images/Tempest-THVLS.png',
  '/SP-APP/assets/images/Tornado-THVLS.png',
  '/SP-APP/assets/images/UB-recat.png',
  '/SP-APP/assets/images/UBS-recat.png'
 

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

].map(url => encodeURI(url));


// Install event: Cache essential resources when the service worker is installed
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        const cachePromises = essentialCacheResources.map(url => {
          return fetch(url).then(response => {
            if (response.ok) {
              return cache.put(url, response);
            } else {
              console.warn(`URL ${url} returned status ${response.status}`);
            }
          }).catch(error => {
            console.warn(`No response received for ${url}:`, error.message);
          });
        });
        return Promise.all(cachePromises);
      })
  );
  
  // Update the service worker immediately after installation
  self.skipWaiting();
});

// Activate event: Clear old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((oldCacheName) => {
          return oldCacheName !== cacheName;
        }).map((oldCacheName) => {
          return caches.delete(oldCacheName);
        })
      );
    }).then(() => {
      return self.clients.claim();
    }).then(() => {
      // Send message to clients to trigger refresh
      self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({ action: 'refreshContent' });
        });
      });
    })
  );
});

// Update event: Force the waiting service worker to become the active service worker
self.addEventListener('message', event => {
  if (event.data.action === 'refreshContent') {
      self.skipWaiting();
  }
});

// Update the service worker periodically
setInterval(() => {
  self.registration.update();
}, 24 * 60 * 60 * 1000); // Check for updates every 24 hours