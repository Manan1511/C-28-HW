var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,paper1,dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	paper1 = new Paper(220,335,70);

	dustbin1 = new Dustbin(700,600,110,25);

	launcher = new Launcher(paper1.body,{x:350,y:335});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,10);
  dustbin1.display();
  paper1.display();

  text(mouseX+","+mouseY,mouseX,mouseY)
  

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-100});
	}
}
function mouseDragged(){
    Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    launcher.fly();
}



