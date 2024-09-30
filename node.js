
let panels = document.querySelectorAll(".panel");

panels.forEach((panel)=>{
    panel.addEventListener("click", ()=>{
        removeClassList()
        panel.classList.add("active");

    })
})


let removeClassList=()=>{
    panels.forEach((item)=>{
        item.classList.remove("active")
    })
}