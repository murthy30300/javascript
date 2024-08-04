let button = document.getElementById("btn")
//list of all mouse events =https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
button.addEventListener("click",()=>{
   // alert("This button is clicked")
 document.querySelector(".box").innerHTML = "<b>YeaH  YOu were clicked</b> Enjoyyy"
  
})
document.addEventListener("keydown",(e)=>{
    console.log(e, e.key,e.keyCode)
})