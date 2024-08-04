const fs = require("fs")

console.log(fs);


console.log('start');

fs.writeFileSync("murthy.pdf","vishnu name is vishnu murty")

//fs.writeFileSync("vishnu.txt","this is using write file sync")

fs.writeFile("vishnu1txt","this is good practice",()=>{
    console.log('done');
    fs.readFile("murthy.pdf",(error,data)=>{
        console.log(error,data.toString);
        
    })
    
})

fs.appendFile("vishnu","venkara",(e,d)=>{
    console.log(d);
    
})
console.log('stop');
