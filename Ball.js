 class Ball{
     constructor(x,y,radius){
     this.body=Bodies.circle(x,y,radius);
     this.radius=radius;
     this.image=loadImage('polygon.png');
     World.add(world,this.body);
     }

     display(){
        var pos=this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,40,40);
     }
    
 }