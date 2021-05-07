class Drop {
    constructor(x,y){
        var options = {
            friction : 0.1,
            isStatic: false
        }
        this.array = {}
        this.rain = Bodies.circle(x, y, 5, options);
    }
    update(){
        if(this.rain.position.y > height){
            Matter.body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }
    display(){
        var pos = this.rain.position;
        ellipse(this.rain.position.x, this.rain.position.y, 10)
    }
    push(drop){
        this.array.push(drop);
    }
}