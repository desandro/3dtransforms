var demo = document.querySelector('.demo');
var cube = document.querySelector('.cube');
var originX = 50;
var originY = 50;

function updatePerspectiveOrigin() {
  demo.style.perspectiveOrigin = originX + '% ' + originY + '%';
}

// perspective
var perspectiveRange = document.querySelector('.perspective-range');

perspectiveRange.onchange = perspectiveRange.oninput = function() {
  demo.style.perspective = perspectiveRange.value + 'px';
};
perspectiveRange.onchange();

// origin x
var originXRange = document.querySelector('.origin-x-range');
originXRange.onchange = originXRange.oninput = function() {
  originX = originXRange.value;
  updatePerspectiveOrigin();
};
originXRange.onchange();

// origin y
var originYRange = document.querySelector('.origin-y-range');
originYRange.onchange = originYRange.oninput = function() {
  originY = originYRange.value;
  updatePerspectiveOrigin();
};
originYRange.onchange();

// spin cube
var spinCubeCheckbox = document.querySelector('.spin-cube-checkbox');
spinCubeCheckbox.onchange = function() {
  cube.classList.toggle( 'is-spinning', spinCubeCheckbox.checked );
};
spinCubeCheckbox.onchange();

// backface visibility
var backfaceCheckbox = document.querySelector('.backface-checkbox');
backfaceCheckbox.onchange = function() {
  cube.classList.toggle( 'is-backface-visible', backfaceCheckbox.checked );
};
