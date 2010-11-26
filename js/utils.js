Element.prototype.hasClassName = function (a) {
    return new RegExp("(?:^|\\s+)" + a + "(?:\\s+|$)").test(this.className)
};

Element.prototype.addClassName = function (a) {
    if (!this.hasClassName(a)) {
        this.className = [this.className, a].join(" ")
    }
};

Element.prototype.removeClassName = function (b) {
    if (this.hasClassName(b)) {
        var a = this.className;
        this.className = a.replace(new RegExp("(?:^|\\s+)" + b + "(?:\\s+|$)", "g"), " ")
    }
};

Element.prototype.toggleClassName = function (a) {
  this[this.hasClassName(a) ? "removeClassName" : "addClassName"](a)
};


// ======================= DDD mini framework =============================== //

var DDD = {};
DDD.isTangible = !!('createTouch' in document);
DDD.CursorStartEvent = DDD.isTangible ? 'touchstart' : 'mousedown';
DDD.CursorMoveEvent = DDD.isTangible ? 'touchmove' : 'mousemove';
DDD.CursorEndEvent = DDD.isTangible ? 'touchend' : 'mouseup';

DDD.init = function() {
  var ranges = document.querySelectorAll('input[type="range"]'),
      rangesLen = ranges.length,
      i;
  
  if ( rangesLen ) {
    
    
     // create range output display
    for ( i=0; i < rangesLen; i++ ) {
      new RangeDisplay( ranges[i] );
    }
    
    // check browser support for range input
    // this has been hacked together from Modernizr range input
    var isRangeSupported = getComputedStyle( ranges[0] ).WebkitAppearance !== 'textfield';
    
    // if ( !isRangeSupported ) {
    if ( true ) {
      for ( i=0; i < rangesLen; i++ ) {
        // var rangeDisplay = new RangeDisplay( ranges[i] );
        new ProxyRange( ranges[i] );
      }
    }
    
  }
  
};

function EventHandler () {}

EventHandler.prototype.handleEvent = function( event ) {
  if ( this[event.type] ) {
    this[event.type](event);
  }
};


/* ==================== ProxyRange ==================== */

function ProxyRange ( input ) {

  this.input = input;
  
  this.slider = document.createElement('div');
  this.slider.addClassName('proxy-range');

  this.handle = document.createElement('div');
  this.handle.addClassName('handle');
  this.slider.appendChild( this.handle );


  this.width = parseInt( getComputedStyle( this.input ).width, 10);
  this.slider.style.width = this.width + 'px';
  
  this.min = parseInt( this.input.getAttribute('min'), 10 );
  this.max = parseInt( this.input.getAttribute('max'), 10 );
  
  this.value = this.input.value;
  this.resetHandlePosition();
  
  
  // console.log( this.width +' ' +this.min + ' ' + this.max )
  
  // this.slider = this.element.children[0];
  
  this.slider.addEventListener( DDD.CursorStartEvent, this, false );
  this.handle.addEventListener( DDD.CursorStartEvent, this, false );
  
  this.input.parentNode.insertBefore( this.slider, this.input.nextSibling );
  this.input.style.display = 'none';
  
  this.x = this.slider.offsetLeft;
  
};

ProxyRange.lineCap = 15;

ProxyRange.prototype = new EventHandler();

ProxyRange.prototype.moveHandle = function( event ) {
  var cursor = DDD.isTangible ? event.touches[0] : event,
      x = cursor.pageX - this.x;
  x = Math.max( ProxyRange.lineCap, Math.min( this.width - ProxyRange.lineCap, x ) );
  
  this.positionHandle( x );
  
  // normalize value, 0 - 1
  var val = ( x - ProxyRange.lineCap ) / ( this.width - ProxyRange.lineCap * 2 );
  this.value = Math.round( val * ( this.max - this.min ) + this.min );
  
  this.input.value = this.value;
  
  // trigger change event
  var evt = document.createEvent("Event");
  evt.initEvent("change", true, true);
  this.input.dispatchEvent( evt );
};

ProxyRange.prototype.positionHandle = function( x ) {
  this.handle.style.webkitTransform = 'translate3d(' + x + 'px,0,0)';
};

ProxyRange.prototype.resetHandlePosition = function() {
  var x = ( this.value - this.min ) / ( this.max - this.min ) * ( this.width - ProxyRange.lineCap * 2 ) + ProxyRange.lineCap;
  this.positionHandle( x );
};


ProxyRange.prototype[ DDD.CursorStartEvent ] = function( event ) {
  this.slider.addClassName('highlighted');
  
  this.moveHandle( event );
  
  window.addEventListener( DDD.CursorMoveEvent, this, false );
  window.addEventListener( DDD.CursorEndEvent, this, false );
  
  event.preventDefault();
};

ProxyRange.prototype[ DDD.CursorMoveEvent ] = function( event ) {
  
  this.moveHandle( event );
  
  event.preventDefault();
};

ProxyRange.prototype[ DDD.CursorEndEvent ] = function( event ) {
  
  this.slider.removeClassName('highlighted');
  
  window.removeEventListener( DDD.CursorMoveEvent, this, false );
  window.removeEventListener( DDD.CursorEndEvent, this, false );
};


/* ==================== Range Display ==================== */

function RangeDisplay ( range ) {
  this.range = range;
  this.output = document.createElement('span');
  this.output.addClassName('range-display');
  this.output.textContent = this.range.value;
  
  this.range.parentNode.appendChild( this.output );
  
  this.range.addEventListener( 'change', this, false);
}

RangeDisplay.prototype = new EventHandler();

RangeDisplay.prototype.change = function( event ) {
  this.output.textContent = this.range.value;
};


window.addEventListener( 'DOMContentLoaded', DDD.init, false)