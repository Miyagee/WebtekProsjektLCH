
	var tekst;
	var imgen;
	var taggen;
	var ruta;

	window.addEventListener("load", packHover);

	function packHover() {
		document.getElementById("pack-1").onmouseover = function() {setBoxInfo(1);};				
		document.getElementById("pack-2").onmouseover = function() {setBoxInfo(2);};		
		document.getElementById("pack-3").onmouseover = function() {setBoxInfo(3);};
		document.getElementById("pack-4").onmouseover = function() {setBoxInfo(4);};				
		document.getElementById("pack-5").onmouseover = function() {setBoxInfo(5);};		
		document.getElementById("pack-6").onmouseover = function() {setBoxInfo(6);};
		document.getElementById("pack-7").onmouseover = function() {setBoxInfo(7);};				
		document.getElementById("pack-8").onmouseover = function() {setBoxInfo(8);};		
		document.getElementById("pack-9").onmouseover = function() {setBoxInfo(9);};

		mouseOver = false;
		}

	function setBoxInfo(id){
		tekst = document.getElementById("hoverText"+id);
		imgen = document.getElementById("pack"+id);
		taggen = document.getElementsByClassName("inner"+id)[0];
		ruta =  document.getElementsByClassName("border"+id)[0];
				
		ruta.addEventListener("mouseenter", hover);
		ruta.addEventListener("mouseenter", picHide);
		ruta.addEventListener("mouseleave", picShow);
	}
				
	function hover() {
		mouseOver = true;
		tekst.style.display = "block";
		tekst.style.color = "white";
		tekst.style.marginTop = "100px";
		}
				
	function picShow() {
		if (mouseOver) {
			imgen.style.display = "initial";
			taggen.style.top = "initial";
			taggen.style.bottom = "0";
			tekst.style.display = "none";
			}
		}
			
	function picHide() {
		mouseOver = true;
		imgen.style.display = "none";
		taggen.style.top = "0";
					
		}
		
		

