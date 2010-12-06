// ======================= DOM Utility Functions from PastryKit =============================== //

// Sure, we could use jQuery or XUI for these, 
// but these are concise and will work with plain vanilla JS

Element.prototype.hasClassName = function (a) {
    return new RegExp("(?:^|\\s+)" + a + "(?:\\s+|$)").test(this.className);
};

Element.prototype.addClassName = function (a) {
    if (!this.hasClassName(a)) {
        this.className = [this.className, a].join(" ");
    }
};

Element.prototype.removeClassName = function (b) {
    if (this.hasClassName(b)) {
        var a = this.className;
        this.className = a.replace(new RegExp("(?:^|\\s+)" + b + "(?:\\s+|$)", "g"), " ");
    }
};

Element.prototype.toggleClassName = function (a) {
  this[this.hasClassName(a) ? "removeClassName" : "addClassName"](a);
};


// ======================= DDD mini framework =============================== //

var DDD = {};
// again, borrowed from PastryKit
DDD.isTangible = !!('createTouch' in document);
DDD.CursorStartEvent = DDD.isTangible ? 'touchstart' : 'mousedown';
DDD.CursorMoveEvent = DDD.isTangible ? 'touchmove' : 'mousemove';
DDD.CursorEndEvent = DDD.isTangible ? 'touchend' : 'mouseup';

/* ==================== EventHandler ==================== */

DDD.EventHandler = function() {};

DDD.EventHandler.prototype.handleEvent = function( event ) {
  if ( this[event.type] ) {
    this[event.type](event);
  }
};


/* ==================== RangeDisplay ==================== */

// displays the value of a range input
// why isn't this in the HTML5 spec?

DDD.RangeDisplay = function ( range ) {
  this.range = range;
  this.output = document.createElement('span');
  this.output.addClassName('range-display');
  
  
  this.units = this.range.getAttribute('data-units') || '';
  
  // this.output.textContent = this.range.value;
  this.change();
  
  
  this.range.parentNode.appendChild( this.output );
  
  this.range.addEventListener( 'change', this, false);
};

DDD.RangeDisplay.prototype = new DDD.EventHandler();

DDD.RangeDisplay.prototype.change = function( event ) {
  this.output.textContent = this.range.value + this.units;
};


/* ==================== ProxyRange ==================== */

// polyfill for range inputs
// by no means a production-ready solution, but it'll do for these demos

DDD.ProxyRange = function ( input ) {
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
  
  this.normalizeRatio = ( this.max - this.min ) / ( this.width - DDD.ProxyRange.lineCap * 2 );
  
  this.value = this.input.value;

  DDD.transformProp = DDD.transformProp || DDD.getStyleProperty('transform');

  this.resetHandlePosition();
  
  
  this.slider.addEventListener( DDD.CursorStartEvent, this, false );
  this.handle.addEventListener( DDD.CursorStartEvent, this, false );
  
  this.input.parentNode.insertBefore( this.slider, this.input.nextSibling );
  this.input.style.display = 'none';
  
  this.x = this.slider.offsetLeft;
  
};

// constant for position the handle inside the slider
DDD.ProxyRange.lineCap = 15;

DDD.ProxyRange.prototype = new DDD.EventHandler();

DDD.ProxyRange.prototype.moveHandle = function( event ) {
  var cursor = DDD.isTangible ? event.touches[0] : event,
      x = cursor.pageX - this.x;
  x = Math.max( DDD.ProxyRange.lineCap, Math.min( this.width - DDD.ProxyRange.lineCap, x ) );
  
  this.positionHandle( x );
  
  this.value = Math.round( ( x - DDD.ProxyRange.lineCap ) * this.normalizeRatio + this.min );
  
  if ( this.input.value != this.value ) {
    this.input.value = this.value;

    // trigger change event
    var evt = document.createEvent("Event");
    evt.initEvent("change", true, true);
    this.input.dispatchEvent( evt );
  }

};

DDD.ProxyRange.prototype.positionHandle = function( x ) {
  this.handle.style[ DDD.transformProp ] =  DDD.translate( x, 0 );
};

DDD.ProxyRange.prototype.resetHandlePosition = function() {
  var x = ( this.value - this.min ) / this.normalizeRatio + DDD.ProxyRange.lineCap;
  this.positionHandle( x );
};


