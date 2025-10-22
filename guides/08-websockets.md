---
title: Websockets with p5.js
layout: default
nav_order: 80
permalink: websockets-with-p5
parent: Guides
---

# WebSockets with p5.js
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

WebSockets with their real-time capabilities can be used with a wide variety (any) of JavaScript libraries.  p5.js is no exception!  This opens up the possibility for p5.js sketches to become multi-user or collaborative.

In order to use Socket.io with p5.js, we simply need to create a p5.js sketch – downloading from the editor is a good way to get started – and integrate what we have been doing in plain JavaScript.

This starts with including the socket.io library in the HTML:

<!DOCTYPE html><html lang="en"><head>

**<script type="text/javascript" src="/socket.io/socket.io.js"></script>**
    <script src="p5.js"></script>    
<script src="p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8">

  </head>
  <body>
    <script src="sketch.js"></script>
</body></html>

using a server to both deliver the p5 Sketch and support the socket connections.  This server relays mouse position data from each user to all of the other users:

// Express is a node module for building HTTP servers
var express = require("express");
var app = express();

// Tell Express to look in the "public" folder for any files first
app.use(express.static("public"));  // This is where the HTML, p5.js, sketch.js and so on should be stored

// If the user just goes to the "route" / then run this function
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// Here is the actual HTTP server
var http = require("http");

// We pass in the Express object
var httpServer = http.createServer(app);

// Listen on port provided by Glitch
//httpServer.listen(process.env.PORT);
// OR if running your own server choose your own port
httpServer.listen(8080);

// WebSocket Portion
// WebSockets work with the HTTP server
var io = require("socket.io")(httpServer);

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on(
  "connection",
  // We are given a websocket object in our function
  function (socket) {
    console.log(socket.id + " has joined the chat.");
    socket.on("mouse", function(data) {
      //io.emit("mouse", data);
      socket.broadcast.emit("mouse", data)
});
    socket.on("disconnect", function () {
      console.log(socket.id + " has disconnected.");
});
});

Finally, here is a p5.js sketch.js which works with the server illustrating how socket.io and p5.js can work together:

var socket = io.connect();

socket.on('connect', function() {
    console.log("Connected");
});

socket.on('mouse', function(data) {  
  console.log(data);
  noStroke();
  fill(data.r, data.g, data.b)
  ellipse(data.x, data.y, 20, 20);
});

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  ellipse(mouseX, mouseY, 50, 50);
}

function mouseMoved() {
  var datatosend = {
    x: mouseX,
    y: mouseY,
    r: random(255),
    g: random(255),
    b: random(255)
  }
  socket.emit("mouse", datatosend);
}

[Here is an example](https://glitch.com/edit/#!/p-5-socket-example)
