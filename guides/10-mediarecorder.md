---
title: Media Recorder
layout: default
nav_order: 100
permalink: mediarecorder
parent: Guides
---

# Media Recorder
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

## MEDIARECORDER

A new feature the [MediaRecorder API](https://www.w3.org/TR/mediastream-recording/) is available in somewhat recent versions of Chrome and Firefox.

Here is the basic usage. It assumes that the “stream” variable is from a “getUserMedia” call or an incoming WebRTC stream:

    // This array will contain "chunks" of the video captured by the MediaRecorder
    var chunks = [];

    // Give the MediaRecorder the stream to record
    var mediaRecorder = new MediaRecorder(stream);

    // This is an event listener for the "stop" event on the MediaRecorder
    // Probably should write it:
    // mediaRecorder.addEventListener('stop', function(e) { ... });
    mediaRecorder.onstop = function(e) {
    	console.log("stop");

    	// Create a new video element on the page
    	var video = document.createElement('video');
    	video.controls = true;

    	// Create a blob - Binary Large Object of type video/webm
    	var blob = new Blob(chunks, { 'type' : 'video/webm' });
    	// Generate a URL for the blob
    	var videoURL = window.URL.createObjectURL(blob);
    	// Make the video element source point to that URL
    	video.src = videoURL;

    	// Put the video element on the page
    	document.body.appendChild(video);
    };

    // Another callback/event listener - "dataavailable"
    mediaRecorder.ondataavailable = function(e) {
    	console.log("data");
    	// Whenever data is available from the MediaRecorder put it in the array
    	chunks.push(e.data);
    };

    // Start the MediaRecorder
    mediaRecorder.start();

    // After 2 seconds, stop the MediaRecorder
    setTimeout(function() {
    	mediaRecorder.stop();
    }, 2000);

[Basic getUserMedia Stream Example](https://itp.nyu.edu/~sve204/liveweb_spring2022/mediarecorder_example.html)  
[SimplePeer example from Week 5 updated with recording capabilities](https://itp.nyu.edu/~sve204/liveweb_spring2023/mediarecorder-simplepeer-example.zip)

[p5 createCapture with MediaRecorder Example](https://editor.p5js.org/shawn/sketches/22PAnD-jL)

**Canvas as MediaRecorder Source**One thing that is very interesting, is that a canvas can be streamed using WebRTC in much the same manner as video/audio which also means that we can record a canvas in realtime with MediaRecorder.

To do any of this, all that is required is to get a “stream” from the Canvas:

    var canvasStream = document.getElementById("thecanvas_id").captureStream();

[MediaRecorder from Canvas Example](https://itp.nyu.edu/~sve204/liveweb_spring2022/mediarecordercanvas.html)

[p5 MediaRecorder from Canvas](https://editor.p5js.org/shawn/sketches/7PVhR2nwO)

**More Information:**  
[Record audio and video with MediaRecorder](https://developers.google.com/web/updates/2016/01/mediarecorder)  
[Mozilla has a bit more documentation online](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder)  
[Record almost everything in the browser with MediaRecorder](https://hacks.mozilla.org/2016/04/record-almost-everything-in-the-browser-with-mediarecorder/)

### SAVING ON NODE.JS WITH SOCKET.IO

If you want to send the recorded video to a server for saving, it is as simple as emitting the “blob” of video to the server via a socket.

    mediaRecorder.onstop = function(e) {
    	console.log("stop");

    	var video = document.createElement('video');

    	video.controls = true;
    	var blob = new Blob(chunks, { 'type' : 'video/webm' });
    	var videoURL = window.URL.createObjectURL(blob);
    	video.src = videoURL;

    	document.body.appendChild(video);

    	// Send to the server
    	socket.emit('video',blob);
    };

Then on the server side, when you receive it, you can write it to a file using the fs (file system) module:

    socket.on('video', function(data){
    	console.log(data);
    	fs.writeFile(__dirname + '/x.webm', data, function(err){
    		if (err) console.log(err);
    		console.log("It's saved!")
    	});
    });

[p5 example on Glitch](https://glitch.com/~p5-mediarecorder-and-node-file-storage)

