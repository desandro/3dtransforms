---

title: Card Flip
layout: doc
category: docs
slug: card
redirect_from:
  - "/docs/card-flip.html"
  - "/examples/card-01.html"
  - "/examples/card-02-slide-flip.html"
  - "/examples/card-03-slide-flip-2-ways.html"
  - "/examples/transforms-03-origin.html"

---

We now have all the tools to start making 3D objects. Let's get started with the basics, flipping a card.

Here's the basic markup we'll need:

{% highlight html %}
<div class="scene">
  <div class="card">
    <div class="card__face card__face--front">front</div>
    <div class="card__face card__face--back">back</div>
  </div>
</div>
{% endhighlight %}

<div class="scene">
  <div class="card card--step0">
    <div class="card__face card__face--front">front</div>
    <div class="card__face card__face--back">back</div>
  </div>
</div>

The `.scene` will house the 3D space. The `.card` acts as the 3D object. Two separate `.card__face` elements are used for the faces of the card. I recommend using this same pattern for any 3D transform: scene, object, and faces. Keeping the 3D space element and the object separate element establishes a paradigm that is simple to understand and easier to style.

We're ready for some 3D stylin'. First, apply necessary `perspective` to the containing 3D space, along with any size or positioning styles.

{% highlight css %}
.scene {
  width: 200px;
  height: 260px;
  perspective: 600px;
}
{% endhighlight %}

Now the `.card` element can be transformed in its parent's 3D space. We'll add `width: 100%;`  and `height: 100%;` so the card's `transform-origin` will occur in the center of container. More on `transform-origin` later. `position: relative` is used to position card faces absolutely.

Let's add a CSS3 transition so users can see the transform take effect.

{% highlight css %}
.card {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
}
{% endhighlight %}

An element's `perspective` only applies to direct descendant children, in this case `.card`. In order for subsequent children to inherit a parent's perspective, and live in the same 3D space, the parent can pass along its perspective with `transform-style: preserve-3d`. Without 3D `transform-style`, the faces of the card would be flattened with its parents, and the back face's rotation would be nullified.

To position the faces in 3D space, we'll need to reset their positions in 2D with `position: absolute`. In order to hide the back-side of the faces when they are faced away from the viewer, we use `backface-visibility: hidden`.

{% highlight css %}
.card__face {
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
}
{% endhighlight %}

To flip `.card__face--back`, we add a basic 3D transform of `rotateY(180deg)`.

{% highlight css %}
.card__face--front {
  background: red;
}

.card__face--back {
  background: blue;
  transform: rotateY( 180deg );
}
{% endhighlight %}

With the faces in place, the `.card` requires a corresponding style for when it is flipped.

{% highlight css %}
.card.is-flipped {
  transform: rotateY(180deg);
}
{% endhighlight %}

Now we have a working 3D object. To flip the card, we can toggle the `is-flipped` class. When `.is-flipped`, the `.card` will rotate 180 degrees, thus exposing `.card__face--back`.

<div class="demo demo--card-flip">
  <div class="scene scene--card">
    <div class="card">
      <div class="card__face card__face--front">front</div>
      <div class="card__face card__face--back">back</div>
    </div>
  </div>
  <p>Click card to flip.</p>
</div>
<script>
( function() {
  var card = document.querySelector('.demo--card-flip .card');
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
})();
</script>

{% include edit-codepen.html pen_slug="LmWoWe" %}

![3D card flip transition](../img/card-flip01.png)

## Slide-flip

Take another look at the Weather App 3D transition. You'll notice that it's not quite the same effect as our previous demo. If you follow the right edge of the card, you'll find that it stays flush with the container. Instead of pivoting from the horizontal center, it pivots on that right edge. But the transition is not just a rotation -- the edge moves horizontally from right to left. We can reproduce this transition just by modifying a couple lines of CSS from our original card flip demo.

The pivot point for the rotation occurs at the right side of the card. By default, the `transform-origin` of an element is at its horizontal and vertical center (`50% 50%` or `center center`). An element's transforms are applied from its `transform-origin`. Let's change it to the right side:

{% highlight css %}
.card { transform-origin: center right; }
{% endhighlight %}

That flip now needs some horizontal movement with `translateX`. We'll set the rotation to `-180deg` so it flips right side out.

{% highlight css %}
.card.is-flipped {
  transform: translateX(-100%) rotateY(-180deg);
}
{% endhighlight %}

<div class="demo demo--card-slide-flip">
  <div class="scene scene--card">
    <div class="card card--slide">
      <div class="card__face card__face--front">front</div>
      <div class="card__face card__face--back">back</div>
    </div>
  </div>
  <p>Click card to flip.</p>
</div>
<script>
( function() {
  var card = document.querySelector('.demo--card-slide-flip .card');
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
})();
</script>

{% include edit-codepen.html pen_slug="LmWozd" %}

![3D card slide-flip transition](../img/card-flip02.png)

* * *

[**Next: Cube &rarr;**](cube)
