let string =" "
let button = document.querySelectorAll(".buttons")

button.forEach((btn)=> {
    btn.addEventListener("click", (e)=>{
        if(e.target.innerHTML === "="){
            string = eval(string)
            document.querySelector("input").value = string
        }
        else if(e.target.innerHTML === "C"){
            string =""
            document.querySelector("input").value = string
        }
        else if(e.target.innerHTML === "Del"){
            string = string.slice(0,-1)
            document.querySelector("input").value = string
        }
        else{
            string = string + e.target.innerHTML
            document.querySelector("input").value = string
        }
    })
})