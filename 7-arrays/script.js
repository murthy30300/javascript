let arr = [1, 2, 3, 4, 5, 6]
console.log(typeof arr)
// INdex =[0,1,2,3,4,5]
console.log(arr)
console.log(arr.length)

//array is mutable, strings are immutable

console.log(arr.toString())
console.log(typeof arr)
console.log(arr.join("t "))

// console.log(arr.pop())
arr.push(777)
console.log(arr)
//shift()

console.log(arr.shift())
console.log(arr.unshift())

let arr2 = [9, 3, 55, 55, 98]

ar3 = arr.concat(arr2)
console.log(ar3)

console.log(arr.splice(1,4))

arr.splice(1,4,222,333,444,555)
console.log(arr)