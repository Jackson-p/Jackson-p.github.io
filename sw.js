if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,t)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return c;default:return e(r)}})).then(e=>{const r=t(...e);return s.default||(s.default=r),s})}))}}define("./sw.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/index.html",revision:"63f80838723f7698a96fced66ec28380"},{url:"/static/bcg.c60c0477.jpg",revision:"2d447b7dd330a179aef5e7c3806ce759"},{url:"/static/head.5454b971.jpg",revision:"2c6f7d1e0071cb251505f8ab801861a7"},{url:"/static/weibo.bc8dceaa.png",revision:"90e3e73822405f0ee8eeea27756b1541"},{url:"/umi.603fa3f8.css",revision:"718b11c99cb89a96f1db877429ac890d"},{url:"/umi.c28ead94.js",revision:"432b4b0a420b38f72ae5499f3244e2e7"}],{})}));
