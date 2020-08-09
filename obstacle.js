class Obstacle {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            'restitution': 0.8, 
            'density': 1.2,
            'friction': 0.3
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/spike.jpg");

        World.add(world, this.body);
    }
    score() {
        if (this.body.speed > 1) {
            score -= 1;
        }
    }
    jump() {
        if (frameCount % 150 === 0) {
            Matter.Body.applyForce(this.body, this.body.position, { x: 0, y: 170 });
        }
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        fill(255);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
};