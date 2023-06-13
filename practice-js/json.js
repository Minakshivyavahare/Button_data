// let obj = {
//     name: "minu",
//     age : 20,
//     college:null,
//     subject: ["c","c++","java"]
// }
// let str = JSON.stringify(obj)    //convert to json format
// console.log(obj.name);
// console.log(str.name);      // not working


let json_str = `{"name":"hari","age":20,"subject":["c","c++","java"]}`
let convert = JSON.parse(json_str)
console.log(json_str);
console.log(convert);