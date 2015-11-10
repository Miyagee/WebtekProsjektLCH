window.addEventListener("load", doStuff);

function doStuff() {

  var pack_div = document.getElementById("packages_div");
  var dropdown = document.getElementById("dd");

  var hover_list = false;
  var delay = 50;

  pack_div.addEventListener("mouseenter", dropDown);
  dropdown.addEventListener("mouseenter", enter_list);
  pack_div.addEventListener("mouseleave", leave_pack);
  dropdown.addEventListener("mouseleave", leave_list);

  dropdown.style.display = "none";

  function dropDown() {
    dropdown.style.display = "block";
  }

  function enter_list() {
    hover_list = true;
  }

  function leave_list() {
    hover_list = false;
    dropdown.style.display = "none";
  }

  function leave_pack() {
    setTimeout(function(){
      if (!hover_list) {
        leave_list();
      }
    }, delay);
  }
}
