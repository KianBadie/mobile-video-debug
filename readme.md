Simple demo to debug issues arising with videojs on mobile devices.

The doivideo used in this demo is from the modified/pending version of doivideo that can be seen in [this pr](https://github.com/caltechlibrary/cell-atlas/pull/1)

The primvideo package utilized in this demo is very similar to the doivideo package. The main difference is that it serves a local video rather than a remote video as doivideo does. The reason to make it local was to see if it alleviated the bug. The bug was indeed gone when video was served from local (reminder, this difference in behaviour is seen on mobile devices). Not sure if it is because it is faster, or if there is something videojs doesn't like about how the video is served from the remote sources. The differences are shown in index.html.

I also have other notes on the page I was taking while debugging that I found helpful for myself.
