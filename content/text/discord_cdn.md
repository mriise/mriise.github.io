## Hosting websites off of Discord's public CDN

So you know how if you upload an image to discord, you can share the link elsewhere and it will still be visible? That means we can use Discord's CDN to host our own files! All we need is a poxy to add the right CORS headers, and then BOOM easy static file hosting. [see here](https://portfolio.mriise.net/sites/discord-site)

#### Don't do this.

As cool/fun as it may seem, it is not the desired intent of the people at discord for you to use their CDN to host your own website and files. Common attempts to proxy their CDN (like through Cloudflare workers) are blocked by Discord, and there is no gaurentee that any file will be hosted for any amount of time by Discord. 

#### 

It's a messaging app, not a CDN host. If you really want to host files and static websites, try github or a proper CDN like Backblaze.