const express = require('express')
const server = express()

server.route('/clientes')
    .get((req, res) => res.send('lista de cliente'))
    .post((res, req) => res.send("Novo cliente"))
    .put((res, req) => res.send("altera cliente"))
    .delete((req, res) => res.send("Remove cliente"))

server.listen(3000, () => console.log('Exec...'))
