// let obj = {
//     a:1,
//     b:"Harry"
// }
// console.log(obj);

// let animal = {
//     eats:true
// };

// let rabbit = {
//     jumps:true
// };

// rabbit.__proto__= animal;


class animal{
    constructor(){
        console.log('Object is created........');
    }
    eats(){
        console.log('Eating......');
        
    }
    jumps(){
        console.log('Jumping japang.......');
        
    }
}

let a = new animal();

console.log(a);

