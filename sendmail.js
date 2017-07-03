'use strict';

const nodemailer = require('nodemailer');
const fs = require('fs');

fs.readFile('testemail.html', {encoding: 'utf-8'}, function (err, data) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: "",
      pass: ""
    }
  });

  transporter.sendMail({
    from: '',
    to: '',
    subject: 'New sign-in from Chrome on Windows',
    html: data
  })
})
