---

title: Perspective
layout: doc
category: docs

---


To activate 3D space, an element needs perspective.  This can be applied in two ways: using the `transform` property, with the perspective as a functional notation.


{% highlight css %}

transform: perspective( 600px );

{% endhighlight %}

or using the `perspective` property: 

{% highlight css %}

perspective: 600px;

{% endhighlight %}

**NOTE**: for the sake of brevity in the example code, I am using the un-prefixed CSS properties, i.e. `perspective`. In actual use, you'll have to use vendor-prefixed versions: `-webkit-perspective`, `-moz-perspective`, etc.

[**See Example: Perspective 1**](../examples/perspective-01.html)

[![Perspective property at work](../img/perspective01.png)](../examples/perspective-01.html)

These two formats both trigger a 3D space, but there is a difference. The functional notation is convenient for directly applying a 3D transform on a single element (in [the previous example](../examples/perspective-01.html), I use it in conjunction with a `rotateY` transform). But when used on multiple elements, the transformed elements don't line up as expected. If you use the same transform across elements with different positions, each element will have its own vanishing point. To remedy this, use the `perspective` property on a parent element, so each child may share the same 3D space.

[**See Example: Perspective 2**](../examples/perspective-02-children.html)

[![Perspective differences when used with child elements](../img/perspective-children01.png)](../examples/perspective-02-children.html)

The value of `perspective` determines the intensity of the 3D effect. Think of it as a distance from the viewer to the object. The greater the value, the further the distance, the less intense the visual effect. `perspective: 2000px;` yields a subtle 3D effect, as if we are viewing an object from far away through binoculars. `perspective: 100px;` produces a tremendous 3D effect, like a tiny insect viewing a massive object.

By default, the vanishing point for a 3D space is positioned at the center. You can change the position of the vanishing point with `perspective-origin` property.


{% highlight css %}

perspective-origin: 25% 75%;

{% endhighlight %}

[**See Example: Perspective 3**](../examples/perspective-03.html)

[![Intense perspective value, with vanishing point modified](../img/perspective02.png)](../examples/perspective-03.html)

* * *

[**Next: 3D transform functions &raquo;**](3d-transform-functions.html)
