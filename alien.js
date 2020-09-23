class Alien{
    constructor(x,y,width,height){
        var options = {
            'restiitution': 0.8,
            'density' : 1.0,
            'friction' : 1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(alienImage,0,0,this.width+10,this.height+30);
    }
}