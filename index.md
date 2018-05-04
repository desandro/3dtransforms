---

title: Introduction
layout: doc
is_homepage: true
slug: intro
redirect_from:
  - "/docs/introduction"

---

With the introduction of CSS transforms, elements could be shifted, rotated, slanted, squashed and stretched. Web designers were finally able to catch up to print designers. With CSS 3D transforms, web designers can move past their print counterparts and explore a new realm in graphic design.

Rendering 3D graphics on the web has been around for years. First there was Flash. Then with  `<canvas>` and WebGL came [Three.js](https://threejs.org/). WebVR and augmented reality lie around the corner. While these solutions are superb at producing explorable 3D environments, they can be overkill for the main stuff of the web: interfaces. With CSS 3D transforms, front-end developers can enhance their designs by adding a new dimension to traditional websites.

## Rationale

Before we dive into the third dimension, we owe it to our users to ask how they benefit from this feature.

Let's be real. CSS was built to style documents. It has since grown to handle applications. But alas, CSS is not ideal for 3D modeling. Instead, 3D transforms should be treated just like its fellow modern features like media queries, gradients, and transitions — as an **add-on.** 3D for websites works best when it adds to your interface, not replaces it. There is plenty of opportunity to use 3D transforms _in between_ the interface, via transitions.

Take for instance the Weather App for early iOS. The application used two views: a details view and an options view. Switching between these two views was done with a 3D flip transition. This afforded the user that the interface had two and only two views, one on each side of the panel.

![iPhone Weather App 3D flip transition](../img/weather-app-transition.jpg)

Also consider carousel cycle plugins. How can you communicate how the slides wrap around to repeat? With 3D, slides are placed side by side one another in a circle in 3D space. In that arrangement, the cyclic pattern of the carousel is self-evident.

3D transforms can be more than just eye candy. We can use them to solve actual interface challenges and make our applications more intuitive.

## Current Support Environment

[The CSS 3D transforms module](https://www.w3.org/TR/css-transforms-1/) was first [introduced in 2009](https://www.w3.org/TR/2009/WD-css3-3d-transforms-20090320/). It was authored by members at Apple and was first supported by Safari. Since then, all modern browsers including Chrome, Firefox, Internet Explorer and Edge have added support. View the chart on [caniuse.com/#feat=transforms3d](https://caniuse.com/#feat=transforms3d) to check the latest support environment across the browser landscape.

As of 2018, un-prefixed `transform` CSS properties are supported by 98% of browsers in use. Adding `-webkit-transform` will capture older browsers to get to 99%.

There is one caveat. [Internet Explorer 11 does not support `transform-style: preserve-3d`](http://msdn.microsoft.com/en-us/library/ie/hh673529%28v=vs.85%29.aspx#the_ms_transform_style_property) (we'll cover this property later). This means IE11 can still use 3D transforms with individual elements, but cannot handle nested elements to build the objects covered in this essay.

Let's get coding.

* * *

[**Next: Perspective &rarr;**](perspective)
