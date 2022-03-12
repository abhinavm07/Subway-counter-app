let counterMan = document.getElementById("count-el");
let count = 0;

function incriment(){
    count+=1;
    counterMan.textContent=count;
}

let prevEnt=document.getElementById("previousEnt");
function save(){
    let countStr =" " + count +" - ";
    console.log(countStr); 
    prevEnt.textContent+= countStr;
    count = 0;
    counterMan.textContent=count;
}






