
class ball {
	constructor(x,y,r)
	  {
		  var options = { 
			  density: 1, 
			  frictionAir: 0.001
		  };
		  this.x=x;
		  this.y=y;
		  this.r=r;
		  this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		  World.add(world, this.body);
	  }
	  
	  display()
	  {
			  
			  var ballPos=this.body.position;		
			  push()
			  translate(ballPos.x, ballPos.y);
			  rectMode(CENTER)
			  fill(255,0,255)
			  ellipseMode(CENTER);
			  ellipse(0,0,this.r, this.r);
			pop()

			  
	  }
  }
  