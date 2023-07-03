let count=0;
let element=document.getElementById("count");
let msg=document.getElementById("message");
let save=document.getElementById("save")

function increment(){
      
    count++;
    if(count<=0){
        msg.innerHTML="Person Entered"
        count++;
        element.innerHTML=count;
    }
    else{
        msg.innerHTML="Person Entered"
    element.innerHTML=count;
    }
}
function decrement(){
    
    
    if(count<=0){
         msg.innerHTML="No person remaining"
        element.innerHTML=0;
    }
    else{
        count--;
        msg.innerHTML="Person Leaved"
    element.innerHTML=count;
    }
    
}
function zero(){
    if(count<=0){
        msg.innerHTML="Count already zero"
    }
    else{
    msg.innerHTML="Count Restored"
    count=0;
    element.innerHTML=count;
    }
}
function savedata(){
    if(count!=0){
    let countdata=count + " - ";
    save.innerText+=countdata
    
    }
    element.textContent=0;
    count=0;
}