const bar=document.querySelector(".bar");
const navbar=document.querySelector(".navbar");

bar.addEventListener("click",()=>{
    console.log("clicked")
    navbar.classList.toggle("open");
    
})

let cloth=document.querySelectorAll(".cloth");

cloth.forEach((box)=>{
    // console.log(box);
    box.addEventListener("click",()=>{
        let cart=box.querySelectorAll(".cart");

        cart.forEach((pro)=>{
            pro.classList.toggle("show");
            let procart=pro.querySelector(".procart");
        })

    })
})