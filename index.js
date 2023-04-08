const express = require('express')
const http = require("http")
const cors = require("cors");
const fs = require("fs")
const app = express()
app.use(cors())
const port = process.env.PORT || 3000;
const apiData = require("./userdata.json");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile(`${__dirname}/userdata.json`, "utf-8", (err, data) => {
      console.log(data);
      res.end(data)
    })
  }
  else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1> 404 erroe pages. Page doesnt exist </h1>")
  }
})


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/data', (req, res) => {
//   res.send(apiData)
// })

server.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
})