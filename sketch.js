
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, paper1Image;
var ground1;
var dustbin1, dustbin2, dustbin3;

function preload()
{
	// paper1Image = loadImage("paper.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	
	
	ground1 = new Ground(400,500,800,20);
	dustbin1 = new dustbin(503,445,15,90);
	dustbin2 = new dustbin(600,445,15,90);
	dustbin3 = new dustbin(550,483,90,15);
	paper1 = new Paper(50,350,70);
	// paper1.addImage("paper1Image");
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  paper1.display();
  dustbin3.display();
  dustbin1.display();
  dustbin2.display();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.position,{x:170, y:-170});
	}
}

