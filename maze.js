//provides all event handling and behaviour to make maze work

var loser = null;

window.onload = function() {
	var top_left_wall = document.getElementById("boundary1");
	top_left_wall.addEventListener("mouseover", function() {
		top_left_wall.classList.add("youlose");
	});
	
	
	
	var all_boundaries = document.querySelectorAll("div#maze div.boundary");
	for (var i = 0; i < all_boundaries.length; i++) {
		all_boundaries[i].addEventListener("mouseover", function() {
			if (loser == false) {
				loser = true;	
				all_boundaries[i].classList.add("youlose");
				document.getElementById("status").innerHTML = "You lose!";
			}
		});
	}


	
	var end = document.getElementById("end");
	end.addEventListener("onmouseover", function() {
		if (loser == false) {
			document.getElementById("status").innerHTML = "You win!";
		}
	});
	
    
	
	var start = document.getElementById("start");
	start.addEventListener("onclick", function() {
		loser = false;
		var all_boundaries = document.querySelectorAll("div#maze div.boundary");
		for (var i = 0; i < all_boundaries.length; i++) {
			all_boundaries[i].classList.remove("youlose");
		}
	});
	
	
	
	var cheat = document.getElementById("start");
	cheat.addEventListener("onmouseleave", function() {
		for (var i = 0; i < all_boundaries.length; i++) {
			all_boundaries[i].classList.add("youlose");
			document.getElementById("status").innerHTML = "You win!";
		}
	});
		
	
	
}
