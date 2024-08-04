console.log('This is promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
       setTimeout(() => {
            console.log('Yes I am done');
            resolve("vishnu")
        }, 3000);
    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("2No random number was not supporting you")
    }
    else {
       setTimeout(() => {
            console.log('2Yes I am done');
            resolve("2vishnu")
        }, 3000);
    }
})
/*
prom1.then((a) => {
    console.log(a);

}).catch((err)=>{
console.log(err)
})*/
let p3 = Promise.all([prom1,prom2])
p3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err)
})
