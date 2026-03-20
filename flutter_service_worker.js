'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "52b3875ba65e3f4cab9b57123a8bc2df",
"version.json": "a8a52cd7d39cea199bfd70d570c63422",
"index.html": "bf05b69f21a346fe628ca529b87d3bfb",
"/": "bf05b69f21a346fe628ca529b87d3bfb",
"main.dart.js": "bb837badd3f92fc366df44da7d1a6cac",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.mjs": "c802161b314e4f717d5d37ad86ef0b6d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2096b2309f8aa787f36af1efc7537914",
"workers/serial_filter_service.web.g.dart.unopt.wasm": "e2a8351b0a1e121997a3d440fa4a7b4f",
"workers/serial_filter_service.web.g.dart.wasm": "ad06e358dc37fc89bcc6eaf8c7d32792",
"workers/compute_spots.web.g.dart.js.deps": "83ed171a14db4c717b4e9cdeed2c4f2e",
"workers/compute_spots.web.g.dart.wasm": "044475285e1fef1bde07a1efe023b1be",
"workers/compute_spots.web.g.dart.unopt.wasm.map": "51a016eee1129d3bb88aacd321b2ba30",
"workers/compute_spots.web.g.dart.support.js": "59002d908a5278d086a3399af5b91cbe",
"workers/compute_spots.web.g.dart.js": "6caf08c9d6051ea6c2f09532ebca8d94",
"workers/compute_spots.web.g.dart.js.map": "c1e670315535abbb132c2c61f2a4f837",
"workers/serial_filter_service.web.g.dart.js.map": "07846d8ef0b0ea26992188f7825ef01d",
"workers/compute_spots.web.g.dart.mjs": "71379de9a9087bf66662a24e9ff70cde",
"workers/compute_spots.web.g.dart.unopt.wasm": "552c24d8cd9231126db39ef9e1490abd",
"workers/serial_filter_service.web.g.dart.unopt.wasm.map": "19b906c91e7f2f05c4739704e7899ac1",
"workers/serial_filter_service.web.g.dart.mjs": "7f4a7836edc12e7dd5439a8bed8f15ba",
"workers/serial_filter_service.web.g.dart.js": "9ec3caa1b8d4c0ca3cb9aa5326ba006c",
"workers/serial_filter_service.web.g.dart.js.deps": "f99634419043ebbcf7028a2673cd3232",
"workers/serial_filter_service.web.g.dart.wasm.map": "fce800d28b8eb378e151ac0d7547c392",
"workers/compute_spots.web.g.dart.wasm.map": "68da592c23fc8b8ef0b910e32957fb28",
"workers/serial_filter_service.web.g.dart.support.js": "59002d908a5278d086a3399af5b91cbe",
"main.dart.wasm": "4db9e76a1546ebd99f6d84934b0a3013",
".git/config": "8661a171a4596076c880927236478945",
".git/objects/pack/pack-a9dff1ea5afc4e22023bf6dd5d7263a01a633dbe.rev": "cd3667b83203eafc77ff0808680cb94d",
".git/objects/pack/pack-a9dff1ea5afc4e22023bf6dd5d7263a01a633dbe.pack": "edff780a537c043f3d6a50b4e1a80fb5",
".git/objects/pack/pack-a9dff1ea5afc4e22023bf6dd5d7263a01a633dbe.idx": "7e0f5742eaeb9d17ea1c9e02610b5f24",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b3e97bc7997a2f3394262bf93bedc8d9",
".git/logs/refs/heads/main": "b3e97bc7997a2f3394262bf93bedc8d9",
".git/logs/refs/remotes/origin/main": "5c6fc554c8451a440e6f6f3dd1f3d87f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "14d37ebb3a88bb9695bed4c83861438c",
".git/refs/remotes/origin/main": "14d37ebb3a88bb9695bed4c83861438c",
".git/index": "28707b8bdd3efaee7b385d45a776a535",
".git/FETCH_HEAD": "dd0ba8af47ad4e2202147d636a15488e",
"assets/dotenv": "bd3b9d6d6cb7a7fe9c79e1dcda8b4919",
"assets/shorebird.yaml": "cade322c0458a81dcb66fbac6d4fc382",
"assets/NOTICES": "acb70426337e54c968d7fb50b910e5a3",
"assets/FontManifest.json": "861add83a7f0b96388a7a0f64d9ed5f5",
"assets/AssetManifest.bin.json": "e4d53332b0cb6fbb2da57e7b318ad017",
"assets/packages/forui/assets/fonts/inter/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/packages/forui/assets/fonts/inter/Inter-Light.ttf": "a3fe4e0f9fdf3119c62a34b1937640dd",
"assets/packages/forui/assets/fonts/inter/Inter-Thin.ttf": "4558ff85abeab91af24c86aab81509a7",
"assets/packages/forui/assets/fonts/inter/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/packages/forui/assets/fonts/inter/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/packages/forui/assets/fonts/inter/Inter-ExtraBold.ttf": "72ac147c98056996b2a31e95a56d6e66",
"assets/packages/forui/assets/fonts/inter/Inter-ExtraLight.ttf": "7a177fa21fece72dfaa5639d8f1c114a",
"assets/packages/forui/assets/fonts/inter/Inter-Black.ttf": "118c5868c7cc1370fcf5a1fc2f569883",
"assets/packages/forui/assets/fonts/inter/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/forui_assets/assets/lucide.ttf": "f0e85191ecf6feb9fa58e8fd3e7e4235",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "a3b5c2241182d5605303e1f9e8b9488d",
"assets/fonts/MaterialIcons-Regular.otf": "a9f134bac3ae95d81c158e1335ec3a7f",
"assets/assets/wayzn.png": "07bb1034daa0db7038c06714610a9a8b",
"assets/assets/walking_dog.json": "cc9c46c20f8c9763747534151525fce1",
"assets/assets/Happy_Dog.json": "810a1a21747adecfb15270ee9b769967",
"assets/assets/sad_dog.png": "52ae3a2495c18f22861f95ec4b4b6bde",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
