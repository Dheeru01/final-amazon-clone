// Slide Button Function
const leftBtn= document.querySelector(".l-btn");
const rightBtn = document.querySelector(".r-btn");


rightBtn.addEventListener("click",
    function(event){
        const content=document.querySelector(".product-slide");
        content.scrollLeft +=700;
        event.preventDefault();

})
leftBtn.addEventListener("click",
    function(event){
        const content=document.querySelector(".product-slide");
        content.scrollLeft -=700;
        event.preventDefault();

})
const leftBtn1= document.querySelector(".btn-1b");
const rightBtn1 = document.querySelector(".btn-1a");


rightBtn1.addEventListener("click",
    function(event){
        const content=document.querySelector(".product-slide-1");
        content.scrollLeft +=700;
        event.preventDefault();

})
leftBtn1.addEventListener("click",
    function(event){
        const content=document.querySelector(".product-slide-1");
        content.scrollLeft -=700;
        event.preventDefault();

})
