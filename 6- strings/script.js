console.log("This is Strings")
let a="HarryPoetter";
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a.length)

let fname = "vishnu"
let lname = "murthy"
console.log("My first name is "+fname+" and his last name is "+lname)

//template literals

console.log(`My first name is ${fname} and last name is ${lname}`)

c = "muRthy"

console.log(c.toUpperCase())
console.log(c.toLowerCase())

console.log(c.length)
console.log(c.slice(1,4))

d="vishnuvishnuvis"
console.log(d.replace("vi","po"))
//poshnuvishnuvis
console.log(d.concat(a,"Aishu","sandhya","sarah"))

//to remove white space
naam = "    vishnu"
nanba = "  venkat"
nanbi = "aishwariya"
kutti = naam.concat(nanbi,"Yes they get married soon")
console.log(kutti)
console.log(kutti.trim())