
function validateForm() {
    var x = document.forms["orderForm"]["first-name"].value;
    if (x == null || x == "") {
        alert("Firstname must be filled out");
        return false;
    }

	x = document.forms["orderForm"]["last-name"].value;
	if (x == null || x == "") {
        alert("Lastname must be filled out");
        return false;
    }

	x = document.forms["orderForm"]["address"].value;
	if (x == null || x == "") {
        alert("Address must be filled out");
        return false;
    }

	x = document.forms["orderForm"]["city"].value;
	if (x == null || x == "") {
        alert("City must be filled out");
        return false;
    }

	x = document.forms["orderForm"]["postal"].value;
	var isNumber =  /^\d+$/.test(x);
	if (isNumber === false){
		alert("ZIP can only contain numbers");
		return false;
	}
	if (x == null || x == "") {
        alert("ZIP is missing");
        return false;
    }

	x = document.forms["orderForm"]["country"].value;
	if (x == "000") {
        alert("Please choose your country");
        return false;
    }
	console.log(x);
	x = document.forms["orderForm"]["e-mail"].value;
	if (x == null || x == "") {
        alert("E-mail is required");
        return false;
    }

	x = document.forms["orderForm"]["phone"].value;
	var isNumber =  /^\d+$/.test(x);
	if (isNumber === false){
		alert("Phone number can only contain numbers");
		return false;
	}
	if (x == null || x == "") {
        alert("Phone number is required");
        return false;
    }
	x = document.forms["orderForm"]["packagenr"].value;
	if (x == "000") {
        alert("Please choose your package");
        return false;
    }
	
	alert("Your order has been submitted");
}
