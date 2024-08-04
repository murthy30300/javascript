console.log("Nukala")

// let boxes = document.getElementsByClassName("box")

// console.log(boxes)

// boxes[2].style.backgroundColor="red"

// document.getElementById("redbox").style.backgroundColor="red"

// document.querySelector(".box").style.backgroundColor="green"

console.log(document.querySelectorAll(".box"))

// document.querySelectorAll(".box").style.backgroundColor = "green";
// //script.js:15 Uncaught 
// TypeError: Cannot set properties of undefined (setting 'backgroundColor')
// at script.js:15:55
// (anonymous)	@	script.js:15

document.querySelectorAll(".box").forEach(e=>{
    // console.log(e)
    e.style.backgroundColor="green"
})

//document.getElementsByTagName("div")