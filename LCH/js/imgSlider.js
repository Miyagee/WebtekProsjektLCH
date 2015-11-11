window.addEventListener("load", doStuff);

function doStuff() {

  var larrow = document.getElementById("larrow");
  var rarrow = document.getElementById("rarrow");
  var slider = document.getElementById("slider_div");

  var picture = 1;
  var slidewayright = true;

  var x = setInterval(function(){ autoslide() }, 5000); //Sets autoslide every 5s.

  larrow.style.cursor = "pointer";
  rarrow.style.cursor = "pointer"; //Changes cursor when hovering the arrows.

  larrow.addEventListener("click", slideleft);
  rarrow.addEventListener("click", slideright); //Slides pictures when arrow is pressed.

  function autoslide() {
    //Keeps track of which way the pictures should slide.
    if (picture == 5) {
      slidewayright = false;
    } 
    else if (picture == 1) {
      slidewayright = true;
    }

    //Slide the pictures the correct way.
    if (slidewayright) {
      slideright();
    }else{
      slideleft();
    }
  }

  function slideleft() {
    //First check that this is not the first picture. then check if the picture is moving.
    if ((picture) > 1 && (parseInt(window.getComputedStyle(slider, null).getPropertyValue("left"), 10) % 964 == 0)) {
      var leftpx = window.getComputedStyle(slider, null).getPropertyValue("left"); //Get picture position.
      leftint = parseInt(leftpx, 10); //Remove 'px' from position.
      leftint = leftint + 964; //Move imgSlider one picture to the right. 
      newleftpx = leftint + "px"; //Add 'px' to the new position.
      slider.style.left = newleftpx; //Replace position.
      picture -= 1; //Keep track of which picture we are on.
    }
  }

  function slideright() {
    if ((picture < 5) && (parseInt(window.getComputedStyle(slider, null).getPropertyValue("left"), 10) % 964 == 0)) {
      var leftpx = window.getComputedStyle(slider, null).getPropertyValue("left");
      leftint = parseInt(leftpx, 10);
      leftint = leftint - 964;
      newleftpx = leftint + "px";
      slider.style.left = newleftpx;
      picture += 1;
    }
  }
}
