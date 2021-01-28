var ground;

var block1,block2,block3,block4,block5,block6,block7,block8,block9;

function setup(){
ground.createSprite();
ground=Ground

//polygon
polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot = new Slingshot(this.polygon,{x:100,y:200});

imageMode(CENTRE)
image(polygon_img, polygon.position.x, polygon.posiiton.y,40,40);

}

function preload(){
    block1 = new Block(330,235,30,40);
    block2 = new Block(360,235,30,40);
    block3 = new Block(390,235,30,40);
    block4 = new Block(420,235,30,40);
    block5 = new Block(450,235,30,40);
    
    block6 = new Block(360,195,30,40);
    block7 = new Block(390,195,30,40);
    block8 = new Block(420,195,30,40);
 
    block9 = new Block(390,155,30,40);
}

function mouseDragged(){

}

function mouseReleased(){
    Matter.Body.setPosition(box.body,{x:mouseX,y:mouseY})
}

function mousePressed() {
    if (value === 0) {
      value = 255;
    } else {
      value = 0;
    }
  }