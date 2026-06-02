const cacheName = 'EMLCount';
const staticAssets = [
 'index.htm',
 'EMLicon512x512.png', // Include your icons for offline access
 'EMLicon192x192.png',
 'EMLicon180x180.png', 
 'EMLicon152x152.png' 
									];
self.addEventListener('install', async () => 
	{
 		const cache = await caches.open(cacheName);
 		await cache.addAll(staticAssets);
	});
self.addEventListener('fetch', event => 
	{
 		event.respondWith(cacheFirst(event.request));
	});
async function cacheFirst(request) 
	{
 		const cachedResponse = await caches.match(request);
 		return cachedResponse || fetch(request);
	}
