const express = require('express')
const helmet = require('helmet')

const dishesRouter = require('../dishes/dishesRouter')

const server = express();

server.use(helmet());
server.use(express.json())

server.use('/api/dishes', dishesRouter)


server.get('/', (req, res) => {
    res.status(200).json({ hello: "whoa!"})
})

module.exports = server