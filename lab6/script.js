window.addEventListener('load', main, false);
function main() {
	const ctx = canvas.getContext('2d');
	const w = canvas.width;
	const h = canvas.height;
	const fps = 60;
	const dt=1/fps;
    let deltatime = 1000*dt;
	
	

	class Ball {
		constructor(x, y, vx, vy, rad,r,g,b){
			this.x = x;
			this.y = y;
			this.vx = vx;
			this.vy = vy;
			this.rad = rad;
			this.r=r;
			this.g=g;
			this.b=b;
		}

		drawBall() {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.rad, 0, 2*Math.PI);
            ctx.fillStyle=`rgb(${this.r},${this.g},${this.b})`;
			ctx.fill();
		}
		
		pushwall(){
			if (this.x <= this.rad){
				this.vx = -this.vx;
				this.x=this.x+3;
			}
			if (this.y <= this.rad){
				this.vy = - this.vy;
				this.y=this.y+3;
			}
			if (this.x >= w-this.rad){
				this.vx = - this.vx;
				this.x=this.x-3
			}
			if (this.y >= h-this.rad){
				this.vy = - this.vy;
				this.y=this.y-3
			}
		}	
		move(){
			this.x += this.vx*dt;
			this.y += this.vy*dt;
		}
	    otherballs(other){
			if (Math.sqrt(Math.pow(this.x-other.x,2)+Math.pow(this.y-other.y,2)) <= Math.sqrt(Math.pow(this.rad+other.rad,2))){
				[this.vx, this.vy, other.vx, other.vy] = [other.vx, other.vy, this.vx, this.vy];
			}
			
		}

	}

	let Balls = [];
	let N =20;
	for (let i=0; i<N; i++){
		do{
			x = Math.random()*((w-35)-35)+35;
		    y = Math.random()*((h-35)-35)+35;
			rad = Math.random()*(30-5)+5;
		}while(ballborders());
		let vx=Math.random()*(100-50)+50;
        let vy=Math.random()*(100-50)+50;
		let r=Math.trunc(Math.random()*256);
        let g=Math.trunc(Math.random()*256);
        let b=Math.trunc(Math.random()*256);
		let bruh = new Ball(x, y, vx, vy, rad,r,g,b);
		Balls.push(bruh);
	}

	function ballborders(x,y,rad){
		for(const Ball of Balls){
			if (Math.sqrt(Math.pow(Ball.x - x,2) + Math.pow(Ball.y - y,2)) < (Ball.rad + rad+30))
			{
			  return true; 
			} else {
				return false;
			}
		}
			
	}
	function drawBalls() {
		ctx.clearRect(0,0,w,h);
		for (const Ball of Balls){
			Ball.drawBall();
		}
	}

	function all(){
		for (const Ball of Balls){
			Ball.move();
			Ball.pushwall();

		}
		for (let i=0; i<N; i++){
			for (let j=0; j<i; j++){
				Balls[i].otherballs(Balls[j])
			}
		}
	}

	function control(){
		all();
		drawBalls();
	}
   setInterval(control, deltatime)
}











































