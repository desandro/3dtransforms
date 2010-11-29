var init = function() {
  var card = document.querySelector('.card');
  
  document.getElementById('flip').addEventListener( DDD.CursorStartEvent, function(){
    card.toggleClassName('flipped');
  }, false);
};

window.addEventListener('DOMContentLoaded', init, false);