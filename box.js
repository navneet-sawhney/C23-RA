class Box {

constructor(x,y,width, height){
//Properties of the object
var options = {

    restitution: 0.6
}

this.body = Bodies.rectangle(x,y,width,height, options);

this.width = width;
this.height = height;

World.add(world, this.body);

}

//functions

display(){

var pos = this.body.position;
var angle = this.body.angle;

push();
translate(pos.x,pos.y);
rotate(angle);

angleMode(RADIANS);

fill("red")
rectMode(CENTER);
rect(0, 0, this.width, this.height);

pop();

}




}