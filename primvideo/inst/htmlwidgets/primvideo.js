HTMLWidgets.widget({

  name: 'primvideo',

  type: 'output',

  factory: function(el, width, height) {

    return {

      renderValue: function(x) {
        el.innerHTML = `
          <style>
            .video {
              position: relative;
              margin: 0 auto;
            }
    
            #my-video {
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
          </style>
          
          <div class="video">
            <video class="video-js vjs-default-skin vjs-big-play-centered" width="${width}" height="${height}" id="my-video">
              <source src="${x.url}" type='${x.type}'>
              <p class="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a web browser that
                <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
              </p>
          </video>
        </div>
        `;
        videojs(document.querySelector(`#${el.id} video`), {
          fluid: true,
          controls: true,
          preload: "auto",
          responsive: true,
          poster: `${x.screenshot}`
        });
      },
      
    };
  }
});
