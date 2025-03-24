window.addEventListener ('load', main, false);
function main() {
    const w=canvas.width;
    const h=canvas.height;
    const ctx=canvas.getContext('2d');

    let scale=20;
    let cX=w/2;
    let cY=h/2;
    
    ctx.strokeStyle ="black";
    ctx.lineWidth=1
    drawAxis();

    function drawAxis() {
        ctx.beginPath();
        ctx.moveTo(cX,0);
        ctx.lineTo(cX,h),
        ctx.moveTo(0,cY);
        ctx.lineTo(w,cY);
        ctx.stroke();
    }

    draw.onclick=function() {
       let a0=document.querySelector("input[name='a0']");
       let a1=document.querySelector("input[name='a1']");
       let a2=document.querySelector("input[name='a2']");
       let a3=document.querySelector("input[name='a3']");
       let a4=document.querySelector("input[name='a4']");
       let a=[a0.value,a1.value,a2.value,a3.value,a4.value];
       drawGraph(a);
    }

    function drawGraph(a) {
        clearScreen();
        drawAxis();
        ctx.beginPath();
        ctx.moveTo(0,0);
        for (let x=-cX; x<=cX; x++) {
            let y=0;
            for (let i=0; i<a.length; i++) {
                y+=(x/scale)**i*a[i];
            }
            y*=-scale;
            ctx.lineTo(x+cX,y+cY);
        }
        ctx.stroke();
        
    
    function clearScreen() {
        ctx.clearRect(0,0,w,h);
    }
    }
}
