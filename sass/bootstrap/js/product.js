let minus=document.querySelector(".minus-btn");
let plus=document.querySelector(".plus-btn");
let values=document.querySelector(".plus-minus");
plus.addEventListener("click",function(){
    values.textContent++
})
minus.addEventListener("click",function(){
    if(values.textContent>0){
         values.textContent--;
    }
   
})

let mainImg=document.querySelector(".main-img");
let AllImg=document.querySelectorAll(".All-img");
AllImg.forEach(x=>{
  x.addEventListener("click", function(e){
    mainImg.src=e.target.src;
  })
})
let threeWords=document.querySelectorAll(".three-word-headers div");
let threeText=document.querySelectorAll(".des-info-re div");

threeWords.forEach((x,i)=>{
    x.addEventListener("click",()=>{
        threeWords.forEach(y=>{
            y.classList.remove("active-product");
           
            })
        x.classList.add("active-product");
        threeText.forEach(z=>{
            z.classList.remove("active-product-dis");
            // z[i].classList.add("active-product-dis");
            })
        threeText[i].classList.add("active-product-dis");
    })
})

let moveBorder=document.querySelector(".pos-abs-in-img-div");
let moveBorder1=document.querySelector(".pos-abs-in-img-div1");
let mouseMover=document.querySelector(".big-move-img");

mouseMover.addEventListener("mousemove",(e)=>{
    let X=e.clientX;
    let Y=e.clientY;
    let widthBorder=moveBorder.clientWidth;
    let heightBorder=moveBorder.clientHeight;

    moveBorder.style.top=Y-heightBorder;
    moveBorder1.style.top=Y-heightBorder;
    moveBorder.style.left=X-widthBorder;
    moveBorder1.style.left=X-widthBorder;

    if(moveBorder.style.top<"0px"){
        moveBorder.style.top="0px"; 
    }
    if(moveBorder.style.left<"0px"){
        moveBorder.style.left="0px"; 
    }
    // if(moveBorder.style.top>"540px"){
    //     moveBorder.style.top="240px"; 
    // }
    // if(moveBorder.style.left>"510px"){
    //     moveBorder.style.left="110px"; 
    // }
})