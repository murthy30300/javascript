const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')





f
const app = express()
const port = 3010

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
  console.log('this is get request')
  res.send("hello get")
}).post('/',(req,res)=>{
    console.log("this is post request");
    res.send('hello post')
    
})

app.put('/',(req,res)=>{
    console.log('hey its a put requet');
    res.send('hello put')
})

app.get("/index",(req,res)=>{
    console.log('this is index');
    res.sendFile('templates/index.html',{root:__dirname})
    
})

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harry", "jerry"] })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})