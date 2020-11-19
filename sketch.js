const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particle;

var divisionHeight=300;
var score =0;
var turn = 0;
var gameState = "play";



function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  Engine.update(engine);


  textSize(20)
  text("Score : "+score,20,30);

  text("500",20,760);
  text("500",105,760);
  text("500",180,760);
  text("500",265,760);
  text("100",340,760);
  text("100",425,760);
  text("100",500,760);
  text("200",585,760);
  text("200",660,760);
  text("200",745,760);
  
  if (gameState === "end"){
    text("gameOver", 200,50);
  }

     
   
  /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/
   
  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
  }

   
    if(particle !== null){

      //0particles.display();

    if(particle.body.position.y> 760){
       
      if(particle.body.position.x < 300){
        score = score + 500;
        particle = null;
        if(count >= 5){
          gameState = "end";
        }
      }
    
  
      
        else if(particle.body.position.x > 301 && particle.body.position.x <600){
          score = score+100;
          particle = null;

          if(count >= 5){
            gameState = "end";
          }
        }

        else if(particle.body.position.x > 601 && particle.body.position.x <900){
          score = score+200;
          particle = null;

          if(count >= 5){
            gameState = "end";
          }
        }
         
     }

    
  }

  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();

 }

}
  
   
   


function mousePressed(){
  if(gameState !== "end"){
    score++;
    particle= new Particle(mouseX,10,10,10); 
  }
}
