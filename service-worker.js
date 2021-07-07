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
    "revision": "108d5feeef02958060010eb29424ddb2"
  },
  {
    "url": "assets/css/0.styles.7b8ed584.css",
    "revision": "5b10258722420b7c9d3e8103c010ab37"
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
    "url": "assets/js/11.92fde6bc.js",
    "revision": "0ac7e153a03dc644cf7d7440d724c6a8"
  },
  {
    "url": "assets/js/12.d1300313.js",
    "revision": "9f3e91b258533a512c47f15adf8d3aeb"
  },
  {
    "url": "assets/js/13.3c552f6d.js",
    "revision": "f4f8c4e25e2dc5092942750fc02de598"
  },
  {
    "url": "assets/js/14.9743f5a3.js",
    "revision": "6f4149a3b016910281d7a56665b740ec"
  },
  {
    "url": "assets/js/15.36d5dff9.js",
    "revision": "f8ee612ec3f836d67c8d2dacc11d96ea"
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
    "url": "assets/js/3.51015636.js",
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
    "url": "assets/js/app.3ff3d678.js",
    "revision": "7760b3d467803010c11147fb526c07b4"
  },
  {
    "url": "en/markdown/hoge1.html",
    "revision": "e51c439782d7f759a43752a59e1085ef"
  },
  {
    "url": "en/markdown/hoge2.html",
    "revision": "19b50219d2aad695133e2402de370d8c"
  },
  {
    "url": "en/markdown/index.html",
    "revision": "8cde78c418b336a4623603310e0a4ce7"
  },
  {
    "url": "hero.png",
    "revision": "4916477036b379438c18e92e954fb118"
  },
  {
    "url": "index.html",
    "revision": "22201ffaca5c92fe787fd02ba68384d8"
  },
  {
    "url": "ja/markdown/hoge1.html",
    "revision": "20e64e03ea45307179845e7fe87a2dfa"
  },
  {
    "url": "ja/markdown/hoge2.html",
    "revision": "bcd8a79249ae97110ee685fe9e5f388c"
  },
  {
    "url": "ja/markdown/index.html",
    "revision": "d9aaab139ecec960cd50b908b2662dcb"
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
