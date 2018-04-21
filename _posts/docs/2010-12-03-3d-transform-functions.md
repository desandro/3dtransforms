---

title: 3D transform functions
layout: doc
category: docs

---

As a web designer, you're probably well acquainted with working in two dimensions, X and Y, positioning items horizontally and vertically. With a 3D space initialized with `perspective`, we can now transform elements in all three glorious spatial dimensions, including the third Z dimension. 

3D transforms use the same `transform` property used for 2D transforms. If you're familiar with 2D transforms, you'll find the basic [3D transform functions](https://www.w3.org/TR/css-transforms-1/#transform-primitives) fairly similar. 

* `rotateX( angle )` 
* `rotateY( angle )`
* `rotateZ( angle )`
* `translateZ( tz )`
* `scaleZ( sz )`

Whereas `translateX()` positions an element along the horizontal X axis, `translateZ()` positions it along the Z axis, which runs front to back in 3D space. Positive values position the element closer to the viewer, negative values further away.

The `rotate` functions rotate the element around the corresponding axis. This is a bit counter-intuitive at first as you might imagine that `rotateX` will spin an object left to right. Instead, using `rotateX( 45deg )` rotates an element _around_ the horizontal X axis, so the top of the element angles back and away, and the bottom angles near.

<div class="example example--transform-func">
  <div class="transform-func-panel" style="transform: translateZ(-200px)">translateZ(-200px)</div>
</div>

<div class="example example--transform-func">
  <div class="transform-func-panel" style="transform: translateZ(200px)">translateZ(200px)</div>
</div>

<div class="example example--transform-func">
  <div class="transform-func-panel" style="transform: rotateX(45deg)">rotateX(45deg)</div>
</div>

<div class="example example--transform-func">
  <div class="transform-func-panel" style="transform: rotateY(45deg)">rotateY(45deg)</div>
</div>

<div class="example example--transform-func">
  <div class="transform-func-panel" style="transform: rotateZ(45deg)">rotateZ(45deg)</div>
</div>

There's also several shorthand transform functions that require values for all three dimensions:

* `translate3d( tx, ty, tz )`
* `scale3d( sx, sy, sz )`
* `rotate3d( rx, ry, rz, angle )`

**Pro-tip:** These `foo3d()` transform functions also have the benefit of triggering hardware acceleration in Safari. Dean Jackson, CSS 3D transform spec author and main WebKit dude, writes (by way of [Thomas Fuchs](http://mir.aculo.us/2010/08/05/html5-buzzwords-in-action/)):

> In essence, any transform that has a 3D operation as one of its functions will trigger hardware compositing, even when the actual transform is 2D, or not doing anything at all (such as `translate3d(0,0,0)`). Note this is just current behaviour, and could change in the future (which is why we don't document or encourage it). But it is very helpful in some situations and can significantly improve redraw performance.

For the sake of simplicity, these demos will use the basic transform functions, but if you're looking to boost performance try using `foo3d()`.

* * *

Note how 3d transforms affect text rendering. Browsers will composite the transformed element and re-render those pixels. Thus, fonts don't have the same anti-aliasing given their transformed size.

<p class="pixelation-p" style="font-size: 2em">font-size: 2.5em</p>

<p class="pixelation-p" style="transform: scale(2)">transform: scale(2.5)</p>

<p class="pixelation-p" style="transform: perspective(500px) translateZ(250px)"> transform: perspective(500px) translateZ(250px)</p>

* * *

[**Next: Card flip &raquo;**](card-flip.html)
