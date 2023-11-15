let hour=document.getElementById('Hours')
let min=document.getElementById('Mins')
let sec=document.getElementById('Secs')


function time(){
    let n=new Date();
    let h=n.getHours();
    // console.log(h);
    hour.innerHTML=h;
    hour.style.color="red";

    let m=n.getMinutes();
    // console.log(m);
    min.innerHTML=m;
    min.style.color="blue";

    let s=n.getSeconds();
    // console.log(s);
    sec.innerHTML=s;
    sec.style.color="yellow";
    
    let amp=document.getElementById('noon')
   
    if(h>12){
        amp.innerHTML="PM";
        amp.style.color="black";
        
    }
    else{
        amp.innerHTML="AM";
        amp.style.color="white";
    }
}
setInterval(time,1000)