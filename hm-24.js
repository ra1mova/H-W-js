class Calculator{
    constructor(num1, num2, mSign){
        this.num1 = parseInt(num1),
        this.num2 = parseInt(num2),
        this.mSign = mSign
    }
    adding(){
        console.log(this.num1+this.num2)
    }
    subtraction(){
        console.log(this.num1-this.num2)
    }
    multiplication(){
        console.log(this.num1*this.num2)
    }
    dividing(){
        console.log(this.num1/this.num2)
    }
}
mathSign = prompt("Enter math sign")
firstNum = prompt("Enter first number")
secondNum = prompt("Enter second number")
task = new Calculator(firstNum, secondNum, mathSign)

if(mathSign=='+'){
    task.adding()
}else if(mathSign=='-'){
    task.subtraction()
}else if(mathSign=='*'){
    task.multiplication()
}else{
    task.dividing()
}