//("hello");
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");
var numSquares = 6;


	pickedColor = pickColor();
	
	colorDisplay.textContent = pickedColor;
	
	for (var i = 0; i < squares.length; i++) {
	
	squares[i].style.backgroundColor = colors[i];
	}

easyBtn.addEventListener("click", function(){
		hardBtn.classList.remove("selected");
		easyBtn.classList.add("selected");
		numSquares = 3;
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for(var i = 0; i < squares.length; i++){
			if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			} else {
				squares[i].style.display = "none";
			}
		}
});

hardBtn.addEventListener("click", function(){
		hardBtn.classList.add("selected");
		easyBtn.classList.remove("selected");
		numSquares = 6;
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
});

resetButton.addEventListener("click", function() {
	
	var colors = generateRandomColors(numSquares);
	
	pickedColor = pickColor();
	
	colorDisplay.textContent = pickedColor;
	
	for (var i = 0; i < squares.length; i++) {
	
	squares[i].style.backgroundColor = colors[i];
	
	}
	
	h1.style.backgroundColor = "steelblue";

	messageDisplay.textContent = "";

	resetButton.textContent = "New Colors";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
	
	var clickedColor = this.style.backgroundColor;

	if (clickedColor === pickedColor) {
	
	messageDisplay.textContent = "Correct!";
	
	changeColors(clickedColor);
	
	resetButton.textContent = "Play Again?";
	
	h1.style.background = clickedColor;
	
	} 

	else {
		
		this.style.background = "#232323";
		
		messageDisplay.textContent = "Try Again";
	}

	});
}

function changeColors(color){
	for (var i = 0; i < colors.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}