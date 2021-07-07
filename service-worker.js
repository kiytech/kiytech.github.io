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
    "revision": "fa4a5471d1de5cd11173929106c1a467"
  },
  {
    "url": "assets/css/0.styles.84446514.css",
    "revision": "0ad2a284b577bf841af36639870ee345"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.41b59720.js",
    "revision": "be3f3ca3b27698bbd07c77ec93b3a37a"
  },
  {
    "url": "assets/js/11.1906ef57.js",
    "revision": "9d778b0d11c59fd18f2d9522006f1cc4"
  },
  {
    "url": "assets/js/12.aeeaeaee.js",
    "revision": "9a7787c342f2d7833f9a833505b26464"
  },
  {
    "url": "assets/js/13.9346101a.js",
    "revision": "ab97cd8371217efb1de5df1afd6d9877"
  },
  {
    "url": "assets/js/14.9743f5a3.js",
    "revision": "6f4149a3b016910281d7a56665b740ec"
  },
  {
    "url": "assets/js/15.f0dfcd1c.js",
    "revision": "bdf5887dea8b37788cfdfaa837fbd68e"
  },
  {
    "url": "assets/js/16.9e0c2e0c.js",
    "revision": "a15c659a0a9637b1da7ba41297019a37"
  },
  {
    "url": "assets/js/2.edd1a3c8.js",
    "revision": "9a97480701118ceb66dd0ea36a0e86c8"
  },
  {
    "url": "assets/js/3.c466f351.js",
    "revision": "4ac00a194ed045234d118da0b263c9cd"
  },
  {
    "url": "assets/js/4.d3109b7a.js",
    "revision": "b77e8fe8e70284ad9d6c1f78ae344c37"
  },
  {
    "url": "assets/js/5.56d0bfdf.js",
    "revision": "df5ebcffbca13e60d11d60228f6f6543"
  },
  {
    "url": "assets/js/6.ce78c358.js",
    "revision": "53e1a7b3f9e237f4d3a9230a48a61d0c"
  },
  {
    "url": "assets/js/7.a13d156a.js",
    "revision": "c4e314262cd985359f100d2ce8b69bc2"
  },
  {
    "url": "assets/js/8.8e08b0d3.js",
    "revision": "adea4b684a5d021949eb634ec088b73c"
  },
  {
    "url": "assets/js/9.0066b1d0.js",
    "revision": "2fb2c14280ac9968f3c907d4a2d0a0d8"
  },
  {
    "url": "assets/js/app.917e3c10.js",
    "revision": "daae272310b59281841e5da913f5fa05"
  },
  {
    "url": "en/markdown/hoge1.html",
    "revision": "0db1554c872986be8834bb1b5490f13a"
  },
  {
    "url": "en/markdown/hoge2.html",
    "revision": "e124f29978b732d3833b307234e47467"
  },
  {
    "url": "en/markdown/index.html",
    "revision": "5ddb34377cfea1294139d41f75a9c478"
  },
  {
    "url": "hero.png",
    "revision": "4916477036b379438c18e92e954fb118"
  },
  {
    "url": "index.html",
    "revision": "a83fb267adf536facb7feb1498966b91"
  },
  {
    "url": "ja/markdown/hoge1.html",
    "revision": "9c19f651a02bba941e5248afccb6e3cd"
  },
  {
    "url": "ja/markdown/hoge2.html",
    "revision": "8bd67302b69b7e4d84990f35abe254e2"
  },
  {
    "url": "ja/markdown/index.html",
    "revision": "2f5884c149433a4bb43ae8fe0e125186"
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
