
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(10,795,2000,10);
  ground2=new Ground(10,5,2000,10);
  ground3=new Ground(5,5,10,1800);
  ground4=new Ground(470,5,10,1800);

 

  for(var k=0;k <=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75))
  }

  for (var j = 40;j<width; j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for(var j = 40;j<width; j=j+50){
    plinkos.push(new Plinko(j,275))
  }

  for(var j = 40;j<width; j=j+50){
    plinkos.push(new Plinko(j,375))
  }

 


for(var s=60;s<width; s=s+50){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10))

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
}


}

function draw() {
  background(0); 
  Engine.update(engine); 

ground1.display();
ground2.display();
ground3.display();
ground4.display();  

for (var k = 0; k < divisions.length; k++) {
     
  divisions[k].display();
}
for(var j=0;j< plinkos.length; j++){
  
plinkos[j].display();

}

for(var s=0;s<particles.length; s++){

  particles[s].display();
}

  drawSprites();
}
