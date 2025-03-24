window.addEventListener ('load', main, false);
function main() {
    let pressBall = false;
    let Position = null;
    const ctx=canvas.getContext('2d');
    const w=canvas.width;
    const h=canvas.height;
    const fps=60;
    const dt=1/fps;
   
    
    const ball={
        x:w/2,
        y:h/2,
        R:40,
        Vx:0,
        Vy:0,
        color:"pink",
    };

    function move(){
        ball.x += ball.Vx * dt;
        ball.y += ball.Vy * dt;

        if(ball.x + ball.R > w || ball.x - ball.R < 0) { 
        ball.Vx = -ball.Vx; 
        }

        if(ball.y + ball.R > h || ball.y - ball.R < 0) { 
            ball.Vy = -ball.Vy; 
        }
    }

    function render() {
        ctx.fillStyle="black";
        ctx.fillRect(0,0,w,h);
        ctx.beginPath();
        ctx.arc(ball.x,ball.y,ball.R,0,2*Math.PI);
        ctx.closePath();
        ctx.fillStyle=ball.color;
        ctx.fill();
    }    
    render();

    setInterval(()=>{
        move();
        render();
    },1000*dt);

    function pointInCircle(point,circle){
        return ((Math.sqrt(Math.pow(point.x-circle.x,2)+Math.pow(point.y-circle.y,2)))<=circle.R);
    }

    addEventListener("mousedown", function(event){
        let mouse ={
            x: event.offsetX,
            y: event.offsetY,
        };
        pressBall=pointInCircle(mouse,ball);
        if (pressBall){
           Position={...ball};
        }    
    })
    
    addEventListener("mousemove",function(event){
        if(!pressBall){
            return;
        }
        let mouse={
            x:event.offsetX,
            y:event.offsetY,
        };
        ball.x=mouse.x;
        ball.y=mouse.y;
    
    })
    

    addEventListener("mouseup",function(event){
        if (pressBall){
            ball.Vx=(Position.x-ball.x)*5;
            ball.Vy=(Position.y-ball.y)*5;
        }
        pressBall=false;
    })
}