var background;
var ground;

const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies;
var engine, world;

function preload(){

 //Getbackgroundimg()
}

function Getbackgroundimg(){

bg = "snow3.png";
backgroundimg = loadImage(bg);


}





function setup() {
  
var canvas = createCanvas(1200,400);
engine = Engine.create(); 
world = engine.world; 
//ground = new Ground(600,height,1200,20);

snow1 = new Snow(150,100,40,50);
snow2 = new Snow(200,300,50,30);
snow3 = new Snow(300,250,40,40);

}

function draw() {
 background("snow1.jpg");
 // if (backgroundimg){
   // background(backgroundimg);
  //}
  Engine.update(engine);
  
  snow1.display();
  snow2.display();
  snow3.display();



  drawSprites();
}