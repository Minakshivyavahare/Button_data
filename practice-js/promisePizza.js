function getCheese(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const cheese = "🧀"
            
            resolve(cheese)
        },2000)
    })
    
}

function makeDough(cheese){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const dough = cheese + "🍩"
            
            resolve(dough)
        },2000)
    })
    
}

function bakePizza(dough){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const pizza = dough + "🍕"
           
            resolve(pizza)
        },2000)
    })
    
}
//using async await

async function orderPizza(){
    try{
    const cheese = await getCheese();
    console.log("here is the cheese",cheese);
    const dough = await makeDough();
    console.log("here is the dough", dough);
    const pizza  = await bakePizza()
    console.log("here is the pizza", pizza);
    } catch(error){
        console.log(error);
    }
}

orderPizza()

//without async await
// getCheese()
//   .then((cheese) =>{
//     console.log("here is the cheese",cheese);
//     return makeDough(cheese)
//   })
//   .then((dough) =>{
//     console.log("here is the dough", dough);
//     return bakePizza(dough)
//   })
//   .then((pizza) =>{
//     console.log("here is the pizza", pizza);
//   })
//   .catch((data) =>{
//     console.log("error occured",data);
//   })
//   .finally(() =>{
//     console.log("process end");
//   })