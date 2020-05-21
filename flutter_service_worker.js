'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "496fc3df15627d40739f7416fdadf494",
".git/config": "dab9a61677d75ef9f74cc08edccf0c97",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b91a34fd8c8f91e002308d91e47efb38",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "fb44e28ae9159b20dc9b75e9b139f8fe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b3ecca470d3e7d842e1e1d2c969d6a1f",
".git/logs/refs/heads/master": "b3ecca470d3e7d842e1e1d2c969d6a1f",
".git/logs/refs/remotes/origin/master": "01e78021605d9cc385dc8df839999ed9",
".git/objects/02/938857a9777bd3ec313a04047a71ad2a6f44ed": "e88e8d221b8e0772171a9113bfd19693",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/18/52742d35082169d9cddf7a1678d68ef4281838": "af83611916dca11bfac2b9fb97b0f3c2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2f/ebf8fdbe99cc164d30b245212b59f42f8c3379": "8edf79560b2814a1d9baa1f03d9ae5a5",
".git/objects/49/cf667db7f58e9a82ca4f2e630e7871ee0dea94": "23c5ea52c29852d039487ed786e667cb",
".git/objects/6c/2e833b08fd16572b1697db482cfd31e082c5ee": "a98b2718d5a6ee11316060d2ecca8f75",
".git/objects/72/e10045371b82e9c28f6abea7ceabb5929fea4e": "51ddda2f4493550b6ff6fde478766d7b",
".git/objects/74/a838452341bff4ae6944737d2ca12cddd28e26": "91920a97989f3b275413249f6dca1ae9",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/84/0a4588bee78c35e36ec9920793f291d5f8548a": "fd8ca7e9fc33c426dc26d33aa36f8d36",
".git/objects/87/e70667b68f69bda449bd8cc19b8f1995f8c636": "56b974e6b57f2de0975641508403c198",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/a4/0d8b2d77665fdda9c9c9e385ecd8b7e628d71b": "1c23d62d71248d764411a13573104894",
".git/objects/ae/e63e364b2f67863489c6047ac072257eb8ccc1": "3691ece99abb3eae933470c0ef762dac",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/3a15761053e58b96d1612d59b69daec0436699": "7fd32a9935562ab357ecc3ac3cd3e807",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/ef/41b4936e37f489076102ae7601d97845cccb02": "9124ba3ebcbb17c5b2731ff98e01df1b",
".git/objects/ef/d60c5410f6e2d26065b0cf559dee1a22310fb8": "2d07c08384eedc870d8fc540bd1e05eb",
".git/objects/f7/8740c5c18ded6ee17fd7e2a74539d16cd05951": "db7f4e0169d0d0bf0a6ddb07b73d3a72",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "8ba5e24ef09c865bcc9c98bd6a227d34",
".git/refs/remotes/origin/master": "8ba5e24ef09c865bcc9c98bd6a227d34",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "829acbc245bd56f693d004352b598b74",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f39fd285f918859d7dadb230a7d3fea3",
"/": "f39fd285f918859d7dadb230a7d3fea3",
"main.dart.js": "93ffec06220c5bd72396b2ca66354b26",
"manifest.json": "ae28a5df8db04452a1dcbf493d02224f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
