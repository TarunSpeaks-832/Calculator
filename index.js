const inputdisplay=document.getElementById("inputdisplay");



function appendoperator(val){
   inputdisplay.append(val);
}

function Evaluate(){
    try{
        let txt=inputdisplay.textContent.toString();
    let result=eval(txt);
    inputdisplay.textContent=result;
    }
    catch(error){
        inputdisplay.textContent="Error";
    }
}

function clearcontent(){
    inputdisplay.textContent="";
}

function deletefun() {
  let inpu = inputdisplay.textContent.toString();
  let newinpu = inpu.slice(0, -1);
  inputdisplay.textContent = newinpu;
}