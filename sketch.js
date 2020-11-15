var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, groundSprite, rect1, rect1Face, rect2, rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
    keyPressed();

	rect1Face=createSprite(width/2, height-50, 200,20);
	rect1Face.shapeColor="red";

	groundSprite=createSprite(width/2, height-30, width,10);
	groundSprite.shapeColor="white";


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//rect1Face = createSprite(width/2,height-50,200,20);
	//rect1Face.shapeColor = "red";

	rect2 = createSprite(300,height-90,20,100);
	rect2.shapeColor = "red";

	rect3 = createSprite(500,height-90,20,100);
	rect3.shapeColor = "red";

	

	

	engine = Engine.create();
	world = engine.world;

	rect1= Bodies.rectangle(width/2, height-50, 200, 20 , {isStatic:true} );
	World.add(world, rect1);

    ground= Bodies.rectangle(width/2, height-30, width, 10 , {isStatic:true} );
	World.add(world, ground);


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	
	
	 
	 //rect1 = Bodies.rectangle(width/2, height-50, 200, 20 , {isStatic:true} );
      //World.add(world, rect1);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CORNERS);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
   
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}



