let frogA = document.getElementById("frogA");
let frogB = document.getElementById("frogB");
let frogC = document.getElementById("frogC");
let frogD = document.getElementById("frogD");
let pond = document.getElementById("pond");

///----------------------------------------- Solution of the teacher : 
function modificationFlex(direction, align) {
    pond.style.flexDirection = direction;
    pond.style.alignItems = align;
}

frogB.addEventListener("click", function(){
    modificationFlex("column", "flex-start")
    // pond.style.flexDirection = "column";
    // pond.style.alignItems = "flex-start";
})

frogC.addEventListener("click", function () {
    modificationFlex("row-reverse", "flex-end")
})

frogD.addEventListener("click", function () {
    modificationFlex("column-reverse", "flex-end")
})


frogA.addEventListener("click", function () {
    modificationFlex("row", "flex-start")
})


///----------------------------------------- my solution :
// frogB.addEventListener("click", function () {
//     pond.style.flexDirection = "column";
//     pond.style.alignItems = "flex-start";
// })

// frogA.addEventListener("click", function () {
//     pond.style.flexDirection = "row";
//     pond.style.alignItems = "flex-start";
// })

// frogC.addEventListener("click", function () {
//     pond.style.alignItems = "flex-end";
//     pond.style.flexDirection = "row-reverse";
// })

// frogD.addEventListener("click", function () {
//     pond.style.flexDirection = "column-reverse";
//     pond.style.alignItems = "flex-end";
// })


// ///////////////////////// ----- colors
// frogA.addEventListener("click", function () {
//     frogA.style.backgroundColor = "whitesmoke";
//     frogB.style.backgroundColor = "crimson";
//     frogC.style.backgroundColor = "green";
//     frogD.style.backgroundColor = "purple";
// })

// frogB.addEventListener("click", function () {
//     frogA.style.backgroundColor = "crimson";
//     frogB.style.backgroundColor = "crimson";
//     frogC.style.backgroundColor = "crimson";
//     frogD.style.backgroundColor = "crimson";
// })

// frogC.addEventListener("click", function () {
//     frogA.style.backgroundColor = "green";
//     frogB.style.backgroundColor = "green";
//     frogC.style.backgroundColor = "green";
//     frogD.style.backgroundColor = "green";
// })

// frogD.addEventListener("click", function () {
//     frogA.style.backgroundColor = "purple";
//     frogB.style.backgroundColor = "purple";
//     frogC.style.backgroundColor = "purple";
//     frogD.style.backgroundColor = "purple";
// })

