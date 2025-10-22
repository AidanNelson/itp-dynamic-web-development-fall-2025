---
title: Schedule
layout: home
nav_order: 2
---

# Weekly Schedule
{: .no_toc }

<details closed markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

## Week 1

### Objectives

-   Introductions

### Outline

-   Introductions
-   Syllabus
-   Lecture/Workshop – [HTML, CSS](./basic-html-and-css), [javascript & DOM manipulation](./document-object-model)
-   Lecture/Workshop – Media Elements – Encoding – Controlling
-   [Code from Class](https://editor.p5js.org/AidanNelson/sketches/6DQMNdAGR)

### Assignments

- **Read** through the guides on [HTML & CSS](./basic-html-and-css) and [Javascript & DOM Manipulation](./document-object-model)
- **Watch** the following videos:
    -   [HTML Basics](https://stream.nyu.edu/media/html%20basics/1_8ts8q7gu)
    -   [CSS Basics](https://stream.nyu.edu/media/css%20basics/1_7yydov1h)
    -   [CSS Basics – Better Organization](https://stream.nyu.edu/media/css%20basics%20-%20better%20organization%20with%20html/1_rp8pd8ip)
    -   [JavaScript DOM Basics](https://stream.nyu.edu/media/javascript%20dom%20basics/1_s9ufrrai)

-   **Write** a blog post detailing the last “live” media you consumed.  Answer these questions: 
    - What was it?  
    - Why did you consume it “live” or in real time?  
    - How was your relationship to the media or others affected through the “live” consumption of it? 
    - What was missing in your experience?

-   **Create** a self-portrait on a web page using HTML, CSS, and  JavaScript.  Start on the p5.js web editor, open the `index.html` file and make your edits there.  You may use p5.js as *part* of your sketch if you like.  In addition, please use at least (2) of the following elements:
    - [HTML Media Elements](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement): `<video>` or `<audio>`
    - An image tag: `<img>`
    - Use Javascript to change the color, size, font or position of an HTML element
    - Use CSS to animate an element following [this guide](https://www.w3schools.com/css/css3_animations.asp)
    - Use CSS to change a style when someone hovers their mouse pointer over an element following [this guide](https://www.w3schools.com/cssref/sel_hover.php)
    - Create a list with HTML using the `<ul>` tag following [this guide](https://www.w3schools.com/tags/tag_ul.asp)
    - **Advanced**: Use Javascript to add a click-interaction on an element following [this guide](https://www.w3schools.com/jsref/event_onclick.asp)



## Week 2

### Objectives

-   Becoming Live


### Outline

-   Review Homework
-   [AJAX and WebSockets](./becoming-live)
-   [Server Side JavaScript: Node.js](./becoming-live)
-   [Chat](./becoming-live)
-   [Glitch](./becoming-live)
-   [Live version of the code from class](/examples/week-02/index.html) and [Download link](/examples/week-02.zip)

### Assignments

- **[Watch this video](https://drive.google.com/file/d/1NJDJatUKDJVb8am8BMdolt9-xLIcM3Zt/view?usp=sharing)** introducing websockets (you will need to be logged into Google Drive with your NYU email)
- **Reimagine Chat!** After watching the video above, remix the chat application adding your own design / interaction elements.

    1. Create an account on [Glitch.com](https://glitch.com/) web-based code editor.
    2. Open [this chat application](https://glitch.com/edit/#!/f24-liveweb-chat) and press *Remix* to create your own copy.
    3. Modify the front end code (`public/index.html` and `public/sketch.js`) – adding any features or design/interactive elements you wish!

    *Not sure what to create?*  Try one of the following:
    * Add an image with every incoming chat message
    * Make the chat messages appear as leaves which fall after they arrive
    * Each incoming message displays in a different font and color.
    * Use a text [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) box instead of p5.js' `keyPressed()` function to get messages.
    * Use HTML `<p>` elements to display incoming messages using p5.js' [createP()](https://p5js.org/reference/p5/createP/) function or the JavaScript [createElement('p')](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) function
    * Make all of the messages spin in circles
    * Something else entirely...

## Week 3

### Objectives

-   Transmitting Other Data Types

### Outline

-   Student chat project sharing
-   Transmitting Other Data Types
    -   Mouse and Other Events
-   [Canvas](./canvas)
    -   Collaborative Drawing
        -   [Example from Class](https://glitch.com/edit/#!/f24-liveweb-drawing?path=public%2Fsketch.js%3A24%3A27)

### Assignments

- **Watch** this [supplemental video](https://drive.google.com/file/d/15NWgJhBXzZ-cc_c2irETyvLkd_5BLAht/view?usp=sharing) reviewing JS objects and arrays (you will need to be logged into Google Drive with your NYU email)
- **Collaborative Action** Remix the drawing application we began in class, adding in your own design / interaction elements.

    1. Login to your account on [Glitch.com](https://glitch.com/) web-based code editor.
    2. Open [this glitch sketch](https://glitch.com/edit/#!/f24-liveweb-drawing?path=public%2Fsketch.js%3A24%3A27) and press *Remix* to create your own copy.
    3. Modify the front end code (`public/index.html` and `public/sketch.js`) – adding any features or design/interactive elements you wish!  If you want to add an additional interaction, you may need to modify the server code (`server.js`).

    *Not sure what to create?*  Try one of the following:
    * Each peer's mouse hides or reveals an image, creating an interactive maze or a game of "I Spy"
    * Expand on the drawing example so each peer can change their color or brush size and clear the canvas.
    * Create 3D geometries using p5.js' WebGL mode
    * Paint using images!  Follow [this p5.js example](https://p5js.org/examples/imported-media-copy-image-data/) to learn more.
    * Something else entirely... have fun and try something new!

## Week 4

### Objectives

-   Sharing the Canvas 

### Outline

-   Review assignments
-   Design Exercise
-   Code demo: 
    - Capturing and sharing the canvas
    - Capturing and sharing webcam video
-   [HTML5 Audio and Video with WebRTC](./live-audio-video)
-   [Example of sending canvas through socket](https://glitch.com/edit/#!/f24-liveweb-week-4-sending-canvas)
-   [Example of sending webcam video on a canvas through socket](https://glitch.com/edit/#!/f24-liveweb-week-4-sending-webcam-with-canvas?path=public%2Fsketch.js%3A1%3A0)
-   [Example of sending and playing back an animated line](https://glitch.com/edit/#!/f24-liveweb-week-4-sending-animations?path=README.md%3A1%3A0)


### Assignments

-   What can live or real-time camera images add to your collaborative drawing application?  Try adding this capability in to one of your two previous assignments.
    - Use `createCapture` or `getUserMedia()` or `getDisplayMedia()`
    - Following the examples from class, send a webcam image using websockets
    - Note that you might need to change the socket message handlers on the server in the server.js file
    - Focus on design: why does this drawing application need real-time webcam images?

## Week 5 

### Objectives

-   Multi-user Live Audio/Video

### Outline

-   Design Exercise: examining existing applications
-   Midterm Project Discussion

### Assignments

-   Start to think about midterm project ideas!
-   On the class Miro board, detail a midterm project idea. Please make sure to touch on the concept and begin to explore how to make it. Remember that the goal of the midterm project to develop something of your own choosing using the techniques learned through the course thus far.  It should be similar in scope to a homework assignment (complete in 1 week).  It is possible to begin working on a larger project in which case the midterm should be dedicated to a proof of concept of the overall idea.  Think of it as a rough sketch rather than a painting or an outline instead of a paper.

## Week 6

### Objectives

-   Midterm Project Ideas

### Outline

-   Present and Discuss Midterm Project Proposals

-   Review Previous material as they relate to midterm projects

### Assignments

-   Work on Midterm Projects
-   Prepare midterm project presentation – This presentation should be approximately 10 minutes including feedback.  Please touch on the concept as well as how you accomplished it along with a demonstration.

## Week 7

### Objectives

-   Midterm Project Presentations

### Outline

-   Midterm Project Presentations
-   Sharing webcam with [p5LiveMedia](https://github.com/vanevery/p5livemedia)


### Assignments

- **Midterm Documentation** - Post Midterm Project Documentation to the class website
    -   Something visual, preferably a screen grab video and/or video of the interaction.
    -   A short description of what it is.
    -   A short description of why you made it.
    -   A short description of how it works.
    -   Add your code for people around the world who want to do similar things.
    -   Describe where you would like to take this project, what more you would like to do with it.

- **Video Chat Exercise!** - Implement a video-chat app using WebRTC and p5LiveMedia
    - Expand on the code example from class to create a webcam enabled app for at least 3 participants using WebRTC and p5LiveMedia
    - You may choose how to place the incoming video feeds: randomly, in a grid, in a circle or use "WebGL" mode to place the participants in 3D space. 
    - Focus on the look and feel of your app - what is it which sets it apart from a standard video-conferencing solution.
    - Implement at least one of the following:
        - Participants can move their video feed around the canvas (and those changes are shown to other participants)
        - Participants can make their video feed larger or smaller (and those changes are shown to other participants)
        - App makes use of the entire window and all parts of the window are filled with some content.
        - Participants can also share drawings or animations
        - Each participants' video feed is displayed multiple times.
        - Something else?  Feel free to come up with your own fun video-chat ideas.
    - Be sure to document your video chat app on your blog.  Answer the following questions:
        - What did you try to implement and why?
        - Any design references or technical implementation references which you followed?  Cite your sources.
        - What didn't work?  How did you try to fix it?

## Week 8

### Objectives

-   Slides: Video Chat Experiments
-   WebRTC Data

### Outline

-   [Data Channels](https://github.com/vanevery/p5LiveMedia?tab=readme-ov-file#sharing-data)
    -   [p5LiveMedia Example](https://editor.p5js.org/AidanNelson/sketches/8EcgJpEUi)
-   If we have time:
    - [MediaRecorder](./media-recorder)
    - [Saving Files on Node.js](./media-recorder)

### Assignments

-   **Video Chat Part II** - Expand on your video chat from last week, incorporating Data Channels through p5LiveMedia.  Data Channels allow you to share data through WebRTC and can do many of the same things as websockets.  They have the advantage of being available in a peer-to-peer encrypted WebRTC connection, meaning that they are extremely private.  
     - Be sure to document your expanded video chat app on your blog.  Answer the following questions:
        - What did you try to implement and why?
        - Any design references or technical implementation references which you followed?  Cite your sources.
        - What didn't work?  How did you try to fix it?

## Week 9

### Objectives

- Review Data Channels
- Working locally
    - Installing Node / NPM 
    - Installing VS Code
    - Launching a node app from the terminal

### Outline

- Working locally

### Assignments

-  **Exercise: Working Locally** - Download one of your previous assignment from glitch (following [this tutorial](https://drive.google.com/file/d/1zHXs_tL56Xk8QDNUnHA0sxqC-_fP8FuW/view?usp=sharing)) and get it running on your local machine.  
    - **Change** some aspect of how this application looks or feels.  A few ideas include:
        - make your sketch work fullscreen, 
        - add a photo or video to your sketch (make sure to add them to the `/public` folder)
        - restyle your sketch using CSS to feel very different.  Looking for inspiration?  Check out this [archive of web design](https://www.webdesignmuseum.org/web-design-history?timeline=1990-1994)!

## Week 10

### Objectives

-   Review homework: Working Locally
-   More examples of live web experiences
-   Local development with Node.js part 2
-   Final Project Discussion

### Assignments

-   Develop final project proposal.  Start with a description, consider why you want to do this and how you are going to accomplish it. Include any references. Draw a system diagram and/or wireframes to further illustrate the idea.  Prepare to present the idea to the class for feedback.

## Week 11

## Session 1

### Objectives

-   Presentation
-   Final Project Proposals
-   [Mobile for Live](./mobile)
- Additional Topics (Time Permitting):
    - [HTTPS](./https) + Let’s Encrypt
    -   [HTTPS video](https://stream.nyu.edu/media/https/1_dp5xxd1s)
    -   [Let’s Encrypt video](https://stream.nyu.edu/playlist/dedicated/1_uu3p80ff/1_f22insgv)

### Outline

-   Final Project Proposals

### Assignments

-   Final Projects

## Week 12

### Objectives

- Guest Speaker: [Morakana](https://morakana.com)
- Project Check-Ins 
- Machine Learning for Live
-   Additional Topics (Time Permitting): 
    - Serial to Node

### Outline

-   Additional Topics (Time Permitting): [Serial Example](https://itp.nyu.edu/~sve204/liveweb_spring2022/serial-example.zip)

### Assignments

-   Final Projects

## Week 13

### Objectives

-  Guest Speaker: Web Design Process 
- Project Check-Ins / Working Time
- Additional Topics (Time Permitting): 
    - Traditional Streaming
    - Physical

### Outline

-   [Traditional Streaming + OBS](https://itp.nyu.edu/~sve204/liveweb_spring2023/streaming.html)
-   Live Data from the physical world (arduino) [example](https://itp.nyu.edu/~sve204/liveweb_spring2023/serial-example.zip)

### Assignments

-   Final Project Work
-   Prepare final project presentation – This presentation should be approximately 10 minutes including feedback.  Please touch on the concept as well as how you accomplished it along with a demonstration.

## Week 14

### Objective

-   Final Project Presentations

### Outline

-   Final Project Presentations

### Assignments

-   Final Project Documentation: Post to the class website
    -   Something visual, preferably a screen grab video and/or video of the interaction.
    -   A short description of what it is.
    -   A short description of why you made it.
    -   A short description of how it works.
    -   Add your code for people around the world who want to do similar things.
    -   Describe where you would like to take this project, what more you would like to do with it.
