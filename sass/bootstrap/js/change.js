let Icon=document.querySelectorAll(".icon-click");
let block=document.querySelectorAll(".cart-section-dis");

Icon.forEach(element => { 
    element.addEventListener("click",(e)=>{
       Icon.forEach(x=>{
        x.classList.remove("active-click");
       }) 
        e.target.classList.add("active-click");
       if(e.target.classList.value.includes("fa-list-ul")){
        block[0].classList.remove("active-section");
        block[1].classList.add("active-section");
        console.log(block[0].classList);
        console.log(block[1].classList);
        
       }
       else{
        block[1].classList.remove("active-section");
        block[0].classList.add("active-section");
       }
    })
});

let moverHeader = document.querySelector(".header-mover-div");
let smallDiv = document.querySelector(".main-mover-div");
let forHeight = document.querySelector(".main-mover-div div");
let CountDiv = document.querySelectorAll(".main-mover-div .col-12");
let startX;
let xTranslate = 0;


moverHeader.addEventListener("mousedown", (event) => {
    startX = event.clientX;
    event.preventDefault();
});

moverHeader.addEventListener("mouseup", (e) => {
    var endX = e.clientX;
    var lastX =Math.floor((startX -endX)/234)*forHeight.clientWidth;
    xTranslate += lastX;
    smallDiv.style.transform = `translateX(${-xTranslate}px)`;
    let widthEnd= CountDiv.length*forHeight.clientWidth-smallDiv.clientWidth; 
    setTimeout(()=>{
if (xTranslate < -1) {
            xTranslate = 0;
            smallDiv.style.transform = `translateX(0px)`;
        } else if (xTranslate > widthEnd) {
            xTranslate = widthEnd;
            smallDiv.style.transform = `translateX(${-xTranslate}px)`;
        }
    }, 300)
      
});
window.onresize=()=>{
    let resizeX=Math.floor(xTranslate/forHeight.clientWidth)*forHeight.clientWidth;
    smallDiv.style.transform = `translateX(${-resizeX}px)`;
}
  
     
