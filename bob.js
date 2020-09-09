class Bob {
    constructor(x, y, width, height) {
        this.body = Bodies.circle(x, y, width-24.5, {
            isStatic: false,
            'restitution': 1.1,
            'friction': 0,
            'density': 30.0
        });
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}
