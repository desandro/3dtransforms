---

title: 3D transform functions
layout: doc
category: docs

---

As a web designer, you're probably well acquainted with working in two dimensions, X and Y, positioning items horizontally and vertically. With a 3D space initialized with `perspective`, we can now transform elements in all three glorious spatial dimensions, including the third Z dimension. 

3D transforms use the same `transform` property used for 2D transforms. If you're familiar with 2D transforms, you'll find the basic [3D transform functions](http://www.w3.org/TR/css3-3d-transforms/#transform-functions) fairly similar. 

* `rotateX( angle )` 
* `rotateY( angle )`
* `rotateZ( angle )`
* `translateZ( tz )`
* `scaleZ( sz )`

Whereas `translateX()` positions an element along the horizontal X axis, `translateZ()` positions it along the Z axis, which runs front to back in 3D space. Positive values position the element closer to the viewer, negative values further away.

The `rotate` functions rotate the element around the corresponding axis. This is a bit counter-intuitive at first as you might imagine that `rotateX` will spin an object left to right. Instead, using `rotateX( 45deg )` rotates an element _around_ the horizontal X axis, so the top of the element angles back and away, and the bottom angles near.

[**See Example: Transforms 1**](../examples/transforms-01-functions.html)

[![CSS 3D transform functions](../img/transforms01.png)](../examples/transforms-01-functions.html)

There's also several shorthand transform functions that require values for all three dimensions:

* `translate3d( tx, ty, tz )`
* `scale3d( sx, sy, sz )`
* `rotate3d( rx, ry, rz, angle )`

**Pro-tip:** These `foo3d()` transform functions also have the benefit of triggering hardware acceleration in Safari. Dean Jackson, CSS 3D transform spec author and main WebKit dude, writes (by way of [Thomas Fuchs](http://mir.aculo.us/2010/08/05/html5-buzzwords-in-action/)):

> In essence, any transform that has a 3D operation as one of its functions will trigger hardware compositing, even when the actual transform is 2D, or not doing anything at all (such as `translate3d(0,0,0)`). Note this is just current behaviour, and could change in the future (which is why we don't document or encourage it). But it is very helpful in some situations and can significantly improve redraw performance.

For the sake of simplicity, these demos will use the basic transform functions, but if you're writing production-ready CSS for iOS or Safari-only, **make sure to use the `foo3d()` functions to get the best rendering performance.**

* * *

[**Next: Card flip &raquo;**](card-flip.html)
