class dustbin
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:true,
        }

        this.x = x,
        this.y = y;
        this.height = height;
        this.width = width;
        this.image = loadImage("dustbingreen.png");
        this.body = Bodies.rectangle(this.x, this.y, this.height, this.width, options);
        World.add(world, this.body);
    }

    display()
    {
        var dustbinpos = this.body.position;

        push();
        rectMode(CENTER);
        rect(this.x,this.y,this.width, this.height);
        fill("black");
        pop();

    }
}