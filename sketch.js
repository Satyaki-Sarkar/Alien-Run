const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var alien, spaceship;
var alienImage, AlienImage, spaceshipImage, SpaceShipImage;

var ground = [];



function preload() {
    alienImage = loadImage("images/Alien.png",AlienImage);
    spaceshipImage = loadImage("images/Space-Ship.png", SpaceShipImage);
}

function setup(){
    createCanvas(displayWidth-50,displayHeight-50);

    console.log(width,height);

    engine = Engine.create();
    world = engine.world;

    alien = new Alien(width/2,height/2-20,80,80);

    for(var a=75; a<=width*6; a+=150)
    {
        var rand = random(538,690);
        ground.push(new Ground(a,rand,100,20));
    }

    Engine.run(engine);
}

function draw(){
    Engine.update(engine);
    background(0);

    alien.display();

    for(var a=0; a<=ground.length; a+=1)
    {
         var displayGround = ground[a];
        displayGround.display();
    }

    
}

function  detectCollision(lstone,lmango,lattach) {
    mPos=lmango.body.position;
    sPos=lstone.body.position;

	var distance= dist(sPos.x,sPos.y,mPos.x,mPos.y)
        if(distance<=lmango.width+lstone.width){
            lattach.detach();
        }
}

function createGround()
{
    
}