function Carousel3D ( id, isHorizontal ) {
  this.element = document.getElementById( id );
  
  this.rotation = 0;
  this.panelCount = 0;
  this.theta = 0;
  
  this.fragment = document.createDocumentFragment();
  
  this.populate = function( panelCount, isHorizontal ) {
    this.panelCount = panelCount;
    
    this.isHorizontal = isHorizontal;

    this.panelSize = this.element[ isHorizontal ? 'offsetWidth' : 'offsetHeight' ];
    
    this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
    
    // clear out carousel
		while ( this.element.firstChild ) {
			this.element.removeChild( this.element.firstChild );
		}
    
    this.theta = 360 / this.panelCount;

    // do some trig to figure out how big the carousel
    // is in 3D space
    this.radius = Math.round( ( this.panelSize / 2) / Math.tan( Math.PI / this.panelCount ) );
    
    for ( var i = 0; i < this.panelCount; i++ ) {
      var panel = document.createElement('div'),
          angle = this.theta * i;
      panel.textContent = i + 1;
      panel.style.backgroundColor = 'hsla(' + angle + ', 100%, 50%, 0.7)';
      // rotate panel, then push it out in 3D space
      panel.style.webkitTransform = this.rotateFn + '(' + angle + 'deg) translateZ(' + this.radius + 'px)';
      
      this.fragment.appendChild( panel );
    }
    
    this.element.appendChild( this.fragment );
    
    // adjust rotation so panels are always flat
    this.rotation = Math.round( this.rotation / this.theta ) * this.theta;
    
    this.transform();
    
  };
  
  this.transform = function() {
    // push the carousel back in 3D space,
    // and rotate it
    this.element.style.webkitTransform = 'translateZ(-' + this.radius + 'px) ' + this.rotateFn + '(' + this.rotation + 'deg)';
  };
  
}