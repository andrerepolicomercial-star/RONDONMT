const CACHE_NAME = 'rondonmt-icons-20261122b';
const FILES = ['./','./index.html','./manifest.webmanifest','./favicon.ico','./favicon-32.png','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install', e => {e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{if(r.ok && new URL(e.request.url).origin===self.location.origin){const clone=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,clone));}return r;}).catch(()=>caches.match(e.request)));});
