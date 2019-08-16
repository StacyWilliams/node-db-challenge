

const express = require("express");
const helmet = require("helmet");
const router= require('./projects/projects-router')
const server = express();
server.use(helmet());
server.use('/', router)

server.get("/", (req, res) => {
  res.status(200).json({ message: "It's working!!"});
});

module.exports = server;