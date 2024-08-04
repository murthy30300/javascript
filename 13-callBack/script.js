// console.log('murthy is a coder')//1
// console.log('Vishnu is a cader')//2

// setTimeout(()=>{
//     console.log("This statement inside set timeout")//4
// },2000)
// //if we use 
// setTimeout(()=>{
//     console.log("This statement inside set timeout")//4
// },0 )
// console.log("End")//3

// const loadScript = (src, callback)=>{
//     let sc = document.createElement("script")
//     sc.src = src;
//     sc.onload=callback("vishnu");
//     document.head.append(sc)
// }
// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
class monkey extends animal{
    hide(){
        alert('${this.name} hides!')}}
let monke = new monkey("murthy")
monke.run(7);
monke.hide();

class animal{
    run(a){
        alert('${this.a} good one')
    }
}
class Animal {
    constructor(name) {
        this.name = name;
    }

    run(a) {
        alert(`${this.name} runs ${a} meters! Good one!`);
    }
}

class Monkey extends Animal {
    hide() {
        alert(`${this.name} hides!`);
    }
}

let monke = new Monkey("murthy");
monke.run(7);
monke.hide();
