if(!self.define){let e,i={};const n=(n,a)=>(n=new URL(n+".js",a).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const d=e=>n(e,r),o={module:{uri:r},exports:s,require:d};i[r]=Promise.all(a.map((e=>o[e]||d(e)))).then((e=>(c(...e),s)))}}define(["./workbox-94c66d79"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2.bundle.js",revision:"db33bb721f49f0b29bd26e76e0874eb1"},{url:"946.bundle.js",revision:"cbc435a155cc44d631a17ce6c4bafa19"},{url:"app.webmanifest",revision:"d2fa54a5b76ec25a274aa33b2b5e4fd9"},{url:"app~49ea73a0.bundle.js",revision:"25f64162fbb61250ca1a63068653eb8d"},{url:"app~49ea73a0.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"2fd01a49cb143fb08d0dcda45e07231d"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~d1658f4b.bundle.js",revision:"a149c9a7cbd2eeb50e083a893dcb15cd"},{url:"app~e4317507.bundle.js",revision:"96be53321b6f254948416249c0bc9fe7"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"icons/icon-128x128.png",revision:"566d65c0e1097281177f4a01e3976a64"},{url:"icons/icon-144x144.png",revision:"b51e1cb01e0c697d2998ba2dc25c7284"},{url:"icons/icon-152x152.png",revision:"6b210ce9dc809dcc6cd7835e4d07f3e4"},{url:"icons/icon-192x192.png",revision:"eda06037a5429eec74c7cfdbae65d435"},{url:"icons/icon-384x384.png",revision:"aea8067ddf5e604ab140987d90fe8339"},{url:"icons/icon-512x512.png",revision:"85ea4e03a0bf0373180ae704c413abe8"},{url:"icons/icon-72x72.png",revision:"1004aedd1285c7bc803f6d775beb6943"},{url:"icons/icon-96x96.png",revision:"9b8ea9f90034a047efe14b1045f42fa5"},{url:"images/logo/logo.png",revision:"ecfc59e6b0039b702710eb1079544b8f"},{url:"index.html",revision:"f36c7e598ab492f5d9b45ba3defd3797"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev")),new e.StaleWhileRevalidate({cacheName:"restaurant-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium")),new e.StaleWhileRevalidate({cacheName:"restaurant-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map