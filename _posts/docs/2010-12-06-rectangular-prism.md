---

title: Rectangular prism
layout: doc
category: docs

---

Cube objects are easy enough to generate as we only have to worry about one measurement. But how would we handle a non-regular rectangular prism? Let's try to make one 300px wide, 200px high, and 100px deep. 

The markup remains the same as the `#cube`'s version, but switch the `#cube` id for `#box`. The container styles remain mostly the same.

{% highlight css %}

.container {
  width: 300px;
  height: 200px;
  position: relative;
  perspective: 1000px;
}

#box {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
}

{% endhighlight %}

Now, to position the faces. Each set of faces will need their own sizes. The smaller faces (left, right, top and bottom) need to be positioned in the center of the container, where they can be easily rotated and then shifted outward. The thinner left and right faces get positioned `left: 100px` ( (300 - 100) / 2 ), The stouter top and bottom faces get positioned `top: 50px` ( (200 - 100) / 2 ).

{% highlight css %}

#box figure {
  margin: 0;
  display: block;
  position: absolute;
  border: 2px solid black;
}

#box .front,
#box .back {
  width: 296px;
  height: 196px;
}

#box .right,
#box .left {
  width: 96px;
  height: 196px;
  left: 100px;
}

#box .top,
#box .bottom {
  width: 296px;
  height: 96px;
  top: 50px;
}

{% endhighlight %}

The rotate values all can remain the same as in the cube example, but for this rectangular prism, the translate values do differ. The front and back faces each are shifted out `50px` since the `#box` is 100px deep. Left and right faces translate is `150px` for 300px width. Top and bottom panels go `100px` for the 200px height.

{% highlight css %}

#box .front  { transform: rotateY(   0deg ) translateZ(  50px ); }
#box .back   { transform: rotateX( 180deg ) translateZ(  50px ); }
#box .right  { transform: rotateY(  90deg ) translateZ( 150px ); }
#box .left   { transform: rotateY( -90deg ) translateZ( 150px ); }
#box .top    { transform: rotateX(  90deg ) translateZ( 100px ); }
#box .bottom { transform: rotateX( -90deg ) translateZ( 100px ); }

{% endhighlight %}

[**See Example: Box 1**](../examples/box-01-steps.html)

[![3D CSS box object](../img/box01.png)](../examples/box-01-steps.html)

Just like the cube example, to expose a face, the `#box` needs to have a style to reverse its face's transform. Both the `translateZ` and `rotate` values are the opposites of the corresponding face.

{% highlight css %}

#box.show-front  { transform: translateZ(  -50px ) rotateY(    0deg ); }
#box.show-back   { transform: translateZ(  -50px ) rotateX( -180deg ); }
#box.show-right  { transform: translateZ( -150px ) rotateY(  -90deg ); }
#box.show-left   { transform: translateZ( -150px ) rotateY(   90deg ); }
#box.show-top    { transform: translateZ( -100px ) rotateX(  -90deg ); }
#box.show-bottom { transform: translateZ( -100px ) rotateX(   90deg ); }

{% endhighlight %}

[**See Example: Box 2**](../examples/box-02-show-sides.html)

[![3D CSS box object rotating](../img/box02.png)](../examples/box-02-show-sides.html)

* * *

[**Next: Carousel &raquo;**](carousel.html)
