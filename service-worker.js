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
    "revision": "e4af253cfefc7498dc2c4ae45436961b"
  },
  {
    "url": "assets/css/0.styles.8e7c5fb2.css",
    "revision": "d7def4fa5d7d1327f556ee886222dbde"
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
    "url": "assets/js/11.5d413cd1.js",
    "revision": "d0a97180a530a1669bb6771038db9106"
  },
  {
    "url": "assets/js/12.d1300313.js",
    "revision": "9f3e91b258533a512c47f15adf8d3aeb"
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
    "url": "assets/js/9.f8fb39ff.js",
    "revision": "086c708a7e2c0b59fd969eeadef7158f"
  },
  {
    "url": "assets/js/app.174121f7.js",
    "revision": "1878626eddcf1be0fab90a77c3642651"
  },
  {
    "url": "en/markdown/hoge1.html",
    "revision": "74345531e3a3dac5ef7aa186ed0ea82b"
  },
  {
    "url": "en/markdown/hoge2.html",
    "revision": "2a5a65d74ec5e1c2e438349bd898e42d"
  },
  {
    "url": "en/markdown/index.html",
    "revision": "b2b755b752eeaa5f44772b6fddef102e"
  },
  {
    "url": "hero.png",
    "revision": "4916477036b379438c18e92e954fb118"
  },
  {
    "url": "index.html",
    "revision": "c1fb0a3c7434c91412016a50ace29adf"
  },
  {
    "url": "ja/markdown/hoge1.html",
    "revision": "20059a081bccf680102ea0250b977b6b"
  },
  {
    "url": "ja/markdown/hoge2.html",
    "revision": "874ccce3d830b168a758c53c74f9ad4c"
  },
  {
    "url": "ja/markdown/index.html",
    "revision": "b8218d5a4e84dfa0b5df356a5cf84fb9"
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
