/*
FILE NAME: js/popup.js
WRITTEN BY: Jie Li
WHEN: November 2015
PURPOSE: Opens a popup when a package is activated
*/

var middle = (screen.width*0.5)-400;
var subWindow;

window.addEventListener("load", function() {
	//Package id's for popup
	document.getElementById("pack-1").addEventListener("click", function() {popUp(1);});
	document.getElementById("pack-2").addEventListener("click", function() {popUp(2);});
	document.getElementById("pack-3").addEventListener("click", function() {popUp(3);});
	document.getElementById("pack-4").addEventListener("click", function() {popUp(4);});
	document.getElementById("pack-5").addEventListener("click", function() {popUp(5);});
	document.getElementById("pack-6").addEventListener("click", function() {popUp(6);});
	document.getElementById("pack-7").addEventListener("click", function() {popUp(7);});
	document.getElementById("pack-8").addEventListener("click", function() {popUp(8);});
	document.getElementById("pack-9").addEventListener("click", function() {popUp(9);});

});

//Initialises id
function popUp(id){	
	init(id);	
}

//Opens the popup
function init(id){
    subWindow = window.open("packages/subpackage"+id +".html","Subpackage", "titlebar = no, toolbar = no, location = no, status = no, menubar = no, scrollbars = yes, resizable = no, height = 720, width = 800, left="+ middle +"", false);
}
