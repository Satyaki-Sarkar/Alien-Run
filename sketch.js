const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var alien, spaceship;
var alienImage, AlienImage, spaceshipImage, SpaceShipImage;

var ground = [];

var c, counter;
var camera;

function preload() {
    alienImage = loadImage("images/Alien.png",AlienImage);
    spaceshipImage = loadImage("images/Space-Ship.png", SpaceShipImage);
}

function setup(){
    createCanvas(displayWidth-50,displayHeight-50);

    engine = Engine.create();
    world = engine.world;
    camera = new Camera();

    c = 700;
    counter=0;

    for(var a=75; a<=width*6; a+=150)
    {
        for(var d=75; d<=width*6; d+=600){
            ground.push(new Ground(d,700,100,20));
        }
        for(var d=225; d<=width*6; d+=300){
            ground.push(new Ground(d,660,100,20));
        }
        for(var d=375; d<=width*6; d+=600){
            ground.push(new Ground(d,620,100,20));
        }
    }

    alien = new Alien(70,height-66,80,80);

    Engine.run(engine);
}

function draw(){
    background(0);

    alien.display();

    for(var a=0; a<ground.length; a+=1)
    {
        var displayGround = ground[a];
        displayGround.display();
    }

    camera.position.x=alien.body.position.x;
    camera.position.y=alien.body.position.y;

    
}

function  detectCollision(lstone,lmango,lattach) {
    mPos=lmango.body.position;
    sPos=lstone.body.position;

	var distance= dist(sPos.x,sPos.y,mPos.x,mPos.y)
        if(distance<=lmango.width+lstone.width){
            lattach.detach();
        }
}

function keyPressed()
{
    if(keyCode===UP_ARROW){
        var posX= alien.body.position.x;
        var posY=alien.body.position.y;
        Matter.Body.applyForce(alien.body,{x :posX , y : posY},{x : 17, y : -20});
    }
}