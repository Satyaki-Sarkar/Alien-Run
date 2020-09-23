const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var alien, spaceship, ground;
var alienImage, AlienImage, spaceshipImage, SpaceShipImage;

function preload() {
    alienImage = loadImage("images/Alien.png",AlienImage);
    spaceshipImage = loadImage("images/Space-Ship.png", SpaceShipImage);
}

function setup(){
    createCanvas(displayWidth-50,displayHeight-50);


    engine = Engine.create();
    world = engine.world;

    alien = new Alien(width/2,height/2,40,40);

    ground = new Ground(width/2,height/2+20,210,10);

    Engine.run(engine);
}

function draw(){
    Engine.update(engine);
    background(0);

    ground.visible=true;

    alien.display();
    ground.display();
}

function  detectCollision(lstone,lmango,lattach) {
    mPos=lmango.body.position;
    sPos=lstone.body.position;

	var distance= dist(sPos.x,sPos.y,mPos.x,mPos.y)
        if(distance<=lmango.width+lstone.width){
            //Matter.Body.setStatic(lmango.body,false);
            lattach.detach();
        }
}

// function createGround(){
//     for(var a = width+20, a)
// }