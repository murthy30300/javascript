console.log("Loops");
let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)
/* for;for in;for of;
while;do-while*/

//for loop
for (let index = 0; index < 10; index++) {
    console.log(a + index);
}

let obj = {
    name: "Vishnu",
    role: "programmer",
    company: "Backender Antar ra babu"
}
for (const key in obj) {
    const element = obj[key];
    console.log(key, element);
}
for (const c of "murthy") {
    console.log("\t" + c)
}

let i = 0;

// while (i < 68) {
//     console.log(i);
//     i++;
// }

do{
    console.log(i);
    i++;
}while(i<90)