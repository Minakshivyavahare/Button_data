
let count = 1
const button = document.getElementById("clickButton")
const container = document.getElementById("my-container")

button.addEventListener("click", () => {

    count = count * 2;
    for (let i = 1; i <= count; i++) {
    
        const btn = document.createElement("button");
        btn.classList.add("btn1")
        btn.innerText = "show";
        
        container.appendChild(btn)
        
    }


})