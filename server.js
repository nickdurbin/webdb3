const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

server.get('/', (req, res) => {
  res.send("<h2>I am your sever and I see everything.</h2>")
})

server.use((req, res, next) => {
  res.status(404).json({ message: "You bit off more than you can chew. Try again."})
})

server.use((err, req, res, next) => {
  res.status(500).json({ message: "Well, you caught me. You caught the Tater! We messed up."})
})

module.exports = server;