let frogA = document.getElementById("frogA");
let frogB = document.getElementById("frogB");
let frogC = document.getElementById("frogC");
let frogD = document.getElementById("frogD");
let posX = 0, posY = 0; 
let pond = document.getElementById("pond");


frogB.addEventListener("click", function () {
    pond.style.flexDirection = "column";
})

frogA.addEventListener("click", function () {
    pond.style.flexDirection = "row";
    pond.style.alignItems = "flex-start";
})

frogC.addEventListener("click", function () {
    pond.style.alignItems = "flex-end";
    pond.style.flexDirection = "row-reverse";
})

frogD.addEventListener("click", function () {
    pond.style.flexDirection = "column-reverse";
    pond.style.alignItems = "flex-end";
})