//provides all event handling and behaviour to make maze work


window.onload = function() {
	var top_left_wall = document.getElementById("boundary1");
	top_left_wall.onmouseover = function() {
		top_left_wall.setAttribute("youlose");
	}
}