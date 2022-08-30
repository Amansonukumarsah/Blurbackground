const container =document.querySelector('.container');
const popcontainer=document.querySelector('.popcontainer');
const join=document.querySelector('.join');
const discard=document.querySelector('.discard');

join.addEventListener("click",()=>{
    container.classList.add("active");
    popcontainer.classList.remove("active");
});

discard.addEventListener("click",()=>{
    container.classList.remove("active");
    popcontainer.classList.add("active");
})
