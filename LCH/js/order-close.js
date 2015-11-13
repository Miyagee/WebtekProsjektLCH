/*
FILE NAME: js/order-close.js
WRITTEN BY: Simon Kvannli
WHEN: November 2015
PURPOSE: This is the javascript for the buttons on the popup-packages
*/

window.addEventListener("load", function() {
	//Package id's for popup
	document.getElementById("order").addEventListener("click", function() {redirectOrder();});
	document.getElementById("close").addEventListener("click", function() {closePage();});

});

//When "order"-button is pressed it redirects the page to order.html
function redirectOrder() {
	window.location = "../order.html";
}

//When the "x" in the top corner is pressed, the window closes
function closePage(){
	window.close();
}
