---
title: HTML Audio and Video with WebRTC
layout: default
nav_order: 60
permalink: live-audio-video
parent: Guides
---

# Live Audio/Video

{: .no_toc }

<details open markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

## WebRTC

WebRTC stands for Web Real Time Communication. We’ll get more into this next week but I want to get started with one portion:

### getUserMedia

[getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) is a method specified as part of WebRTC that allows access to the microphone and webcam of users.

<div class="code-example">  
<button id="thebutton">Click Me!</button>
<video id="thevideo"></video>
<script>
let video = document.getElementById("thevideo");
let constraints = { audio: false, video: true };
document.getElementById('thebutton').addEventListener('click',startVideo);
function startVideo(){
navigator.mediaDevices
.getUserMedia(constraints)
.then(function (stream) {
video.srcObject = stream;
video.onloadedmetadata = function (e) {
video.play();
};
})
.catch(function (err) {
alert(err);
});
}
</script>
</div>
```html
<button id="thebutton">Click Me!</button>
<video id="thevideo"></video>
<script>
    // The video element on the page to display the webcam
    let video = document.getElementById('thevideo')
    // Constraints - what do we want?
    let constraints = { audio: false, video: true }
    // Prompt the user for permission, get the stream
    document.getElementById('thebutton').addEventListener('click', startVideo)
    function startVideo() {
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function (stream) {
                /* Use the stream */
                // Attach to our video object
                video.srcObject = stream;
                // Wait for the stream to load enough to play
                video.onloadedmetadata = function (e) {
                    video.play();
                }
            })
            .catch(function (err) {
                /* Handle the error */
                alert(err);
            })
    }
</script>
```

One cool aspect of this is that you can draw the video on to a canvas as well (perhaps to manipulate it):

<div class="code-example">  
<canvas style="width: 300px; height: 50px;" id="thecanvas"></canvas>
<video id="thevideo2"></video>
<button id="thebutton2">Click Me!</button>
<script>
let video2 = document.getElementById("thevideo2");
let constraints2 = { audio: false, video: true };
document.getElementById('thebutton2').addEventListener('click',startVideo2);
function startVideo2(){
navigator.mediaDevices
.getUserMedia(constraints2)
.then((stream) => {
video2.srcObject = stream;
video2.onloadedmetadata = function (e) {
video2.play();
drawVideoToCanvas();
};
})
.catch(function (err) {
alert(err);
});
}
let thecanvas = document.getElementById('thecanvas');
let thecontext = thecanvas.getContext('2d');
let offset = 0;
function drawVideoToCanvas() {
  console.log('draw');
  console.log(video2);
thecontext.drawImage(video2, offset, 0, 50, 150);   
offset += 50;
if (offset >= 300){
  offset = 0;
}

setTimeout(drawVideoToCanvas, 500);  
}
</script>

</div>
```html
<script>
// Canvas element on the page
let thecanvas = document.getElementById('thecanvas');
let thecontext = thecanvas.getContext('2d');
let offset = 0;
// draw video to our cannvas
function drawVideoToCanvas() {
  thecontext.drawImage(video, offset, 0, 50, 150);  
  offset += 50;
  if (offset >= 300) offset = 0;
  setTimeout(drawVideoToCanvas, 500);  
}
</script>
````

From the canvas, you can create an image and send that via Socket.io to everyone else, making simple video server:

```js
// Create a data URL from the canvas
var dataUrl = thecanvas.toDataURL('image/webp', 1)

// Optionally draw it to an image object to make sure it works
document.getElementById('imagefile').src = dataUrl

// Send it via our socket server the same way as we send the image
socket.emit('image', dataUrl)
```

**More Information:** [Capturing Audio and Video in HTML5](http://www.html5rocks.com/en/tutorials/getusermedia/intro/) (a bit out of date)
