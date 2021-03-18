const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function setup(){
    createCanvas(1000,700);
    engine=Engine.create();
    world=engine.world;

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);  

    ground1=new Ground(490,500,220,10);
    box1=new Box(400,475,30,40);
    box2=new Box(430,475,30,40);
    box3=new Box(460,475,30,40);
    box4=new Box(490,475,30,40);
    box5=new Box(520,475,30,40);
    box6=new Box(550,475,30,40);
    box7=new Box(580,475,30,40);
    box8=new Box(430,435,30,40);
    box9=new Box(460,435,30,40);
    box10=new Box(490,435,30,40);
    box11=new Box(520,435,30,40);
    box12=new Box(550,435,30,40);
    box13=new Box(460,395,30,40);
    box14=new Box(490,395,30,40);
    box15=new Box(520,395,30,40);
    box16=new Box(490,355,30,40);
    ground2=new Ground(790,300,160,10);
    box17=new Box(730,275,30,40);
    box18=new Box(760,275,30,40);
    box19=new Box(790,275,30,40);
    box20=new Box(820,275,30,40);
    box21=new Box(850,275,30,40);
    box22=new Box(760,235,30,40);
    box23=new Box(790,235,30,40);
    box24=new Box(820,235,30,40);
    box25=new Box(790,195,30,40);
    ball=new Ball(300,500,40);
    sling=new SlingShot(ball.body,{x:200,y:500});

}


function draw(){
    background(0,0,0);

    Engine.update(engine);
    ground1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    ground2.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    ball.display();
    sling.display();
    //fill("gold"); 
    


    drawSprites();
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    sling.fly();
}