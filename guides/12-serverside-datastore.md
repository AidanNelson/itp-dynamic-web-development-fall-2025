---
title: Serverside Datastore
layout: default
nav_order: 120
permalink: serverside-datastore
parent: Guides
---

# Serverside Datastore
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

## SERVER SIDE DATASTORE

With Node.js we can use a variety of database engines such as MySQL, Postgres, MongoDB, and so on.

[nedb](https://www.npmjs.com/package/nedb) is a MongoDB compatible in memory or on disk datastore that is quick and easy for us to work with without going through a big setup process so let’s get a start with databases there.

In order to use it, we have to install it as we would any normal server side node module:

npm install nedb
(or the "add package" in the package.json on Glitch)

Here is some quick code to show you how it works. See the [nedb documentation](https://www.npmjs.com/package/nedb) for more.

    // Database to store data, don't forget autoload: true
    var Datastore = require('nedb');
    var db = new Datastore({filename: "data.db", autoload: true});


    // Create a JavaScript Object with data to store
    var datatosave = {
    	name: "Shawn",
    	message: "Hello world"
    };

    // Insert the data into the database
    db.insert(datatosave, function (err, newDocs) {
    	console.log("err: " + err);
    	console.log("newDocs: " + newDocs);
    });

    // Find all of the existing docs in the database
    db.find({}, function(err, docs) {
    	// Loop through the results, send each one as if it were a new chat message
    	for (var i = 0; i < docs.length; i++) {
    		console.log(docs[i].name + " " + docs[i].message);
    	}
    });

[Here is a full chat with database to save history example](https://itp.nyu.edu/~sve204/liveweb_spring2023/nedb.zip)

[p5 + MediaRecorder + Glitch + Nedb](https://glitch.com/~p5-mediarecorder-store-files-nedb)

