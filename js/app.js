var z = 0;

function addRectangles() {

	var theDiv = document.getElementById('rectanglearea');
	
	for (var i = 0; i < 20; i++) {
		var rect = document.createElement('div');
		rect.className = 'rect';
		rect.style.backgroundColor = randomColor();
		theDiv.appendChild(rect);

		rect.style.left = Math.floor(Math.random() * 100) + '%';
		rect.style.top = Math.floor(Math.random() * 100) + '%';
		rect.onclick = rectClick;
		
		rect.style.zIndex = z;
	}
}

function rectClick(e) {

}

function randomColor() {
	return "#" + (Math.floor(Math.random() * 16)).toString(16) +
	             (Math.floor(Math.random() * 16)).toString(16) +
	             (Math.floor(Math.random() * 16)).toString(16);
}

window.onload = addRectangles;
