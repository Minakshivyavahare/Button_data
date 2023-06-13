//A callback is a function passed as an argument to another function.
//we pass function not call a function addition not addition()

const calculate = (a,b,operation) =>{
    return operation(a,b);
}

//method 1
const addition = calculate(3,4, function(num1,num2){
    return num1 + num2
})

console.log(addition);

//method 2
const subtraction = (a,b) => a-b;

const subResult = calculate(8,3,subtraction)
console.log(subResult);

//method 3
function multiply(a,b){
    return a *b;
}
const mulResult = calculate(4,5,multiply)
console.log(mulResult);



//callback example with method
const a = [4,1,6,-2,-5,3,2,-8,6,7]
const firstNeg = (num) =>{
    return num < 0; 
}

const result = a.find(firstNeg)
console.log(result);