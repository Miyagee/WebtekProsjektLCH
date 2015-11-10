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

function popUp(id){	

	init();	
    subWindow.onload = setTimeout("fillData("+id+")", 1000);
        //Redirects to order.html
	subWindow.document.getElementById("order").addEventListener("click", function() {redirectOrder(1);});

		//Close window
	subWindow.document.getElementById("close").addEventListener("click", function() {closePage();}); 
    
	
}

function init(){
    subWindow = window.open("packages/subpackage.html","Subpackage", "titlebar = no, toolbar = no, location = no, status = no, menubar = no, scrollbars = yes, resizable = no, height = 720, width = 800, left="+ middle +"", false);
}

function fillData(id){
    //Conditions for which page to load
		if (id === 1){
			subWindow.document.getElementById("package-header").innerHTML = "Mixed Package 1";
			subWindow.document.getElementById("p1").innerHTML = "";
			subWindow.document.getElementById("p2").innerHTML = "";
			subWindow.document.getElementById("p3").innerHTML = "";
			subWindow["img1"].src = "";
			subWindow["img2"].src = "";
		}
		else if (id === 2){
			subWindow.document.getElementById("package-header").innerHTML = "Mixed Package 2";
			subWindow.document.getElementById("p1").innerHTML = "";
			subWindow.document.getElementById("p2").innerHTML = "";
			subWindow.document.getElementById("p3").innerHTML = "";
			subWindow["img1"].src = "";
			subWindow["img2"].src = "";
		}
		else if (id === 3){
			subWindow.document.getElementById("package-header").innerHTML = "Mixed Package 3";
			subWindow.document.getElementById("p1").innerHTML = "";
			subWindow.document.getElementById("p2").innerHTML = "";
			subWindow.document.getElementById("p3").innerHTML = "";
			subWindow["img1"].src = "";
			subWindow["img2"].src = "";
		}
		else if (id === 4){
			subWindow.document.getElementById("package-header").innerHTML = "Vehicle Package 1";
			subWindow.document.getElementById("p1").innerHTML = "";
			subWindow.document.getElementById("p2").innerHTML = "";
			subWindow.document.getElementById("p3").innerHTML = "";
			subWindow["img1"].src = "";
			subWindow["img2"].src = "";
		}
		else if (id === 5){
			subWindow.document.getElementById("package-header").innerHTML = "Vehicle Package 2";
			subWindow.document.getElementById("p1").innerHTML = "";
			subWindow.document.getElementById("p2").innerHTML = "";
			subWindow.document.getElementById("p3").innerHTML = "";
			subWindow["img1"].src = "";
			subWindow["img2"].src = "";
		}
		else if (id === 6){
			subWindow.document.getElementById("package-header").innerHTML = "Vehicle Package 3";
			subWindow.document.getElementById("p1").innerHTML = "";
			subWindow.document.getElementById("p2").innerHTML = "";
			subWindow.document.getElementById("p3").innerHTML = "";
			subWindow["img1"].src = "";
			subWindow["img2"].src = "";
		}
		else if (id === 7){
			subWindow.document.getElementById("package-header").innerHTML = "Home Package 1";
			subWindow.document.getElementById("p1").innerHTML = "";
			subWindow.document.getElementById("p2").innerHTML = "";
			subWindow.document.getElementById("p3").innerHTML = "";
			subWindow["img1"].src = "";
			subWindow["img2"].src = "";
			subWindow["img3"].src = "";
		}
		else if (id === 8){
			subWindow.document.getElementById("package-header").innerHTML = "Home Package 2";
			subWindow.document.getElementById("p1").innerHTML = "";
			subWindow.document.getElementById("p2").innerHTML = "";
			subWindow.document.getElementById("p3").innerHTML = "";
			subWindow["img1"].src = "";
			subWindow["img2"].src = "";
		}
		else if (id === 9){
			subWindow.document.getElementById("package-header").innerHTML = "Home Package 3";
			subWindow.document.getElementById("p1").innerHTML = "";
			subWindow.document.getElementById("p2").innerHTML = "";
			subWindow.document.getElementById("p3").innerHTML = "";
			subWindow["img1"].src = "";
			subWindow["img2"].src = "";
		};
}

function redirectOrder(id) {
	closePage();
	window.location = "order.html";
}

function closePage(){
	subWindow.close();
}

