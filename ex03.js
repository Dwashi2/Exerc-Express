const express = require('express')
const server = express()

server.use('/api', function(req,res,next){
    console.log('init')
    next()
    console.log('end')
})

server.use('/api', function(res,req){
    console.log('Resp')
    res.setEncoding("<h1>Hi API</h1>")
})

server.listen(3000, () => console.log('Exec...'))
