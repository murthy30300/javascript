// console.log("Functions-by ram")
// console.log("Functions-by murthy")
// console.log("Functions-vishnu")
// console.log("Functions-venkat")
// console.log("Functions-ranjith")

function nice(name){
    console.log("Functions- by"+name+"is very good");
    console.log(name+"writes good functions");
    console.log(name+"writes bad functions");
    console.log(name+"writes reusable functions");
}
nice("murthyh")

function sum(a, b){
    // console.log(a+b);
    return a+b;

}
res1 = sum(4,5);

res2=sum(3,9);
console.log(res1);
console.log(res2);

const func1 =(x)=>{
    console.log("I am an arrow FUNCTION",x);
}

func1(89);
func1(11)