let arr = [1,13,5,7,11,33]

// let newarr = []

// for(let i =0; i<arr.length;i++)
//     {
//         const ele = arr[i];
//         newarr.push(ele**2)

//     }
let newarr=arr.map((e,index,array)=>{
    return e**2;
})

console.log(newarr)

const greThanTen = (e)=>{
    if(e>10)
        return true;
    return false;
}
console.log(arr.filter(greThanTen))

let arr2 = [1,2,3,4,5,6]

const red =(a,b)=>{
    return a*b
}

console.log(arr2.reduce(red))