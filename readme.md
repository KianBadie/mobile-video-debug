Simple demo to debug issues arising with videojs on mobile devices.

The doivideo used in this demo is from the modified/pending version of doivideo that can be seen in [this pr](https://github.com/caltechlibrary/cell-atlas/pull/1)

The primvideo package is very similar to the doivideo package. The main difference is that it serves a local video rather than a remote video as doivideo does. The reason to make it local was to see if it alleviated the bug. The bug was indeed gone when local. Not sure if it is because it is faster, or if there is something videojs doesn't like about how the video is served from the remote sources.