---
title: "Immich: Escaping the Cloud"
tags:
  - difficulty-easy
  - cloud
  - project
date: 2025-08-08
lastmod: 2025-08-08
draft: false
---
Immich is an open source image hosting service that you can run yourself with multi-account access to image library backups, complete with modern features like tagging, location history, and server sided ML search by face or by object.

I was motivated to set this up by the move to iOS 18.0. 
- Before the upgrade, I could OCR search my entire library.
- After the upgrade, only photos taken after the upgrade can be OCR searched. Forcing reindexing did not fix this.
- I don't want to upgrade further to hope they fixed the bug, because then I'd get all the AI feature nonsense. I upgraded specifically in the short window of iOS 18 which had these features disabled because I wanted RCS and nothing else.
## Setup
Immich provides a template Docker compose file and environment file (**which you should change to a secure database password**). I'm running it on slightly beefier specs than my usual micro webserver VPSes. Namely, this hardware has a GPU for accelerated ML detection/search. 

You'll only need to use your traffic manager/proxy to route to one port (the web dashboard), all the other container networking is already set up in the template files! I have the port exposed on an internal subnet, which my VPS running the master nginx configuration can access.
### Nginx
You will need to set specifics to handle the load of uploading images and video. Namely, the packet sizes and the ability to use websockets.
```
server {
	server_name whatever.com;
	client_max_body_size 16G; # Silly limit for photos and video
	location / {
		...
		# Websocket capability
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection "upgrade";
		proxy_read_timeout 86400; # allow long upload time
		proxy_max_temp_file_size 0; # Don't cache and make it look like something didn't upload on the user end
	}
}
```

## Use
Uploads by themselves are seamless, and you can set the mobile app to track certain albums as "backup albums" and replicate them on the server. I do this so I have a backup of my most important photos.

Multi-user isn't in my use case, but it would be really good for a family or a project group. Users automatically show up with the ability to grant them permissions when you try to share an image.

And speaking of sharing an image, the ability to select a group of files and generate a shareable viewing link for only those is amazing! I use that quite often with my friends.

The app actually has version numbers listed on the main user menu, so admin users can see when the app version and server version are out of date and when it's time to ssh in and update.

The ML search isn't perfect (some faces are considered distinct when they're of the same person, and some objects don't return when searched for), but it's definitely better than not being able to text search my image library.