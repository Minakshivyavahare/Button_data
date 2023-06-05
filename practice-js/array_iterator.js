//forEach()
// const myNumbers =[1,2,3,5,6]
// myNumbers.forEach (function(item,index,array) {
//     // console.log('index', +index,item);
//     console.log(array);
// })

//map()
// const number =[1,2,3,4,5]
// const result = number.map((number) =>{
//     return number * number;
// })
// console.log(result);

//2
// const names = ["james",'marie','rosa']
// const fullNames = names.map((name) =>{
//     return name + " Smith"
// })
// console.log(fullNames);
   

//filter()
// const numbers=[1,2,3,4,5]

// const lessThan3 = numbers.filter(number => number <3)

// console.log(lessThan3);


//2.
// const numbers =[1,2,3,4,5,55]
// const even = numbers.filter(number => number %2 == 0)
// console.log(even);


//reduce
// const numbers = [1,2,3,4,5,6]
// const sumOfNumber = numbers.reduce((accumulator,currentValue)=>{
//     return accumulator + currentValue;
// },0)

// console.log(sumOfNumber);


//spread
// const q1 = ["jan",'feb',"march"]
// const q2 = ["may","june"]
// const result = [...q1,...q2]
// console.log(result);


//includes
// const fruits =['mango','orange']
// console.log(fruits.includes('mango'));

//keys
// const fruits = ['mango','apple']
// for(let x of keys){

// }
// const keys =fruits.keys();


//indexOf()
// const month =["jan","feb","march"]
// const result = month.lastIndexOf('feb')
// console.log(result);