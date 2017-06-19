var numSquares = 6;
var colors = generatRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
 
colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generatRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for( var i = 0; i< squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }    
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generatRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for( var i = 0; i< squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click",  function(){
    colors = generatRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for( var i = 0; i< squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];        
    };
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
    this.textContent = "New Colors";
});

for( var i = 0; i< squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener('click', function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                message.textContent = "Correct";
                resetButton.textContent = "Play again?";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }else{
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again!";
            }
        });
};

function changeColor(color) {
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color
    };
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generatRandomColors(num) {
 var arr = []; 
 for( var i = 0; i < num ; i++) {
    arr.push(randomColor());
 }
 return arr;
}

function randomColor() {
   var r =  Math.floor(Math.random() * 256);
   var g =  Math.floor(Math.random() * 256);
   var b =  Math.floor(Math.random() * 256);

   var rgb = `rgb(${r}, ${g}, ${b})`;

   return rgb
}