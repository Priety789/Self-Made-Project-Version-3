class Ball {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            'restitution': 0.3,
            'friction': 0.8,
            'density': 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill("pink");
        circle(0, 0, this.radius);
        pop();
    }
};
