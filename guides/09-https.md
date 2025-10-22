---
title: HTTPS
layout: default
nav_order: 90
permalink: https
parent: Guides
---

# HTTPS
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

HTTPS is a “secure” version of HTTP. It uses SSL or TLS to encrypt the contents of HTTP. Traditionally it has been used for banking and other more sensitive content, now it’s use is widespread.

Normally to serve pages with HTTPS you need to get certificate that verifies your identity from a [Certificate Authority](https://en.wikipedia.org/wiki/Certificate_authority).

At IMA/ITP we purchased a “wildcard” certificate which can be used on any server that uses the itp.io domain. We’ll need to create a NET-ID.itp.io DNS entry for each of you. This means that if you install and use our certificate (which I’ll email) correctly, you can serve your pages via https://NET-ID.itp.io without hassle.

Down the road, you might want to checkout [Let’s Encrypt](https://letsencrypt.org/), a new service which provides free certificates. [Using Let’s Encrypt with Express](https://itp.nyu.edu/~sve204/dwd_spring2018/letsencrypt.html)

More about Public Key Cryptography: [Public Key Cryptography: Diffie-Hellman Key Exchange](https://www.youtube.com/watch?v=3QnD2c4Xovk)

#### Using HTTPS with Express

Fortunately, node has a drop in replacement for the “http” library called “https”. Here is a basic Express example:

var https = require('https');
var fs = require('fs'); // Using the filesystem module

var credentials = {
key: fs.readFileSync('my-key.pem'),
cert: fs.readFileSync('my-cert.pem')
};

// Start Normal Express Code
var express = require('express');
var app = express();

app.get('/', function(req, res) {
res.send("Hello World!");
});
/////

var httpsServer = https.createServer(credentials, app);

// Default HTTPS Port
httpsServer.listen(443);

