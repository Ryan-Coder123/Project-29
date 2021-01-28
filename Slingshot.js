class SlingShot{
    constructor(bodyA,pointB){
    
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.07,
        length:11
    }
    this.sling=Constraint.create(options)
    this.pointB=pointB
    World.add(world,this.sling)
    }
    display(){
        var pointA=this.sling.bodyA.position
        var pointB=this.pointB 
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
      
     }
    }