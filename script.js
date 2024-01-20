const bar=document.querySelector(".bar");
const navbar=document.querySelector(".navbar");

bar.addEventListener("click",()=>{
    console.log("clicked")
    navbar.classList.toggle("open");
    
})