/*
FILE NAME: js/loadPackage.js
WRITTEN BY: Jie Li
WHEN: November 2015
PURPOSE: Loads the selected package in the order.html page
*/

var x;

//Checks which package is selected and loads it
function loadPackage(){
	x = document.getElementById("packagenr").value;
	if (x == "000") {
        document.getElementById("packagePic").src="img/noPackage.js";
	
	document.getElementById("packageName").innerHTML="Price";
    }
	else if(x === "0a"){
		document.getElementById("packagePic").src="img/packages/package_1.jpg";
		
		document.getElementById("packageName").innerHTML="$1500";
	}
	else if(x === "0b"){
		document.getElementById("packagePic").src="img/packages/package_2.jpg";

		document.getElementById("packageName").innerHTML="$1200";
	}
	else if(x === "0c"){
		document.getElementById("packagePic").src="img/packages/package_3.jpg";

		document.getElementById("packageName").innerHTML="$1000";
	}
	else if(x === "0d"){
		document.getElementById("packagePic").src="img/packages/vehicle_package_1.jpg";

		document.getElementById("packageName").innerHTML="$1000";
	}
	else if(x === "0e"){
		document.getElementById("packagePic").src="img/packages/vehicle_package_2.jpg";

		document.getElementById("packageName").innerHTML="$1100";
	}
	else if(x === "0f"){
		document.getElementById("packagePic").src="img/packages/vehicle_package_3.jpg";

		document.getElementById("packageName").innerHTML="$1200";
	}
	else if(x === "0g"){
		document.getElementById("packagePic").src="img/packages/home_package_1.jpg";

		document.getElementById("packageName").innerHTML="$1000";
	}
	else if(x === "0h"){
		document.getElementById("packagePic").src="img/packages/home_package_2.jpg";
		
		document.getElementById("packageName").innerHTML="$1500";
	}
	else if(x === "0i"){
		document.getElementById("packagePic").src="img/packages/home_package_3.jpg";

		document.getElementById("packageName").innerHTML="$2000";
	}
}
