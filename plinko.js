class Plinko
{
    constructor(x,y)
    {
        var options={
            isStatic:true,
            friction:0,
            restitution:1.0
        }
            this.x=x;
            this.y=y;
            this.r= 10;
            this.body=Bodies.circle(this.x,this.y,this.r,options);
            World.add(world, this.body);
    
    }
    display()
    {
        var paperpos=this.body.position ;
        var angle = this.body.angle;
        push()
        translate(paperpos.x,paperpos.y);
        rotate(angle)
        imageMode(CENTER);
        rectMode(CENTER)
        strokeWeight(1);
        fill("white")
        //ellispeMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop()

    }

}