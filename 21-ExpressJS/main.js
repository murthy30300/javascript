// const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3070;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
const express = require('express')
const app = express()
const port = 3010
//with express we can encrypt backend source code

//app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/blog/:slug',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    
    res.send(`hello ${req.params.slug}`)
    
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})