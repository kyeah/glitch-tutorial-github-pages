let myFont;
let points;

function preload(){
  myFont = loadFont('NotoSans-Light.ttf');
}
function setup() {
  createCanvas(400, 400);
  
  points = myFont.textToPoints('glitch!', 20, height/2, 160,{
    sampleFactor:0.20
  });
}

function draw() {
  background(220);
  
  for (let i = 0; i<points.length; i++) {
    ellipse(points[i].x,points[i].y,4);
  }
  
  let randomI = floor(random(0, points.length))
  points.splice(randomI, 1)
}