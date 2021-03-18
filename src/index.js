var http = require("http")

var express = require("express")
const { response } = require("express")

const app = express()

app.listen(8082)

app.use("/", (request, response) => {
    response.send("Hello world!")
})

console.log('Server running at http://127.0.0.1:8082/');