function runtimer (x){currTime=50;
    timeout=5000;

    for(i=0;i<11;i++)
    {setTimeout(function(){
        if(currTime==0){
            x.innerHTML=currTime;
alert("Blastoff");
        }else if(currTime<25){
            x.innerHTML="Warning less than 1/2 way to launch, timeleft ="+currTime;
                }
                else{ x.innerHTML=currTime;

                }
       
        currTime=currTime-5;
    },timeout);
    timeout=timeout+5000;



    }
    
    
    
}
function startbuttonclick(){}
function stopbuttonclick(){}




