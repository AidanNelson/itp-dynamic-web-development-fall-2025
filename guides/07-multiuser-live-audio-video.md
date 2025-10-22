---
title: Multiuser Live Audio and Video
layout: default
nav_order: 70
permalink: multiuser-live-audio-video
parent: Guides
---

# WEBRTC

---

[WebRTC](http://en.wikipedia.org/wiki/WebRTC) is a standard being put forth by the W3C to create an API to deliver realtime data, audio, and video between browsers in a peer to peer fashion.

### SIMPLEPEER

[SimplePeer](https://github.com/feross/simple-peer) abstracts WebRTC to make it more manageable but it is still somewhat of a low-level API.

To use SimplePeer to create peer connections, we need to initialize it in two browsers. One which is an “initiator” and one which is a “receiver”:

**Initiator:**

let simplepeer = new SimplePeer({
initiator: true,
`trickle: false });`

**Receiver:**

    let simplepeer = new SimplePeer({
    	initiator: false,
    	trickle: false
    });

SimplePeer then generates “signals” which need to be transmitted to the other side as they are generated. This is called “signalling”:

    simplepeer.on('signal', data => {
    	// relay this "data" to the peer
    	signalDisplay.innerHTML = "Send this to peer:"+JSON.stringify(data);
    });

The other side will take that data and give it to their instance of SimplePeer:

    simplepeer.signal(received_data);

This process goes back and forth until there is a “connection” between the peers:

simplepeer.on('connect', () => {
`console.log('CONNECT') });`

At this point, we can send our [WebRTC – getUserMedia Streams](https://itp.nyu.edu/~sve204/liveweb_spring2022/week4.html):

    simplepeer.addStream(mystream);

Here is an example of it in action: [simple_receiver.html](https://itp.nyu.edu/~sve204/liveweb_spring2022/simple_receiver.html)  
[simple_initiator.html](https://itp.nyu.edu/~sve204/liveweb_spring2022/simple_initiator.html)

### SIGNALING SERVER

Generally, systems aren’t sending these JSON messages back and forth through copy and paste or Zoom chat; instead, there is typically a “signalling server” in the mix. The nice thing for us is that signalling servers often take the form of a WebSocket server as we are essentially sending text messages back and forth between clients.

In order to make a signalling server that works for more than one peer connection we’ll need to modify our existing socket servers to store some user information on the server side and on the client side also keep track of the individual connections.

One way you might do this is to have an array of users or peers on the server:

    let peers = [];

and when someone connects, push their connection on to that array:

    peers.push({socket: socket});

of course, we’ll need to be able to send that list of peers to each browser when they request it:

    socket.on('list', function() {
    	let ids = [];
    	for (let i = 0; i < peers.length; i++) {
    		ids.push(peers[i].socket.id);
    	}
    	socket.emit('listresults', ids);
    });

Our server will need to relay those “signals” back and forth:

    socket.on('signal', (to, from, data) => {
    	console.log("SIGNAL", to, data);
    	let found = false;
    	for (let i = 0; i < peers.length; i++) {
    		if (peers[i].socket.id == to) {
    			console.log("Found Peer, sending signal");
    			peers[i].socket.emit('signal', to, from, data);
    			found = true;
    			break;
    		}
    	}
    	if (!found) {
    		console.log("never found peer");
    	}
    });

The above code receives the socket.id for whom the message is meant for, the “to”. The socket.id for whom the message is “from”. and finally the signal message itself. It then loops through the peers array and emits to the corresponding peer.

The last thing our server needs is a way to remove users from the peers array when they disconnect:

    socket.on('disconnect', function() {
    	console.log("Client has disconnected " + socket.id);
    	for (let i = 0; i < peers.length; i++) {
    		if (peers[i].socket.id == socket.id) {
    			peers.splice(i,1);
    		} else {
    			peers[i].socket.emit('peer_disconnect', socket.id);
    		}
    	}
    });

Putting these pieces all together, we get something like this: [week5-new-example.zip](https://itp.nyu.edu/~sve204/liveweb_spring2022/week5_new/week5-new-example.zip)
