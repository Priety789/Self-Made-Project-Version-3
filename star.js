class Star {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            'restitution': 0.8
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/star2.jpg");
        this.Visiblity = 255;

        World.add(world, this.body);
    }
    points() {
        if (this.Visiblity < 0 && this.Visiblity > -100) {
            score++; 
        }
    }
    display() {
        var pos = this.body.position;
        console.log(this.body.position.y);
        if (this.body.speed < 6 && pos.y < 620) {
            push();
            translate(pos.x, pos.y);
            imageMode(CENTER);
            fill(255);
            image(this.image, 0, 0, this.width, this.height);
            console.log("first");
            pop();
        }
        if(this.body.speed > 6 && pos.y > 620) {
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255, this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 40, 40);
            console.log(this.Visiblity);
            pop();
        }
    }
};