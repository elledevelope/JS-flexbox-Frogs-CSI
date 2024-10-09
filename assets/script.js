let frogA = document.getElementById("frogA");
let frogB = document.getElementById("frogB");
let frogC = document.getElementById("frogC");
let frogD = document.getElementById("frogD");
let posX = 0, posY = 0; 
let pond = document.getElementById("pond");


frogB.addEventListener("click", function () {
    pond.style.flexDirection = "column";
    pond.style.alignItems = "flex-start";
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


///////////////////////// ----- colors
frogA.addEventListener("click", function () {
    frogA.style.backgroundColor = "whitesmoke";
    frogB.style.backgroundColor = "crimson";
    frogC.style.backgroundColor = "green";
    frogD.style.backgroundColor = "purple";
})

frogB.addEventListener("click", function () {
    frogA.style.backgroundColor = "crimson";
    frogB.style.backgroundColor = "crimson";
    frogC.style.backgroundColor = "crimson";
    frogD.style.backgroundColor = "crimson";
})

frogC.addEventListener("click", function () {
    frogA.style.backgroundColor = "green";
    frogB.style.backgroundColor = "green";
    frogC.style.backgroundColor = "green";
    frogD.style.backgroundColor = "green";
})

frogD.addEventListener("click", function () {
    frogA.style.backgroundColor = "purple";
    frogB.style.backgroundColor = "purple";
    frogC.style.backgroundColor = "purple";
    frogD.style.backgroundColor = "purple";
})

