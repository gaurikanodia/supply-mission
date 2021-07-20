
var HelicopterIMG, Helicopter, ParcelBox,ParcelIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	HelicopterIMG=loadImage("helicopter.png")
	ParcelIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	ParcelBox=createSprite(width/2, 80, 10,10);
	ParcelBox.addImage(ParcelIMG)
	ParcelBox.scale=0.2

	Helicopter=createSprite(width/2, 200, 10,10);
	Helicopter.addImage(HelicopterIMG)
	Helicopter.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2 , 200, 25 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color("#231709");

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color("#231709");

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color("#231709");

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  ParcelBox.x= packageBody.position.x 
  ParcelBox.y= packageBody.position.y 


  drawSprites();
  
  
 
}


function keyPressed() {
	if (keyCode===DOWN_ARROW) {
	   
	   Matter.Body.setStatic(packageBody,false);
	   
	 }
	 if (keyCode===LEFT_ARROW) {
	   
		Helicopter.x = Helicopter.x - 30;
		packageBody.position.x =packageBody.position.x -30		
	  }
	  if (keyCode===RIGHT_ARROW) {
	   
		Helicopter.x = Helicopter.x + 30;
		packageBody.position.x 	=packageBody.position.x +30	
	  }
	}
   