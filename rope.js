class Rope{
    constructor(body1, body2, Xoffset, Yoffset) {
        this.Xoffset = Xoffset;
        this.Yoffset = Yoffset;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.Xoffset,y:this.Yoffset}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        strokeWeight(4);
        fill("black");
        line(pointA.x,pointA.y,pointB.x+this.Xoffset,pointB.y+this.Yoffset);
    }
}