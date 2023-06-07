$(document).ready(function() {
    if(!$('#myCanvas').tagcanvas({
      //textColour: '#ff0000',
      outlineColour: '#ff00ff',
      reverse: true,
      depth: 1,
      maxSpeed: 0.05,
      textFont: null,
      textColour: null,
      weightMode:'both',
      weight: true,
      weightGradient: {
       0:    '#25569b', // red
       0.33: '#0a66c2', // yellow
       //0.66: '#0f0', // green
       1:    '#707070'  // blue
      }
    },'tags')) {
      // something went wrong, hide the canvas container
      $('#myCanvasContainer').hide();
    }
  });