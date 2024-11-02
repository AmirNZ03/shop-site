let vc=document.querySelector(".showbags")
let bo=document.getElementById("alm")
bo.addEventListener("mouseenter",()=>{
vc.classList.add("showbag")
vc.style.visibility="visible"
})
bo.addEventListener("mouseleave",()=>{
    vc.classList.remove("showbag")
    vc.style.visibility="hidden"
    })

    vc.addEventListener("mouseenter",()=>{
        vc.classList.add("showbag")
        vc.style.visibility="visible"
        })
        vc.addEventListener("mouseleave",()=>{
            vc.classList.remove("showbag")
            vc.style.visibility="hidden"
            })

    