// set true to select the symbol for one time 
var b= true;

var num1;

function fun1(n,s){
   if (b) {
    num1=n;
    document.getElementById(s).style.boxShadow="greenyellow 0 0 15px";
    document.getElementById(s).style.border=" 5px solid greenyellow";

   } 
//    after selecting a symbols , make it fasle then only this fun not execute again ,to prevent the one than one selection
   b=false;
document.getElementById("r").innerHTML="choosen box ix "+num1;
}

function res() {
    var e=Math.floor(Math.random() * 3) + 1;
    // using random num here we create the id becoz id made by mm1 mm2 formate ,
    // random num is 2 means then it create the "mm"+2= mm2 id and design that id .
    var s1="mm"+e;
    document.getElementById(s1).style.boxShadow="greenyellow 0 0 15px";
    document.getElementById(s1).style.border=" 5px solid greenyellow";
    if(num1==e){
        document.getElementById("re").innerHTML="Game Tie.. ";
    }
    if (num1==1 && e==3) {
        document.getElementById("re").innerHTML="you Won the Game .. ";
        
    }
     if (num1==1 && e==2) {
        document.getElementById("re").innerHTML="you lost the Game .. ";
        
    }
     if (num1==2 && e==1) {
        document.getElementById("re").innerHTML="you  won the Game.. ";
        
    }
     if (num1==2 && e==3) {
        document.getElementById("re").innerHTML="you lost the Game .. ";
        
    }
     if (num1==3 && e==1) {
        document.getElementById("re").innerHTML="you lost the Game .. ";

    }
     if (num1==3 && e==2) {
        document.getElementById("re").innerHTML="you Won the Game .. ";
        
    }
    // after clicking the play button we can change the play button to reload button
    //  changes was made by innerhtml and changing the onlicking value for refresh the page . 
    document.getElementById("but").innerHTML="again ";
    document.getElementById("but").setAttribute('onclick','window.location.reload();');
    
}