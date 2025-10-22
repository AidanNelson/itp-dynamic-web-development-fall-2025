---
title: Becoming Live
layout: default
nav_order: 40
permalink: becoming-live
parent: Guides
---

# Becoming Live

{: .no_toc }

<details closed markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

## AJAX

AJAX (Asynchronous JavaScript and XML) is a technique for making a new request to a server through JavaScript without reloading an entirely new page from the server.

Originally it was made possible by the [XMLHttpRequest](http://www.w3schools.com/XML/xml_http.asp) object although more recently the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) was introduced which makes it easier to work with.

<div id="fetch-example-div" class="code-example">
<h3>Get info from the Art Institute of Chicago's Open API:</h3>
<button id="fetch-button">Click Me</button>
<script>
let url = "https://api.artic.edu/api/v1/artworks/129884";
document.getElementById('fetch-button').addEventListener('click',getInfo);
function getInfo(){
fetch(url)
.then(function (response) {
return response.json();
})
.then(function (data) {
console.log(data);
document.getElementById("fetch-example-div").innerHTML += data.data.description;
});
}
</script>
</div>
```js
let url = "https://api.artic.edu/api/v1/artworks/129884";

fetch(url)
.then(function (response) {
return response.json();
})
.then(function (data) {
console.log(data);
}

````

Here is a quick [AJAX example](http://itp.nyu.edu/~sve204/connect_spring2021/ajax_example.zip) which loads content from a text file on a server (repeatedly)

This example is very simplistic but a illustrates many points. First of all, the browser loads the HTML and executes the JavaScript contained within index.html. At the bottom of the JavaScript there is an “window.addEventListener” for the “load” event which is assigned to run a function called “setup_ajax”. This ensures that the “setup_ajax” function will run after the HTML page is rendered and the JavaScript functions are all defined.

We can modify the text file that is being called repeatedly by the AJAX at any time and the change would be reflected on the user’s browser.

(We could make a platform which enabled many people at once to experience changes to a file on the server. This could be the basis of a chat room or any other live platform that we choose.)

**More Information:** [A Brief History of Ajax by Aaron Swartz](http://www.aaronsw.com/weblog/ajaxhistory)

## WebSockets

One of the drawbacks to the above method is that it can never be truly live, there is a delay in between the requests to the server ([pull request](https://en.wikipedia.org/wiki/Pull_technology)). Also, each of these requests has quite a bit of overhead, each involves the creation of a socket, the sending of the request, the server handling that request, spawning whatever process it needs to and so on.

A [WebSocket](https://en.wikipedia.org/wiki/WebSocket) offers a solution to the above issues. It is a persistent connection between the client and server any change in state or new data can be instantly sent from client to server or server to client with very little latency.

WebSockets have very little to do with traditional HTTP as it is a thin wrapper on a normal TCP socket. It is however supported via JavaScript by most modern browsers (and in just about every other language on just about any other platform available).

Here is some JavaScript which illustrates WebSockets

```js
var websocket = new WebSocket("ws://echo.websocket.org");  // this server no longer exists 		
	  	
// Callbacks  	
websocket.onopen = function(evt) { alert("onopen " + evt) };  	
websocket.onclose = function(evt) { alert("onclose " + evt) };  	
websocket.onmessage = function(evt) { alert("onmessage " + evt.data) };  	
websocket.onerror = function(evt) { alert("onerror " + evt) };  	

// Sending 	
websocket.send("hi");
```

As you can see, this example is connecting to a server called echo.websocket.org with the “ws” protocol. In order to support WebSockets with our own servers, we need to write an application that can understand the protocol and handle the connections. While there are a variety of different languages and servers that can do so, I prefer one, one that through it’s design handles socket event style programming well.

## Node.js

JavaScript (ECMAScript) engine for building server side apps
[http://nodejs.org/](http://nodejs.org/)
[Uses V8](https://developers.google.com/v8/)

**Event/Callback driven** – A callback function is registered for a specific event. When that event occurs the callback method is run.

## Chat

Here is a full chat example that we can start with:

### Server.Js

```js
// Express is a node module for building HTTP servers
var express = require("express");
var app = express();

// Tell Express to look in the "public" folder for any files first
app.use(express.static("public"));

// If the user just goes to the "route" / then run this function
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// Here is the actual HTTP server
var http = require("http");
// We pass in the Express object
var httpServer = http.createServer(app);
// Listen on port 80
httpServer.listen(80);

// WebSocket Portion
// WebSockets work with the HTTP server
var io = require("socket.io")(httpServer);

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on(
  "connection",
  // We are given a websocket object in our function
  function (socket) {
    console.log("We have a new client: " + socket.id);

    // When this user emits, client side: socket.emit('otherevent',some data);
    socket.on("chatmessage", function (data) {
      // Data comes in as whatever was sent, including objects
      console.log("Received: 'chatmessage' " + data);

      // Send it to all of the clients
      socket.broadcast.emit("chatmessage", data);
    });

    socket.on("disconnect", function () {
      console.log("Client has disconnected " + socket.id);
    });
  }
);
````

### Index.Html

```html
<html>
  <head>
    <script type="text/javascript" src="/socket.io/socket.io.js"></script>
    <script type="text/javascript">
      var socket = io.connect();

      socket.on("connect", function () {
        console.log("Connected");
      });

      // Receive from any event
      socket.on("chatmessage", function (data) {
        console.log(data);
        document.getElementById("messages").innerHTML =
          "" + data + +"" + document.getElementById("messages").innerHTML;
      });

      var sendmessage = function (message) {
        console.log("chatmessage: " + message);
        socket.emit("chatmessage", message);
      };
    </script>
  </head>
  <body>
    <div id="messages">No Messages Yet</div>
    <input type="text" id="message" name="message" />
    <input
      type="submit"
      value="submit"
      onclick="sendmessage(document.getElementById('message').value);"
    />
  </body>
</html>
```
