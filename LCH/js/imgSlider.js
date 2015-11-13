/*
FILE NAME: js/imgSlider.js
WRITTEN BY: Didrik Dyrkorn and Joachim Jorgensen
WHEN: November 2015
PURPOSE: Functions the carousel on the frontpage (homepage.html)
*/

window.addEventListener("load", doStuff);

function doStuff() {

  //Selects the navigation arrows and the slider-div itself
  var larrow = document.getElementById("larrow");
  var rarrow = document.getElementById("rarrow");
  var slider = document.getElementById("slider_div");

  //Initialises that the first image is displaying
  var picture = 1;

  //Initialises that the carousel goes to the right
  var slidewayright = true;

  //Sets the carousel to slide every 5s
  var x = setInterval(function(){ autoslide() }, 5000); 

  //Changes the cursor when hovering the arroes
  larrow.style.cursor = "pointer";
  rarrow.style.cursor = "pointer";

  //Manually slides the carousel when the arrows are pressed
  larrow.addEventListener("click", slideleft);
  rarrow.addEventListener("click", slideright);

  //Finds out which way to slide the images and then slides that way
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

  //Slides the carousel to the left
  function slideleft() {
    //First check that this is not the first picture. Then checks if the picture is moving.
    if ((picture) > 1 && (parseInt(window.getComputedStyle(slider, null).getPropertyValue("left"), 10) % 964 == 0)) {
      var leftpx = window.getComputedStyle(slider, null).getPropertyValue("left"); //Get picture position.
      leftint = parseInt(leftpx, 10); //Remove 'px' from position.
      leftint = leftint + 964; //Move imgSlider one picture to the right. 
      newleftpx = leftint + "px"; //Add 'px' to the new position.
      slider.style.left = newleftpx; //Replace position.
      picture -= 1; //Keep track of which picture we are on.
    }
  }

  //Slides the carousel to the right
  function slideright() {
    //First check that this is not the first picture. Then checks if the picture is moving.
    if ((picture < 5) && (parseInt(window.getComputedStyle(slider, null).getPropertyValue("left"), 10) % 964 == 0)) {
      var leftpx = window.getComputedStyle(slider, null).getPropertyValue("left"); //Get picture position.
      leftint = parseInt(leftpx, 10);  //Remove 'px' from position.
      leftint = leftint - 964; //Move imgSlider one picture to the left.
      newleftpx = leftint + "px"; //Add 'px' to the new position.
      slider.style.left = newleftpx; //Replace position.
      picture += 1; //Keep track of which picture we are on.
    }
  }
}
