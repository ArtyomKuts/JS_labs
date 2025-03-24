window.addEventListener('load', main, false);
function main() {
	let var1=0;
	let var2=0;
	let action="";

	number0.onclick=()=>{
		if(display.value=="0")
		{
			display.value=0;
		}
		else 
		{
			display.value+=0;
		}
	}
	
	number1.onclick=()=>{
        if(display.value=="0")
        {
         display.value=1;
	    }
	    else
	    {
	    	display.value+=1;
	    }
	}
  
    number2.onclick=()=>{
	    if(display.value=="0")
	    {
		    display.value=2;
	    }
	    else
	    {
		    display.value+=2;
	    }
    }    

	number3.onclick=()=>{
	    if(display.value=="0")
	    {
		    display.value=3;
	    }
	    else
	    {
		    display.value+=3;
	    }
    }    

	number4.onclick=()=>{
	    if(display.value=="0")
	    {
		    display.value=4;
	    }
	    else
	    {
		    display.value+=4;
	    }
    }    
	
	number5.onclick=()=>{
	    if(display.value=="0")
	    {
		    display.value=5;
	    }
	    else
	    {
		    display.value+=5;
	    }
    }    

	number6.onclick=()=>{
	    if(display.value=="0")
	    {
		    display.value=6;
	    }
	    else
	    {
		    display.value+=6;
	    }
    }    
	number7.onclick=()=>{
	    if(display.value=="0")
	    {
		    display.value=7;
	    }
	    else
	    {
		    display.value+=7;
	    }
    }    

	number8.onclick=()=>{
	    if(display.value=="0")
	    {
		    display.value=8;
	    }
	    else
	    {
		    display.value+=8;
	    }
    }    

	number9.onclick=()=>{
	    if(display.value=="0")
	    {
		    display.value=9;
	    }
	    else
	    {
		    display.value+=9;
	    }
    }    
    plus.onclick=()=>{
		var1=display.value;
		display.value=0;
		action="+"
		console.log(var1);
	}

	equal.onclick=()=>{
		var2=display.value;
		if(action=="+")
		{
			display.value= +var1 + +var2;
        }
        if(action=="-")
		{
			display.value= +var1 - +var2;
        }
		if (action=="*")
		{
			display.value= +var1 * +var2;
		}
		if(action=="/")
		{
			display.value= +var1 / +var2;
		}
		console.log(var1);
		console.log(var2);

	}
	
	
	minus.onclick=()=>{
	    var1=display.value;
	    display.value=0;
	    action="-";
		console.log(var1);
    }

	multiply.onclick=()=>{
		var1=display.value;
		display.value=0;
		action="*";
		console.log(var1);
	}
	
	divide.onclick=()=>{
	    var1=display.value;
		display.value=0;
		action="/";
		console.log(var1);
   }	
    
   unar.onclick=()=>{
    display.value=-display.value;
	console.log(display.value);	
   }
   
   AC.onclick=()=>{
	display.value=0;
	var1=0;
	var2=0;
   }

   point.onclick=()=>{
	if(display.value.indexOf(".")==-1)
	{
	   display.value+=".";
	}
	console.log(var1);
	}
}
