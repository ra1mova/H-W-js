let input1=document.createElement('input') 
 
let operators  = document.createElement('input') 
operators.innerHTML='+' 
 
let input2=document.createElement('input') 
 
let equal=document.createElement('span') 
equal.innerHTML='=' 
 
let result=document.createElement('span') 
result.innerHTML='result' 
 
 
 
 
document.body.append(input1) 
document.body.append(operators) 
document.body.append(input2) 
document.body.append(equal) 
document.body.append(result) 
 
const getResult=()=>{ 
    let sum = 0 
    switch (operators.value) { 
        case '+': 
            sum=Number(input1.value) + Number(input2.value) 
            break; 
        case '-': 
            sum= input1.value - input2.value 
        break; 
        case '*': 
            sum= input1.value * input2.value 
            break 
            case '/': 
                sum= input1.value / input2.value; 
                break; 
        default: 
            sum = 'nothing to calculate' 
            break; 
    } 
    return result.innerHTML=sum 
} 
equal.addEventListener('click',getResult) 