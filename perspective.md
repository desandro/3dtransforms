---

title: Perspective
layout: doc
slug: perspective
script: perspective.js
redirect_from:
  - "/docs/perspective.html"
  - "/examples/perspective-01.html"
  - "/examples/perspective-02-children.html"
  - "/examples/perspective-03.html"

---


To activate 3D space, an element needs perspective.  This can be applied in two ways.

The first technique is with the [`transform` property](https://developer.mozilla.org/en-US/docs/Web/CSS/transform), with `perspective()` as a function:


{% highlight css %}
transform: perspective(400px);
{% endhighlight %}

For example:

{% highlight css %}
.panel--red {
  /* perspective function in transform property */
  transform: perspective(400px) rotateY(45deg);
}
{% endhighlight %}

<div class="scene scene--set-persp">
  <div class="set-persp-panel set-persp-panel--red"></div>
</div>

{% include edit-codepen.html pen_slug="XqMGRB" %}

The second technique is with the [`perspective` property](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective):

{% highlight css %}
perspective: 400px;
{% endhighlight %}

For example:

{% highlight css %}
.scene--blue {
  /* perspective property */
  perspective: 400px;
}

.panel--blue {
  transform: rotateY(45deg);
}
{% endhighlight %}

<div class="scene scene--set-persp scene--set-persp--blue">
  <div class="set-persp-panel set-persp-panel--blue"></div>
</div>

{% include edit-codepen.html pen_slug="PepLOz" %}

These two formats both trigger a 3D space and can produce the same visual result. But there is a difference. The functional notation is convenient for directly applying a 3D transform on a single element (in the red example, I use it in conjunction with a `rotateY` transform). In this way, it is used as a shorthand to transform a single element in 3D.

But when used on multiple elements, the effect breaks. The transformed elements don't line up together. This is because each element has its own perspective, its own vanishing point. To remedy this, use the `perspective` property on a parent element, so each child may share the same 3D space.

{% highlight css %}
.panel--separate {
  transform: perspective(400px) rotateY(45deg);
}
{% endhighlight %}

<div class="scene scene--persp-children">
  <div class="persp-children-panel persp-children-panel--separate"></div>
  <div class="persp-children-panel persp-children-panel--separate"></div>
  <div class="persp-children-panel persp-children-panel--separate"></div>
  <div class="persp-children-panel persp-children-panel--separate"></div>
  <div class="persp-children-panel persp-children-panel--separate"></div>
  <div class="persp-children-panel persp-children-panel--separate"></div>
  <div class="persp-children-panel persp-children-panel--separate"></div>
  <div class="persp-children-panel persp-children-panel--separate"></div>
  <div class="persp-children-panel persp-children-panel--separate"></div>
</div>

{% include edit-codepen.html pen_slug="WJpmdO" %}

{% highlight css %}
.scene--together {
  perspective: 400px;
}

.panel--together {
  transform: rotateY(45deg);
}
{% endhighlight %}

<div class="scene scene--persp-children scene--persp-children--together">
  <div class="persp-children-panel persp-children-panel--together"></div>
  <div class="persp-children-panel persp-children-panel--together"></div>
  <div class="persp-children-panel persp-children-panel--together"></div>
  <div class="persp-children-panel persp-children-panel--together"></div>
  <div class="persp-children-panel persp-children-panel--together"></div>
  <div class="persp-children-panel persp-children-panel--together"></div>
  <div class="persp-children-panel persp-children-panel--together"></div>
  <div class="persp-children-panel persp-children-panel--together"></div>
  <div class="persp-children-panel persp-children-panel--together"></div>
</div>

{% include edit-codepen.html pen_slug="MGpxVG" %}

The value of `perspective` determines the intensity of the 3D effect. Think of it as a distance from the viewer to the object. The greater the value, the further the distance, the less intense the visual effect. `perspective: 2000px` yields a subtle 3D effect, as if we are viewing an object from far away through binoculars. `perspective: 100px` produces a tremendous 3D effect, like a tiny insect viewing a massive object.

You can also use 3D transforms without perspective, either by setting `perspective: none` or not setting `perspective` at all. Without perspective, parallel planes are orthogonal and have no vanishing point.

By default, the vanishing point for a 3D space is positioned at the center. You can change the position of the vanishing point with [`perspective-origin` property](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin).

{% highlight css %}

perspective-origin: 25% 75%;

{% endhighlight %}

<div class="demo demo--persp-cube">
  <div class="scene scene--cube scene--persp-cube">
    <div class="cube is-spinning">
      <div class="cube__face cube__face--front">front</div>
      <div class="cube__face cube__face--back">back</div>
      <div class="cube__face cube__face--right">right</div>
      <div class="cube__face cube__face--left">left</div>
      <div class="cube__face cube__face--top">top</div>
      <div class="cube__face cube__face--bottom">bottom</div>
    </div>
  </div>
  <p>
    <label>
      perspective
      <input class="perspective-range" type="range" min="1" max="1000" value="400" data-units="px" />
    </label>
  </p>
  <p>
    <label>
      perspective-origin x
      <input class="origin-x-range" type="range" min="0" max="100" value="50" data-units="%" />
    </label>
  </p>
  <p>
    <label>
      perspective-origin y
      <input class="origin-y-range" type="range" min="0" max="100" value="50" data-units="%" />
    </label>
  </p>
  <p>
    <label>
      Spin cube
      <input class="spin-cube-checkbox" type="checkbox" />
    </label>
  </p>
  <p>
    <label>
      Backface visible
      <input class="backface-checkbox" type="checkbox" checked />
    </label>
  </p>
</div>

{% include edit-codepen.html pen_slug="bMqZmr" %}

* * *

[**Next: 3D transform functions &rarr;**](3d-transform-functions)
