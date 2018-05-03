---

title: 3D transform functions
layout: doc
slug: functions
redirect_from:
  - "/docs/3d-transform-functions.html"
  - "/examples/transforms-01-functions.html"

---

As a web designer, you're probably well acquainted with working in two dimensions, X and Y, positioning items horizontally and vertically. With a 3D space initialized with `perspective`, we can now transform elements in three spatial dimensions with the third Z dimension.

3D transforms use the same `transform` property used for 2D transforms. If you're familiar with 2D transforms, you'll find the basic [3D transform functions](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function) similar.

* `rotateX( angle )`
* `rotateY( angle )`
* `rotateZ( angle )`
* `translateZ( tz )`
* `scaleZ( sz )`

Whereas `translateX()` positions an element along the horizontal X axis, `translateZ()` positions it along the Z axis, which runs front to back in 3D space. Positive values position the element closer to the viewer, negative values further away.

The `rotate` functions rotate the element around the corresponding axis. This is a bit counter-intuitive at first, as you might imagine that `rotateX()` will rotate an object horizontally left or right. Instead, using `rotateX()` rotates an element _around_ the horizontal X axis, so the top of the element angles back and away, and the bottom angles near.

<div class="scene scene--transform-func">
  <div class="transform-func-panel" style="transform: translateZ(-200px)">translateZ(-200px)</div>
</div>

<div class="scene scene--transform-func">
  <div class="transform-func-panel" style="transform: translateZ(200px)">translateZ(200px)</div>
</div>

<div class="scene scene--transform-func">
  <div class="transform-func-panel" style="transform: rotateX(45deg)">rotateX(45deg)</div>
</div>

<div class="scene scene--transform-func">
  <div class="transform-func-panel" style="transform: rotateY(45deg)">rotateY(45deg)</div>
</div>

<div class="scene scene--transform-func">
  <div class="transform-func-panel" style="transform: rotateZ(45deg)">rotateZ(45deg)</div>
</div>

{% include edit-codepen.html pen_slug="NMpVxV" %}

There's also several shorthand transform functions so you can set values for all three dimensions:

* `translate3d( tx, ty, tz )`
* `scale3d( sx, sy, sz )`
* `rotate3d( rx, ry, rz, angle )`

## Hardware acceleration

These 3-argument `transform3d()` functions also have the benefit of triggering hardware acceleration. Dean Jackson, CSS 3D transform spec author and main WebKit dude, wrote:

> In essence, any transform that has a 3D operation as one of its functions will trigger hardware compositing, even when the actual transform is 2D, or not doing anything at all (such as `translate3d(0,0,0)`). Note this is just current behaviour, and could change in the future (which is why we don't document or encourage it). But it is very helpful in some situations and can significantly improve redraw performance.

[This note was written in 2010.](http://mir.aculo.us/2010/08/05/html5-buzzwords-in-action/) Since then, other browsers have adopted this behavior. But YMMV. Hardware acceleration in browsers remains a mysterious subject that's rarely documented.

For the sake of clarity, the demos in this essay will use the basic transform functions, but if you're looking to boost performance, try using `transform3d()`.

* * *

[**Next: Card flip &rarr;**](card-flip)
