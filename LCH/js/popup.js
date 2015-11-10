window.addEventListener("load", function() {
	//Package id's for popup
	document.getElementById("pack-1").addEventListener("click", function() {popUp(1);});
	document.getElementById("pack-2").addEventListener("click", function() {popUp(2);});
	

});


function popUp(id){
	var middle = (screen.width*0.5)-400;
	var subWindow = window.open("packages/subpackage.html","Subpackage",
                                   "titlebar = no, toolbar = no, location = no, status = no, menubar = no, scrollbars = yes, resizable = no, width = 800px, left="+ middle +"", false);

	//console.log(screen.width*0.5-400);
	//Redirects to order.html
	subWindow.getElementById("order").addEventListener("click", function() {closePage();});
	//Close window
	subWindow.getElementById("close").addEventListener("click", function() {closePage();});

	if (id === 1){
		subWindow.getElementById("package-header").innerHTML = "";
		subWindow.getElementById("p1").innerHTML = "";
		subWindow.getElementById("p2").innerHTML = "";
		subWindow.getElementById("p3").innerHTML = "";
		subWindow["img1"].src = "";
		subWindow["img2"].src = "";
		subWindow["img3"].src = "";
	}
	else if (id === 2){
		subWindow.getElementById("package-header").innerHTML = "";
		subWindow.getElementById("p1").innerHTML = "";
		subWindow.getElementById("p2").innerHTML = "";
		subWindow.getElementById("p3").innerHTML = "";
		subWindow["img1"].src = "";
		subWindow["img2"].src = "";
		subWindow["img3"].src = "";
	}
	else if (id === 3){
		subWindow.getElementById("package-header").innerHTML = "";
		subWindow.getElementById("p1").innerHTML = "";
		subWindow.getElementById("p2").innerHTML = "";
		subWindow.getElementById("p3").innerHTML = "";
		subWindow["img1"].src = "";
		subWindow["img2"].src = "";
		subWindow["img3"].src = "";
	}
	else if (id === 4){
		subWindow.getElementById("package-header").innerHTML = "";
		subWindow.getElementById("p1").innerHTML = "";
		subWindow.getElementById("p2").innerHTML = "";
		subWindow.getElementById("p3").innerHTML = "";
		subWindow["img1"].src = "";
		subWindow["img2"].src = "";
		subWindow["img3"].src = "";
	}
	else if (id === 5){
		subWindow.getElementById("package-header").innerHTML = "";
		subWindow.getElementById("p1").innerHTML = "";
		subWindow.getElementById("p2").innerHTML = "";
		subWindow.getElementById("p3").innerHTML = "";
		subWindow["img1"].src = "";
		subWindow["img2"].src = "";
		subWindow["img3"].src = "";
	}
	else if (id === 6){
		subWindow.getElementById("package-header").innerHTML = "";
		subWindow.getElementById("p1").innerHTML = "";
		subWindow.getElementById("p2").innerHTML = "";
		subWindow.getElementById("p3").innerHTML = "";
		subWindow["img1"].src = "";
		subWindow["img2"].src = "";
		subWindow["img3"].src = "";
	}
	else if (id === 7){
		subWindow.getElementById("package-header").innerHTML = "";
		subWindow.getElementById("p1").innerHTML = "";
		subWindow.getElementById("p2").innerHTML = "";
		subWindow.getElementById("p3").innerHTML = "";
		subWindow["img1"].src = "";
		subWindow["img2"].src = "";
		subWindow["img3"].src = "";
	}
	else if (id === 8){
		subWindow.getElementById("package-header").innerHTML = "";
		subWindow.getElementById("p1").innerHTML = "";
		subWindow.getElementById("p2").innerHTML = "";
		subWindow.getElementById("p3").innerHTML = "";
		subWindow["img1"].src = "";
		subWindow["img2"].src = "";
		subWindow["img3"].src = "";
	}
	else if (id === 9){
		subWindow.getElementById("package-header").innerHTML = "";
		subWindow.getElementById("p1").innerHTML = "";
		subWindow.getElementById("p2").innerHTML = "";
		subWindow.getElementById("p3").innerHTML = "";
		subWindow["img1"].src = "";
		subWindow["img2"].src = "";
		subWindow["img3"].src = "";
	} 
	
}

function redirectOrder(id) {
	closePage();
	window.location = "order.html";
}

function closePage(){
	window.close();
}
