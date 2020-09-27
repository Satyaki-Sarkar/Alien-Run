class Ground{
    constructor(x,y,width,height){
        var groundOptions={
            'isStatic': true
        }

        this.body=Bodies.rectangle(x,y,width,height,groundOptions);
        this.width=width;
        this.height=height;

        World.add(world,this.body);
    }
    
    display(){
    var pos=this.body.position;
    rectMode(CENTER);
    fill(255,255,255);
    stroke(20);
    rect(pos.x,pos.y,this.width,this.height);
    }
};