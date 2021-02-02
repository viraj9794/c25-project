var ball, ground

var wall1, wall2, wall3, wall4;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var myEngine, myWorld;

function setup() {
	createCanvas(800, 700);
	//rectMode(CENTER);
	myEngine = Engine.create();
	myWorld = myEngine.world;
	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)

	//ball=createSprite(100, 50, 25);
var render = Render.create({
	element:document.body,
	engine: myEngine, 
	options:{
		width:800,
		height:700,
		wireframes:false
	}
});
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 680, width, 10 , {isStatic:true} );
 	World.add(myWorld, ground);
	
	ball = Bodies.circle(100, 675, 25 , {isStatic:false, density:1.2, restitution:0.5, friction:1});
	World.add(myWorld, ball);

	wall1= new Wall(600, 660, 200, 20);
	wall2= new Wall(500, 620, 20, 100);
	wall3= new Wall(700, 620, 20, 100);
  Render.run(render)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
Engine.update(myEngine);
  rect(ground.position.x, ground.position.y ,800, 20)
wall1.display();
wall2.display();
wall3.display();
push();
ellipseMode(RADIUS);
translate(ball.position.x,ball.position.y);
fill("red")
ellipse(0, 0, 25, 25);
pop();
  drawSprites();
 
}
function keyPressed(UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:95, y:-95});
}