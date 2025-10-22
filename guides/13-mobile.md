---
title: Mobile
layout: default
nav_order: 130
permalink: mobile
parent: Guides
---

# Mobile
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

It used to be the case that I would have to prepare a specific set of notes related to doing live web types of things on mobile devices. Thankfully, this has changed a great deal. On Android, using Chrome or Firefox, you can do all or almost all of the same things with WebRTC and Web Sockets that you can do on the desktop version of those applications.

On iOS this has not been the case until recently. While Chrome exists on iOS, it is not allowed to use anything other than the built-in webkit rendering engine which makes adding some features that aren’t supported impossible. Fortunately, Apple has added support for WebRTC in Safari version 11 on both the desktop and mobile.

**More Information:**  
[Stackoverflow: Chrome IOS – Is it just a UIWebView?](http://stackoverflow.com/questions/11259152/chrome-ios-is-it-just-a-uiwebview)  
[Chrome on Android](http://techcrunch.com/2013/08/20/google-launches-chrome-29-with-improved-omnibox-suggestions-on-desktop-webrtc-on-android/)  
[Firefox for Android](https://blog.mozilla.org/blog/2013/09/17/webrtc-now-available-across-mobile-and-desktop-with-new-firefox-for-android-compatibility/)  
[Highlights of Safari 11.0](https://developer.apple.com/library/content/releasenotes/General/WhatsNewInSafari/Safari_11_0/Safari_11_0.html)

### MOBILE SENSORS IN JAVASCRIPT/HTML5

[mobiforge has a good series of examples using various mobile sensor data in HTML5/JavaScript.](http://mobiforge.com/developing/story/sense-and-sensor-bility-access-mobile-device-sensors-with-javascript)

Some Very Simple Examples ([Now require HTTPS](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))

- [Location](https://itp.nyu.edu/~sve204/liveweb_spring2022/location.html)
- [Orientation Sensor](https://itp.nyu.edu/~sve204/liveweb_spring2022/direction.html) – ([new iOS version](https://itp.nyu.edu/~sve204/liveweb_spring2022/motion_ios.html))
- [Accelerometer](https://itp.nyu.edu/~sve204/liveweb_spring2022/accel.html)

[Device Motion and Orientation Permissions on iOS 13](https://medium.com/flawless-app-stories/how-to-request-device-motion-and-orientation-permission-in-ios-13-74fc9d6cd140)

Orientation support for iOS and Android Sample Code

    function orientation() {
        //iOS
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
         console.log("iOS");

        DeviceOrientationEvent.requestPermission()
        .then(response => {
          if (response == 'granted') {
            orientationListener();
          }
        })
        .catch(console.error)
       }
       else
       {
         //not iOS
         console.log("Not iOS");
         orientationListener();
       }
    }

    function orientationListener() {
      window.addEventListener('deviceorientation', (e) => {
        // do something with e
        alpha = e.alpha,
        beta = e.beta,
        gamma = e.gamma;

        console.log(Math.floor(alpha) + " " + Math.floor(beta) + " " + Math.floor(gamma));
      })
    }

More advanced examples

- [Mobile Orientation Example](https://editor.p5js.org/shawn/sketches/dqmXgrIfj) (works on iOS and Android in p5)
- [Mobile Device Motion Example](https://editor.p5js.org/shawn/sketches/kCGb4yHim) (works on iOS and Android in p5)
- [Mobile Orientation + Video Example](https://editor.p5js.org/shawn/sketches/NpqagmgyY)

