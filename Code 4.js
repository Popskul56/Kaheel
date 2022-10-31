var innervalid=new Array();

function runtimer (x){currTime=50;
    timeout=5000;

    for(i=0;i<11;i++)
    {
        innervalid[i]=setTimeout(function(){
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
function startbuttonclick(){
    document.getElementById("Btnstart").disabled=true;
    document.getElementById("Btnstop").disabled=false;
    x=document.getElementById("displaycoundown");
runtimer (x);

}
function stopbuttonclick(){
    document.getElementById("Btnstart").disabled=false;
    document.getElementById("Btnstop").disabled=true;


    for(i=0;i<11;i++){
        clearTimeout(innervalid[i]);

    }

}

function getuserinput(){
    firstname =" "
    lastname =" "
    fullname =""

do{ 
    firstname= prompt("firstname:");
    lastname = prompt("lastname:");

    fullname = firstname + " " + lastname;

    if ( fullname.length > 20){
        alert("Please enter shorter names (less than 20 characters). Length entered: " + fullname.length)
    }
}while(fullname.length > 20);

do{
    badgenumber = prompt("Please enter your badgenumber");

    if (badgenumber > 999){
        alert("Are you sre that is your actual badgenumber?");
    }



}while (badgenumber > 999);



}





