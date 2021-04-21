const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,ball1,rope1;

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground (600,600,1200,20);

  box1 = new box (600,100,50,50);
  box2 = new box (600,100,50,50);
  box3 = new box (600,100,50,50);
  box4 = new box (600,100,50,50);
  box5 = new box (600,100,50,50);
  box6 = new box (600,100,50,50);

  ball1 = new ball (400,400,70);

  rope1 = new rope (ball1.body,{x:300,y:20});

}
 
function draw() {
  background(56,44,44); 

  ground.display();  

  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display();
  box6.display();

  ball1.display();
  rope1.display();
  
}
function mouseDragged() {

  Matter.Body.setPosition (ball1.body,{x: mouseX , y: mouseY});
}

