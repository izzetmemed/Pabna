let FirstRange=document.getElementById("range1");
let SecondRange=document.getElementById("range2");
let mainLine=document.querySelector(".main-range-line");
let left=document.querySelector(".left-range");
let right=document.querySelector(".right-range");
FirstRange.addEventListener("input",()=>{
    mainLine.style.width = (100 - (parseFloat(FirstRange.value) + parseFloat(SecondRange.value)))/2+ "%";
   mainLine.style.left=FirstRange.value+"%"
})
SecondRange.addEventListener("input",()=>{
    mainLine.style.width = (100 - (parseFloat(FirstRange.value) + parseFloat(SecondRange.value)))/2+ "%";
    mainLine.style.right=(100 - SecondRange.value) + "%";
})
