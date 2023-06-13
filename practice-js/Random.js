// let x = Math.random()
// console.log(x);

// let x= Math.floor(Math.random() * 10); 0-9
// console.log(x);

// let x = Math.floor(Math.random() * 11)  0-10
// console.log(x);

// let x = Math.floor(Math.random() * 10) + 1; 
// console.log(x);  //1 t0 10


//to generate between limit 

// function getRandomNUmber(min,max){
//     let x = Math.floor(Math.random()  * (max - min)) + min
//     return x;
// }
// console.log(getRandomNUmber(15,25));



//15 to 25 included
function getRandomNUmber(min,max){
    let x = Math.floor(Math.random()  * (max - min+1)) + min
    return x;
}
console.log(getRandomNUmber(15,25));