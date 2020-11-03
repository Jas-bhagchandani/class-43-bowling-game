var gameState=0;
function setup() {
  createCanvas(windowWidth,windowHeight);
  title= new Start();
  
}

function draw() {
  background("blue");
  if(gameState===0){
    title.display();
  }
   

  
}