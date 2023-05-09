
let count = 1
const button = document.getElementById("clickButton")
const container = document.getElementById("my-container")

button.addEventListener("click", () => {

    count = count * 2;
    for (let i = 1; i <= count; i++) {
    
        const btn = document.createElement("button");
        btn.classList.add("btn1")
        show.addEventListener("click", ()=>{
            const btn2 = document.createElement("button");
        })
        
        
        
        
        container.appendChild(btn)
        
        
        
    }

  
})


