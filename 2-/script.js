console.log("Javascript variables, data types of objects");
var a = 5;
a = a + 1;
var b = 6;
var c = "Murthy";

// console.log(a + b + 8);
// console.log(typeof a, typeof b, typeof c)
{
    let a = 99;
    console.log("In block scoped" + a);
}
console.log("out of scope" + a);
const a1 = 6;
// a=a+11; not allowed
console.log(1);

let x = "venkat anna";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);
//Objects
let o = {
    " name": "venkata murthy",
    "job role": 5600,


}

console.log(o)
o.salary = "5cr";
console.log(o);