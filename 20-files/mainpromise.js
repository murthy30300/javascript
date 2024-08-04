import fs from "fs/promises"

let a= await fs.readFile("murthy.pdf")

let b = await fs.appendFile("murthy.pdf","\n\n\n\n\nthis is written in promise")

console.log(a.toString(),b);
