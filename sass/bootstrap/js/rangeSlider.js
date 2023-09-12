let FirstRange=document.getElementById("range1");
let SecondRange=document.getElementById("range2");
let mainLine=document.querySelector(".main-range-line");
let left=document.querySelector(".left-range");
let right=document.querySelector(".right-range");


window.onload=()=>{
    mainLine.style.width = Number(SecondRange.value)-Number(FirstRange.value) + "%";
    mainLine.style.left=Number(FirstRange.value)+"%";

    mainLine.style.right=Number(SecondRange) + "%";
}
FirstRange.addEventListener("input",()=>{
    mainLine.style.width = Number(SecondRange.value)-Number(FirstRange.value) + "%";
   mainLine.style.left=Number(FirstRange.value)+"%"
//    console.log(mainLine.style.left);
//    console.log(FirstRange.value);
})

SecondRange.addEventListener("input",()=>{
    mainLine.style.width = Number(SecondRange.value)-Number(FirstRange.value) + "%";
    mainLine.style.right=Number(SecondRange) + "%";
    // console.log(mainLine.style.right);
    // console.log(SecondRange.value);
})
