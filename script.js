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
function square(a){
    return a**2;
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
    else if(operator==="square")
        return square(a);
    else 
        return "ERROR";
}
let displayValue=0;
const nums=document.querySelectorAll(".nums");
const operators =document.querySelectorAll(".operators");
const output=document.getElementById("result");
nums.forEach(num=>num.addEventListener("click",updateDisplay));
function updateDisplay(e){
    if(displayValue===0){
        output.textContent=e.target.id;
        displayValue=parseInt(output.textContent);
    }
    else if(displayValue!==0){
        output.textContent=output.textContent+e.target.id;
        displayValue=parseInt(output.textContent);
    }
}