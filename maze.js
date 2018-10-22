//provides all event handling and behaviour to make maze work

window.onload = function() {
	var top_left_wall = document.getElementById("boundary1");
	top_left_wall.onmouseover = function() {
		top_left_wall.setAttribute("youlose");
	}
	
	
	
	var all_boundaries = document.querySelectorAll("div#maze div.boundary");
	for (var i = 0; i < all_boundaries.length; i++) {
		all_boundaries[i].onmouseover = function() {
			all_boundaries[i].setAttribute("youlose");
		}
	}

	
	
	var end = document.getElementById("end");
	end.onmouseover = function() {
		alert("You win!");
	}
	
		
	
	
	
	
	
}
	
	
	
	
	