//get api  in get method bydefault it uses get method
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())
// .then((data) => console.log(data))

//post api
const data = {
    title:"this is title",
    body:"this is post body",
    userId: 2
}
fetch("https://jsonplaceholder.typicode.com/posts",{
   method:"POST",
   body: JSON.stringify(data),
   headers:{
    "Content-type":"application/json"
   }
}).then(res =>res.json())
.then((data) => console.log(data))