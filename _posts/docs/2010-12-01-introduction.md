---
title: Introduction
layout: doc
category: docs

---

Ladies and gentlemen, it is the second decade of the second millennium and we are still kicking around the same 2D interface we got three decades ago. Sure, Apple debuted a few apps for OSX 10.7 that have a couple more 3D flourishes, and Microsoft has had that [Flip 3D](http://windows.microsoft.com/en-US/windows-vista/Using-Windows-Flip-3D) for a while. But c'mon, 2011 is right around the corner. That's _Twenty Eleven_ folks. Where is our 3D virtual reality? By now, we should be zipping around the [Metaverse in super-sonic motorbikes](http://en.wikipedia.org/wiki/Snow_Crash).

Granted, the capability of rendering complex 3D environments has been present for years. On the Web, there already are number of solutions -- [Flash](http://www.adobe.com/devnet/flash/3d_animation.html), [three.js](https://github.com/mrdoob/three.js/) in canvas, and eventually WebGL. And finally, we meager front-end developers have our own three-dimensional jewel: CSS 3D Transforms!

## Rationale

Like a beautiful jewel, 3D transform can be dazzling, a true spectacle to behold. But before we start tacking 3D diamonds and rubies to our compositions like Liberace's tailor, we owe it to our users to ask what can they benefit from this awesome feature. 

The entire application does not, and should not, take advantage of 3D. CSS was built to style documents, not generate explorable environments. I fail to find a benefit to filling out a web form that can be accessed by swiveling my viewport to the Sign-Up Room (although there have been proposals to make the Web just that). However, there is plenty of opportunity to use 3D transforms _in between_ the interface, via transitions.

Take for instance the Weather App on the iPhone. The application uses two views: a details view and an options view. Switching between these two views is done with a 3D flip transition. This affords the user that the interface has two and only two views, as they can only exist on either side of the same plane.

![iPhone Weather App 3D flip transition](../img/weather-app-transition.jpg)

Also consider slide cycle plugins. When you're at the last slide, what cues tip-off the user that the advancing will re-start the cycle at the first? A better paradigm can be used with a 3D transform, where the slides are placed side by side one another in a circle in 3D space. In that arrangement, the last slide logically comes before the first.

3D transforms are more than just eye candy. We can also use them to solve dilemmas and make our applications more intuitive. 

## Current Support Environment

[The CSS 3D transforms module](http://dev.w3.org/csswg/css3-3d-transforms/) has been out in the wild for several year now. While only Apple-produced browsers like Safari and Mobile Safari originally supported it, support has been added by Google Chrome and Mozilla Firefox. View the chart on [caniuse.com/#feat=transforms3d](http://caniuse.com/#feat=transforms3d) to check the latest support environment across the browser landscape.

This all adds up to a bit of a challenge for those of us excited for 3D transforms. I'll give it to you straight: missing that dimension of depth can make degradation a bit ungraceful. Unless the transform is relatively simple and holds up in non-3D-supporting browsers, you'll most likely have to design another solution. But what's another hurdle in a steeplechase? We web folk have had our mettle tested for years. We're galvanized for devising multiple solutions.

Here's the part of the article where I mention [Modernizr](http://modernizr.com), and you brush over it because you've read this part of an article a hundreds of times before. But seriously, it's the best way to test for CSS 3D transform support. Use it.

Even with these difficulties mounted up, trying out 3D transforms today is the right move. The CSS 3D transforms module was developed by the same team at Apple who produced the [CSS 2D transforms](http://www.w3.org/TR/css3-2d-transforms/) and [animation](http://www.w3.org/TR/css3-animations/modules).  Both specifications have since been adopted by Mozilla and Opera. Transforming three-dimensionally now will guarantee you'll be ahead of the game when the other browsers catch up.

The choice is yours. You can make excuses and poo-poo 3D transforms because they're too hard and only snobby Apple fans will see them today. Or, with a [tip of the fedora to Mr. Andy Clarke](http://hardboiledwebdesign.com/), you can get hardboiled and start designing with the best features out there right this instant.

So I bid you, [in the words of the eternal Optimus Prime](http://tfwiki.net/wiki/Roll_out)...

> Transform and roll out.

Let's get coding.

* * *

[**Next: Perspective &raquo;**](perspective.html)
