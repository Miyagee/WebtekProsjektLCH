/*
FILE NAME: js/dropdown.js
WRITTEN BY: Joachim Jorgensen
WHEN: November 2015
PURPOSE: Functions the dropdown menu on the frontpage (homepage.html)
*/

window.addEventListener("load", doStuff);

function doStuff() {

  //Selects the packages-div in the navbar and the dropdown menu itself
  var pack_div = document.getElementById("packages_div");
  var dropdown = document.getElementById("dd");

  //Boolean for checking if the dropdown is hovered or not
  var hover_list = false;

  //Delay for the leave_pack()-function
  var delay = 50;

  //Adds eventlistener to the packages-div and the dropdown menu
  pack_div.addEventListener("mouseenter", dropDown);
  dropdown.addEventListener("mouseenter", enter_list);
  pack_div.addEventListener("mouseleave", leave_pack);
  dropdown.addEventListener("mouseleave", leave_list);

  //Initially hides the dropdown menu
  dropdown.style.display = "none";


  //Displays the dropdown
  function dropDown() {
    dropdown.style.display = "block";
  }

  //Signalises that the dropdown is hovered
  function enter_list() {
    hover_list = true;
  }

  //Signalises that the dropdown is no longer hovered and hides it.
  function leave_list() {
    hover_list = false;
    dropdown.style.display = "none";
  }

  //Hides the dropdown if the packages-div is not hovered and the
  //dropdown is not hovered.
  //The delay is for the cursor to get over the little gap between
  //the packages-div and the dropdown without hiding the dropdown
  function leave_pack() {
    setTimeout(function(){
      if (!hover_list) {
        leave_list();
      }
    }, delay);
  }
}
