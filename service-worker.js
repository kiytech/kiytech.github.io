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
    "revision": "c426e04f4ac8f42fda0bc4a6de7c328e"
  },
  {
    "url": "assets/css/0.styles.45e2578c.css",
    "revision": "50a71b05a0fb058d6de178b485a0d4aa"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7c988d48.js",
    "revision": "0033b86ffd62f7236c2700c7e8756568"
  },
  {
    "url": "assets/js/11.92fde6bc.js",
    "revision": "0ac7e153a03dc644cf7d7440d724c6a8"
  },
  {
    "url": "assets/js/12.2450b7fd.js",
    "revision": "f94d444f192f80b454af14b767952d6c"
  },
  {
    "url": "assets/js/13.4bfaf4b9.js",
    "revision": "1bf8e3bb8008a346e9811f388f50aa80"
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
    "url": "assets/js/app.482905d5.js",
    "revision": "3f45adfd13ecd4e0df4cbdfac5d7227a"
  },
  {
    "url": "en/markdown/hoge1.html",
    "revision": "3dace18428d70f615ef40db62642cd82"
  },
  {
    "url": "en/markdown/hoge2.html",
    "revision": "3bdbdff8b1b1f7738276eb0629e347d6"
  },
  {
    "url": "en/markdown/index.html",
    "revision": "5d09760ff5f52f733669cb26df4946b8"
  },
  {
    "url": "hero.png",
    "revision": "4916477036b379438c18e92e954fb118"
  },
  {
    "url": "index.html",
    "revision": "5eb4213c30d1150e4f75cb2cb79b9155"
  },
  {
    "url": "ja/markdown/hoge1.html",
    "revision": "f70c272e590c7fa135d6a1b8bb725d41"
  },
  {
    "url": "ja/markdown/hoge2.html",
    "revision": "7c5db53613096a4958541295e750044d"
  },
  {
    "url": "ja/markdown/index.html",
    "revision": "2b8bb92f950edd33ab8a7be99230dcef"
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
