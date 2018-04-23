---

title: Introduction
layout: doc
is_homepage: true
redirect_from:
  - "/docs/introduction"

---

Ladies and gentlemen, it is the second decade of the second millennium and we are still kicking around the same 2D interface we got three decades ago. Sure, Apple debuted a few apps for OSX 10.7 that have a couple more 3D flourishes, and Microsoft has had that Flip 3D for a while. But c'mon, 2011 is right around the corner. That's _Twenty Eleven_ folks. Where is our 3D virtual reality? By now, we should be zipping around the [Metaverse in super-sonic motorbikes](http://en.wikipedia.org/wiki/Snow_Crash).

Granted, the capability of rendering complex 3D environments has been present for years. On the Web, there already are number of solutions -- [Flash](http://www.adobe.com/devnet/flash/3d_animation.html), [three.js](https://github.com/mrdoob/three.js/) in canvas, and eventually WebGL. And finally, we meager front-end developers have our own three-dimensional jewel: CSS 3D Transforms!

## Rationale

Like a beautiful jewel, 3D transform can be dazzling, a true spectacle to behold. But before we start tacking 3D diamonds and rubies to our compositions like Liberace's tailor, we owe it to our users to ask what can they benefit from this awesome feature. 

The entire application does not, and should not, take advantage of 3D. CSS was built to style documents, not generate explorable environments. I fail to find a benefit to filling out a web form that can be accessed by swiveling my viewport to the Sign-Up Room (although there have been proposals to make the Web just that). However, there is plenty of opportunity to use 3D transforms _in between_ the interface, via transitions.

Take for instance the Weather App on the iPhone. The application uses two views: a details view and an options view. Switching between these two views is done with a 3D flip transition. This affords the user that the interface has two and only two views, as they can only exist on either side of the same plane.

![iPhone Weather App 3D flip transition](../img/weather-app-transition.jpg)

Also consider slide cycle plugins. When you're at the last slide, what cues tip-off the user that the advancing will re-start the cycle at the first? A better paradigm can be used with a 3D transform, where the slides are placed side by side one another in a circle in 3D space. In that arrangement, the last slide logically comes before the first.

3D transforms are more than just eye candy. We can also use them to solve dilemmas and make our applications more intuitive. 

## Current Support Environment

[The CSS 3D transforms module](https://www.w3.org/TR/css-transforms-1/) was first [introduced in 2009](https://www.w3.org/TR/2009/WD-css3-3d-transforms-20090320/). It was authored by members at Apple and was first supported by Safari. Since then, all modern browsers including Chrome, Firefox, Internet Explorer and Edge have added support. View the chart on [caniuse.com/#feat=transforms3d](https://caniuse.com/#feat=transforms3d) to check the latest support environment across the browser landscape.

As of 2018, un-prefixed `transform` CSS properties are supported by 99% of browsers. Adding `-webkit-transform` will capture older browsers and capture 100%.

Let's get coding.

* * *

[**Next: Perspective &raquo;**](perspective.html)
