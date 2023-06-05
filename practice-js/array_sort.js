//sort
// const fruits = ["Banana","Orange","Apple"]
// fruits.sort()
// console.log(fruits);

//reverse()
// const fruits =["apple","banana","mango"]
// fruits.reverse()
// console.log(fruits);

//Compare function
// const number = [2,5,100,4]
// const sortedNumbers = number.sort ((a,b) =>{
//     return a-b
// })
//  console.log(sortedNumbers);



//array of object
 const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  const sortedCars = cars.sort((a,b) =>{
    return a.year-b.year
  })
  console.log(sortedCars);