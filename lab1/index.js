window.addEventListener('load', main, false);
function main () {
    const w=canvas.width;
	const h=canvas.height;
	const ctx=canvas.getContext('2d');
    
    let scale=15;
    let g=10;
    let ball={
        x0: 0,
        y0: h,
        x: 0,
        y: h,
        r: 20,
        color: "black"
    }

    ctx.strokeStyle="black";
    ctx.lineWidth=3;
    drawGrid()
    drawBall(ball.x0,ball.y0);
    
    function drawGrid() {
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(0,h);
        ctx.lineTo(w,h);
        ctx.stroke();
    }

    function drawBall(x,y) {
        ctx.beginPath();
        ctx.arc(x,y, ball.r, 0, 2*Math.PI);
        ctx.fill();
    }

    draw.onclick=()=>{
        speed=document.querySelector("input[name='speed']").value;
        corner=document.querySelector("input[name='corner']").value/180*Math.PI;
        ball.x=ball.x0;
        oneFrame();
    }

    function oneFrame() {
        clearScreen();
        drawGrid();
        drawPath();
        drawBall(ball.x,ball.y);
        if(ball.x <=w && ball.y <= h) {
            ball.x += speed * Math.cos(corner)/scale;
            requestAnimationFrame(oneFrame);
        }
        else {
            cancelAnimationFrame(oneFrame);
        }
    }

    function clearScreen() {
        ctx.clearRect(0,0,w,h);
    }
    
    function drawPath() {
        let Vx=speed*Math.cos(corner);
        let Vy=speed*Math.sin(corner);
        ctx.beginPath();
        let y=ball.y0;
        ctx.moveTo(ball.x0, ball.y0);
        for (let x=Vx/scale; x <= ball.x; x += (Vx/scale)) {
            if(y>h){
                break;
            }
            y-=Vy/scale;
            Vy-=g/scale;
            ctx.lineTo(x,y);
        }
        ball.y=y;
        ctx.stroke();
    }

    clear.onclick = ()=>{
        clearScreen();
        drawGrid();
        drawBall(ball.x0, ball.y0);
    }
}

    