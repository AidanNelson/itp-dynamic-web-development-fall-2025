---
title: HTML + JS = DOM (Document Object Model)
layout: default
nav_order: 20
permalink: document-object-model
parent: Guides
---

# HTML + JS = DOM (Document Object Model)
{: .no_toc }

<details closed markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

HTML creates a document, JavaScript can access that document through a data structure called the [DOM (or Document Object Model)](https://www.w3schools.com/js/js_htmldom.asp). This structure allows us to access each individual element as an object with a parent/child relationship or directly by ID using “[getElementById](https://www.w3schools.com/js/js_htmldom_elements.asp)“:

## Accessing HTML elements with Javascript

After you have access to an Element, you can change it’s properties or call methods on.  One example is to change the HTML that is within it by altering it’s [innerHTML](https://www.w3schools.com/js/js_htmldom_html.asp) attribute.

```js
var thediv = document.getElementById("mydiv");
thediv.innerHTML = "soemthing else";
```

Some other things that you might want to look over: [createElement and appendChild](http://www.w3schools.com/jsref/met_document_createelement.asp)

## Manipulating Style Attributes

Using the DOM, you can manipulate any aspect of an HTML Element, including it’s [CSS](https://www.w3schools.com/js/js_htmldom_css.asp)  [attributes](https://www.w3schools.com/jsref/dom_obj_style.asp) such as [visibility](http://www.w3schools.com/jsref/prop_style_visibility.asp) or [background color](https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp):

<div class="code-example">
  <div id="mydiv">my red &lt;div&gt;</div>
  <script>
    var thediv = document.getElementById("mydiv");
    thediv.style.backgroundColor = "red";
  </script>
</div>
```js
var thediv = document.getElementById("mydiv");
thediv.style.backgroundColor = "red";
```

## Events

JavaScript in the browser is very often event driven. This means that we can specify code to run when an event takes place. Some of these are driven by the browser doing it’s thing such as loading a page and some are driven by user interaction such as clicking a link or hovering over an element. Regardless of the type of [event](https://www.w3schools.com/jsref/dom_obj_event.asp), we use the “[addEventListener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)” method on all of the DOM elements to specify what to listen for and what code to run when the event is triggered.

```js
element.addEventListener("event-name", functionToRun);

function functionToRun() {
  // Code to execute
}
```

[JavaScript HTML DOM EventListener](http://www.w3schools.com/js/js_htmldom_eventlistener.asp)

### Load

The load event is very important as it is a way to specify what to do when a document is done loading, it also signifies when it is safe to call elements on the DOM:

```js
function init() {
  var thediv = document.getElementById("mydiv");
  alert(thediv.innerHTML);
}
window.addEventListener("load", init);
```

### Mouseover

<div class="code-example">
<div id="some-div" style="border: 1px solid green; padding: 5px; background-color: red; color: white;">Hover over me with your mouse!</div>
<script>
var somediv;
function init() {
  somediv = document.getElementById("some-div");
  somediv.addEventListener("mouseover", makeblue);
  somediv.addEventListener("mouseleave", makered)
}
function makeblue() {
  somediv.style.backgroundColor = "#0000ff";
}
function makered() {
  somediv.style.backgroundColor = "#ff0000";
}
window.addEventListener("load", init);
</script>
</div>
```js
var somediv;
function init() {
  somediv = document.getElementById("some-div");
  somediv.addEventListener("mouseover", makeblue);
  somediv.addEventListener("mouseleave", makered)
}
function makeblue() {
  somediv.style.backgroundColor = "#0000ff";
}
function makered() {
  somediv.style.backgroundColor = "#ff0000";
}
window.addEventListener("load", init);
```

### Many Many More

[Wikipedia DOM Events](http://en.wikipedia.org/wiki/DOM_events)