DDD.ProxyRange.prototype[ DDD.CursorStartEvent ] = function( event ) {
  this.slider.addClassName('highlighted');
  
  this.moveHandle( event );
  
  window.addEventListener( DDD.CursorMoveEvent, this, false );
  window.addEventListener( DDD.CursorEndEvent, this, false );
  
  event.preventDefault();
};

DDD.ProxyRange.prototype[ DDD.CursorMoveEvent ] = function( event ) {
  
  this.moveHandle( event );
  
  event.preventDefault();
};

DDD.ProxyRange.prototype[ DDD.CursorEndEvent ] = function( event ) {
  
  this.slider.removeClassName('highlighted');
  
  window.removeEventListener( DDD.CursorMoveEvent, this, false );
  window.removeEventListener( DDD.CursorEndEvent, this, false );
};


/* ==================== Test 3D transform support ==================== */

// check browser support for 3D transforms
// this has been hacked together from Modernizr csstransforms3d test
// -> Thanks Faruk Ates, Paul Irish http://modernizr.com
DDD.check3DSupport = function() {
  
  
  var modElem = document.createElement('modernizr'),
      m_style = modElem.style,
      docHead = document.head || document.getElementsByTagName('head')[0],
      docElement = document.documentElement,
      prefixes = ' -webkit- -moz- -o- -ms- -khtml- '.split(' '),
      
      test_props = function ( props ) {
        for ( var i in props ) {
          if ( m_style[ props[i] ] !== undefined ) {
            return true;
          }
        }
      },
      
      ret = !!test_props([ 'perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective' ]);
  
  if (ret && 'webkitPerspective' in docElement.style){
    
    var mq = '@media ('+prefixes.join('transform-3d),(')+'modernizr)',
        st = document.createElement('style'),
        div = document.createElement('div'),
        ret;

    st.textContent = mq + '{#modernizr{height:3px}}';
    docHead.appendChild(st);
    div.id = 'modernizr';
    docElement.appendChild(div);

    ret = !!( div.offsetHeight === 3 );

    st.parentNode.removeChild(st);
    div.parentNode.removeChild(div);

  }

  DDD.is3DTransformsSupported = ret;
  
  DDD.translate = DDD.is3DTransformsSupported ?
    function( x, y ) {
      return 'translate3d(' + x + 'px, ' + y + 'px, 0 )';
    } :
    function( x, y ) {
      return 'translate(' + x + 'px, ' + y + 'px)';
    }
  ;

};


DDD.getStyleProperty = (function(){
 
  var prefixes = ['Moz', 'Webkit', 'Khtml', 'O', 'Ms'];
 
  function getStyleProperty(propName, element) {
    element = element || document.documentElement;
    var style = element.style,
        prefixed;
 
    // test standard property first
    if (typeof style[propName] == 'string') return propName;
 
    // capitalize
    propName = propName.charAt(0).toUpperCase() + propName.slice(1);
 
    // test vendor specific properties
    for (var i=0, l=prefixes.length; i<l; i++) {
      prefixed = prefixes[i] + propName;
      if (typeof style[prefixed] == 'string') return prefixed;
    }
  }
 
  return getStyleProperty;
})();


/* ==================== Start Up ==================== */


DDD.init = function() {
  
  // test for 3D transforms
  DDD.check3DSupport();

  if ( !DDD.is3DTransformsSupported ) {
    document.getElementById('disclaimer').style.display = 'block';
  }
  
  
  var ranges = document.querySelectorAll('input[type="range"]'),
      rangesLen = ranges.length,
      i;
  
  if ( rangesLen ) {
    
     // create range output display
    for ( i=0; i < rangesLen; i++ ) {
      new DDD.RangeDisplay( ranges[i] );
    }
    
    // check browser support for range input
    // this has been hacked together from Modernizr range input test
    // -> Thanks Faruk Ates, Paul Irish, and Mike Taylor http://modernizr.com
    var isRangeSupported = (function() {
      var isSupported = ranges[0].type !== 'text';
      if ( isSupported ) {
        isSupported = getComputedStyle( ranges[0] ).WebkitAppearance !== 'textfield';
      }
      return isSupported;
    })();
    
    // create range inputs for iOS
    if ( !isRangeSupported ) {
      for ( i=0; i < rangesLen; i++ ) {
        new DDD.ProxyRange( ranges[i] );
      }
    }
    
  }
  
};


window.addEventListener( 'DOMContentLoaded', DDD.init, false);