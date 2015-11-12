window.addEventListener("load", function() {
	//Package id's for popup
	document.getElementById("order").addEventListener("click", function() {redirectOrder();});
	document.getElementById("close").addEventListener("click", function() {closePage();});

});

function redirectOrder() {
	window.location = "../order.html";
}

function closePage(){
	window.close();
}
