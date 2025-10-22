---
title: Peer to Peer Data
layout: default
nav_order: 110
permalink: peer-to-peer-data
parent: Guides
---

# Peer to Peer Data
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

## WEBRTC DATA CHANNELS

As we have seen in the class, WebSockets are powerful! We can enable real time interaction in the browser with other clients via a server.

Unfortunately, this last part, “via a server” does create a limitation. A server is required with enough bandwidth and horsepower to handle the data that clients would like to share.

We have also seen in class the power of Peer to Peer audio and video transmission via WebRTC. Having the ability to transfer audio/video directly from one user to another reduces latency, removes the need to have a server located in a high bandwidth environment and basically opens the doors to a wide range of potential application ideas without a lot of cost.

Fortunately, the same thing is also possible with non-audio/video data via the RTCDataChannel API, part of WebRTC.

### SIMPLEPEER

As with WebRTC for audio and video, the [SimplePeer](https://github.com/feross/simple-peer) library makes working with DataChannels much easier.Assuming peers are already connected, the code looks like this:

    // Send
    simplepeer.send(data);

    // Receive
    simplepeer.on('data', data => {
    	console.log("Received: " + data);
    });

[Example using SimplePeer with DataChannels.](https://itp.nyu.edu/~sve204/liveweb_spring2023/datachannels-simplepeer.zip)

### P5LIVEMEDIA

p5LiveMedia supports data transmission between peers as well and the API is equally as simple:

    // Passing in "DATA" as the capture type but data sharing works with "CAPTURE" and "CANVAS" as well

p5lm = new p5LiveMedia(this, "DATA", null, "data-example");
// "data" callback
p5lm.on('data', gotData);

    // gotData callback
    function gotData(data, id) {
    	print(id + ":" + data);

    	// If it is JSON, parse it
    	let d = JSON.parse(data);
    }

    // Sending Data: Package as JSON and then send
    let dataToSend = {x: mouseX, y: mouseY};
    p5lm.send(JSON.stringify(dataToSend));

[Example](https://editor.p5js.org/shawn/sketches/w83C-S6DU)

