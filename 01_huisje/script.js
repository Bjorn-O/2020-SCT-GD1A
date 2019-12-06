// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;


// context.beginPath();
// context.lineWidth = "100";
// context.strokeStyle = "red";
// context.fillStyle = "grey";
// context.arc(300,200,60,0,2*Math.PI);
// context.closePath();
// context.stroke();
// context.fill();

let circleObject = {};
circleObject.x = 300;
circleObject.y = 200;
circleObject.radius = 60;

circleObject.draw = function () {
  context.beginPath();
  context.arc(circleObject.x,circleObject.y,circleObject.radius,0,2*Math.PI);
  context.closePath();
  context.stroke();
}

circleObject.draw();
circleObject.x = 400;
circleObject.draw();

function animate(){
  context.clearRect(0,0,width,height);
  circleObject.draw();
  circleObject.x = circleObject.x + 1
  circleObject.y = circleObject.y +1
}

setInterval(animate,1)
