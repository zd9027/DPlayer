/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3fc065b74f851f55d0918bd2931298e7"
  },
  {
    "url": "assets/css/0.styles.5f20ea74.css",
    "revision": "0076add97ca94ef83edf37d04977097b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9ba5cb9b.js",
    "revision": "6d6b61efbcdb9893b336586bb3cfa06f"
  },
  {
    "url": "assets/js/11.c355536e.js",
    "revision": "41f87de2faa932b3f0d428b36565acfe"
  },
  {
    "url": "assets/js/12.e023b0de.js",
    "revision": "27ca977f1f3c59ca0638216f697e0868"
  },
  {
    "url": "assets/js/13.95e7d811.js",
    "revision": "5c97f97c7d569ecbf658abfb99144bde"
  },
  {
    "url": "assets/js/14.be5427b7.js",
    "revision": "dec3d62c2361dc5f96c2d54784b6f883"
  },
  {
    "url": "assets/js/15.b44c66c5.js",
    "revision": "e70f017166eb434af4dd23ecabf94888"
  },
  {
    "url": "assets/js/2.b2709c0a.js",
    "revision": "c83fbbb3068838a4dc8d1d83bad28253"
  },
  {
    "url": "assets/js/3.485cbafa.js",
    "revision": "6fed6d57dcac609ec15f48e536ba31ed"
  },
  {
    "url": "assets/js/4.f72dec27.js",
    "revision": "60592ff03a1146d34dedfa3a426382de"
  },
  {
    "url": "assets/js/5.7fd2d482.js",
    "revision": "007c48d307479b8d95ccecf78e9fbe67"
  },
  {
    "url": "assets/js/6.62b62e05.js",
    "revision": "7040c032cc67e0f34e2dd1c8731df83e"
  },
  {
    "url": "assets/js/7.b4d37333.js",
    "revision": "3f59e056dd19f234bf71cbb4da865910"
  },
  {
    "url": "assets/js/8.057a4c99.js",
    "revision": "5474568a78faa40259e13adfe25a4243"
  },
  {
    "url": "assets/js/9.e0a46fd7.js",
    "revision": "51342f409200508815e10c763f1c08ef"
  },
  {
    "url": "assets/js/app.fc84b9ee.js",
    "revision": "8d169842177e9036d8afdef7fb72eb79"
  },
  {
    "url": "ecosystem.html",
    "revision": "c6f388d76c1eaf0c0206d8124cc55d25"
  },
  {
    "url": "guide.html",
    "revision": "08ab4d6f4335756ed92fe69c451137f4"
  },
  {
    "url": "index.html",
    "revision": "5916b3fd05097e52a6965f024ee1ea18"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "20c686881741cfa3b9f8b6a0910c6da1"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "69a4b6e0762922b2ed7a873f44edb862"
  },
  {
    "url": "zh/guide.html",
    "revision": "a620488c079f0ed1433826f2e64a5c38"
  },
  {
    "url": "zh/index.html",
    "revision": "bc65a3e3cc449bfe0470cb0cdd55fb57"
  },
  {
    "url": "zh/support.html",
    "revision": "3c39b2f662f400450af137f287d733ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
