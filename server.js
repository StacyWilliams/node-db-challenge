const express = require('express');
const helmet = require('helmet');
const server = express();
const router = require('./projects/projects-router.js');

server.use(helmet());
server.use(express.json());
server.use('/', router);

server.get('/', (req, res) => {
    res.status(200).json({ message: "It's working!!"});
    }); //endpoint works


   
module.exports = server;