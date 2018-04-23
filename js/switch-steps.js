var init = function() {
  var container = document.querySelector('.container'),
      buttons = document.querySelectorAll('#options button'),
      containerClass = 'step1',

      onButtonClick = function(event) {
        container.classList.remove( containerClass );
        containerClass = event.target.className;
        container.classList.add( containerClass );
      };

  for ( var i=0, len = buttons.length; i < len; i++ ) {
    buttons[i].addEventListener( 'click', onButtonClick, false );
  }

};

window.addEventListener('DOMContentLoaded', init, false);
