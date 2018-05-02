// perspective cube

( function() {

  var demo = document.querySelector('.demo--persp-cube');
  var scene = demo.querySelector('.scene');
  var cube = demo.querySelector('.cube');
  var originX = 50;
  var originY = 50;

  function updatePerspectiveOrigin() {
    scene.style.perspectiveOrigin = originX + '% ' + originY + '%';
  }

  // perspective
  var perspectiveRange = demo.querySelector('.perspective-range');
  perspectiveRange.onchange = perspectiveRange.oninput = function() {
    scene.style.perspective = perspectiveRange.value + 'px';
  };
  perspectiveRange.onchange();

  // origin x
  var originXRange = demo.querySelector('.origin-x-range');
  originXRange.onchange = originXRange.oninput = function() {
    originX = originXRange.value;
    updatePerspectiveOrigin();
  };
  originXRange.onchange();

  // origin y
  var originYRange = demo.querySelector('.origin-y-range');
  originYRange.onchange = originYRange.oninput = function() {
    originY = originYRange.value;
    updatePerspectiveOrigin();
  };
  originYRange.onchange();

  // spin cube
  var spinCubeCheckbox = demo.querySelector('.spin-cube-checkbox');
  spinCubeCheckbox.onchange = function() {
    cube.classList.toggle( 'is-spinning', spinCubeCheckbox.checked );
  };
  spinCubeCheckbox.onchange();

  // backface visibility
  var backfaceCheckbox = demo.querySelector('.backface-checkbox');
  backfaceCheckbox.onchange = function() {
    cube.classList.toggle( 'is-backface-hidden', !backfaceCheckbox.checked );
  };

})();
