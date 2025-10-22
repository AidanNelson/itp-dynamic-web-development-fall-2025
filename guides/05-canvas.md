---
title: Canvas
layout: default
nav_order: 50
permalink: canvas
parent: Guides
---

# Canvas

{: .no_toc }

<details open markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

# HTML 5 CANVAS

HTML 5 introduced support for a canvas element that can be programmatically drawn on. The really nice thing is that it is very similar to drawing using p5.js (in fact, most of the core of p5.js uses the canvas element).

## BASIC USAGE EXAMPLE

<div class="code-example">
<canvas width="400" height="400" id="mycanvas"></canvas>
<script type="text/javascript">
	let canvas = document.getElementById('mycanvas');
	let context = canvas.getContext('2d');
	context.fillStyle="#FF0000";
	context.fillRect(0,0,canvas.width,canvas.height);
</script>
</div>
```html
<canvas width="400" height="400" id="mycanvas"></canvas>
<script type="text/javascript">
	let canvas = document.getElementById('mycanvas');
	let context = canvas.getContext('2d');
	context.fillStyle="#FF0000";
	context.fillRect(0,0,canvas.width,canvas.height);
</script>
```

## Example: Canvas with a "draw loop"

<div class="code-example">
<canvas width="300" height="300" id="mycanvas2" ></canvas>

<script type="text/javascript">
	
	let canvas2 = document.getElementById('mycanvas2');
	let context2 = canvas2.getContext('2d');
	
	let x2 = 0;
	let y2 = Math.random()*canvas2.width;
	function drawOnCanvas() {
		context2.beginPath();
		context2.strokeStyle='#'+(Math.random()*0xFFFFFF<<0).toString(16);
		context2.moveTo(x2,y2);
		context2.lineTo(canvas2.width/2,canvas2.height/2);
		context2.stroke();
		x2++;
		if (x2 > canvas2.width) { x2 = 0; }
		y2 = Math.random()*canvas2.width;
	};
				
	setInterval(drawOnCanvas,1000/30); // 30 x per second
	
</script>
</div>
```html
<canvas width="300" height="300" id="mycanvas2" ></canvas>

<script type="text/javascript">
	
	let canvas2 = document.getElementById('mycanvas2');
	let context2 = canvas2.getContext('2d');
	
	let x2 = 0;
	let y2 = Math.random()*canvas2.width;
	function drawOnCanvas() {
		context2.beginPath();
		context2.strokeStyle='#'+(Math.random()*0xFFFFFF<<0).toString(16);
		context2.moveTo(x2,y2);
		context2.lineTo(canvas2.width/2,canvas2.height/2);
		context2.stroke();
		x2++;
		if (x2 > canvas2.width) { x2 = 0; }
		y2 = Math.random()*canvas2.width;
	};
				
	setInterval(drawOnCanvas,1000/30); // 30 x per second
	
</script>
````

## Example: Canvas with a "draw loop" using RequestAnimationFrame

<div class="code-example">
<canvas width="400" height="400" id="mycanvas3"></canvas>
<script type="text/javascript">
	let canvas3 = document.getElementById('mycanvas3');
	let context3 = canvas3.getContext('2d');
	let x = 0;
	let y = Math.random()*canvas3.width;
	function draw() {
		context3.beginPath();
		context3.strokeStyle='#'+(Math.random()*0xFFFFFF<<0).toString(16);
		context3.moveTo(x,y);
		context3.lineTo(canvas3.width/2,canvas3.height/2);
		context3.stroke();
		x++;
		if (x > canvas3.width) { x = 0; }
		y = Math.random()*canvas3.width;
	};
	function loop() {
		draw();
		window.requestAnimationFrame(loop);
	}
	window.addEventListener('load',loop);
</script>
</div>

```html
<canvas width="400" height="400" id="mycanvas3" />

<script type="text/javascript">
	
	var canvas = document.getElementById('mycanvas3');
	var context = canvas.getContext('2d');
	
	var x = 0;
	var y = Math.random()*canvas.width;
	var drawFrame = function() {
		context.beginPath();
		context.strokeStyle='#'+(Math.random()*0xFFFFFF<<0).toString(16);
		context.moveTo(x,y);
		context.lineTo(canvas.width/2,canvas.height/2);
		context.stroke();
		x++;
		if (x > canvas.width) { x = 0; }
		y = Math.random()*canvas.width;
	};
				

	var animationLooper = function() {
		drawFrame();
		window.requestAnimationFrame(animationLooper);
	}
	
	document.addEventListener('load', animationLooper);
				
</script>
```

Example: [Canvas with a “draw” loop](https://itp.nyu.edu/~sve204/liveweb_fall2020/canvas_example1.html) (Uses [JavaScript setInterval](http://www.w3schools.com/js/js_timing.asp))
Example: [Canvas with a “draw” loop](https://itp.nyu.edu/~sve204/liveweb_fall2020/canvas_example1_1.html) (Uses [requestAnimationFrame](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/))
Example: [Canvas with “draw” loop and mouse interaction](https://itp.nyu.edu/~sve204/liveweb_fall2020/canvas_example2.html)

Reference: [W3 Schools – HTML5 Canvas](http://www.w3schools.com/html/html5_canvas.asp) and [W3 Schools – HTML Canvas Reference](http://www.w3schools.com/tags/ref_canvas.asp)
Tutorial: [Mozilla Developer Network – Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Canvas_tutorial?redirectlocale=en-US&redirectslug=Canvas_tutorial)
Examples: [21 Ridiculously Impressive HTML5 Canvas Experiments](http://net.tutsplus.com/articles/web-roundups/21-ridiculously-impressive-html5-canvas-experiments/)

```
````
