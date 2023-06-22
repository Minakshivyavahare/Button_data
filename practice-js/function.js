// function sumOfTwoNumber(a,b){
//     let sum = a + b;
//     console.log("sum is " +sum);
//     // return sum;
// }

// const a = 4;
// const b = 8;
// const result = sumOfTwoNumber(a,b)
// console.log("returned result "+result);


//function expression
// const square = function(num){
//     return num * num;
// }
// console.log(square(9));


//nested functions

// function addSquare(a,b){

//    const sa = square(a)
//    const sb = square(b)

//     function square(num){

//         return num * num;
//     }
//     return sa+sb;
// }
// console.log(addSquare(3,4));


//self invoked function

(function() {
    let x = "hello";
    console.log(x);
})()