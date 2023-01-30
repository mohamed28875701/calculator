function add(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b===0)
        return "ERROR";
    return a/b;
}

function operate(operator,a,b){
    if(operator==="+")
        return add(a,b);
    else if(operator==="-")
        return substract(a,b);
    else if(operator==="*")
        return multiply(a,b);
    else if(operator==="/")
        return divide(a,b);
    else 
        return "ERROR";
}
let displayValue=0;
let operand1=0;
let operatorClicked;
const nums=document.querySelectorAll(".nums");
const operators =document.querySelectorAll(".operators");
const equal=document.getElementById("=");
const output=document.getElementById("result");
const clear=document.getElementById("clear");
const del=document.getElementById("back");
const inv=document.getElementById("inv");
const sq=document.getElementById("square");
const dot=document.getElementById("dot");
dot.addEventListener("click",floats);
sq.addEventListener("click",square)
del.addEventListener("click",dele);
clear.addEventListener("click",clearEverything)
nums.forEach(num=>num.addEventListener("click",updateDisplay));
operators.forEach(op=> op.addEventListener("click",calculate));
equal.addEventListener("click",eq);
inv.addEventListener("click",inverse);
function isfloat(n){
    return n%1!==0;
}
function floats(e){
    if(isfloat(parseFloat(output.textContent)))
        e.target.disabled=true;
    else{
        e.target.disabled=false;
        output.textContent=output.textContent+"."

    }
}
function updateDisplay(e){
    if(output.textContent==="0."){
        output.textContent=output.textContent+e.target.id;
        displayValue=Math.round(parseFloat(output.textContent)*100)/100;
    }
    else if(displayValue===0){
        output.textContent=e.target.id;
        displayValue=Math.round(parseFloat(output.textContent)*100)/100;
    }
    else if(displayValue!==0){
        output.textContent=output.textContent+e.target.id;
        displayValue=Math.round(parseFloat(output.textContent)*100)/100;
    }
}
function dele(){
    if(output.textContent.length===1){
        output.textContent=0;
        displayValue=Math.round(parseFloat(output.textContent)*100)/100;
    }
    else{
        output.textContent=output.textContent.substring(0,output.textContent.length-1);
        displayValue=Math.round(parseFloat(output.textContent)*100)/100;
    }
    
}
function clearEverything(){
    displayValue=0;
    output.textContent=0;
    operatorClicked=undefined;
    operand1=0;
}
function calculate(e){
    
   if(operatorClicked===undefined){
    operand1=displayValue;
    displayValue=0;
    operatorClicked=e.target.id;
    output.textContent=0;
    
   }
   else{
    operand1=operate(operatorClicked,operand1,displayValue);
    
    displayValue=0;
    operatorClicked=e.target.id;
    output.textContent=0;
    
   }
}
function eq(){
    output.textContent=Math.round(operate(operatorClicked,operand1,displayValue)*100)/100;
    
}
function square(){
    output.textContent=output.textContent**2;
    displayValue=parseFloat(output.textContent);
    operand1=0;
    operatorClicked=undefined;
}
function inverse(){
    output.textContent=1/output.textContent;
    displayValue=parseFloat(output.textContent);
}