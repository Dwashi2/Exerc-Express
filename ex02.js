const express = require('express')
const server = express()

server.get('/', function(req,res,next){
    console.log('init')
    next()
    console.log('end')
})

server.get('/', function(res,req){
    console.log('Resp')
    res.setEncoding("<h1>Hi Express</h1>")
})

server.listen(3000, () => console.log('Exec...'))
