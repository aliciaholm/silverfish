'use strict';

const nodemailer = require('nodemailer');
const fs = require('fs');

fs.readFile('testemail.html', {encoding: 'utf-8'}, function (err, data) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: "marion.silver19@gmail.com",
      pass: "YujQuemhibagye4"
    }
  });

  transporter.sendMail({
    from: 'alicia.holm@gmx.com',
    to: 'alicia.holm83@gmail.com',
    subject: 'New sign-in from Chrome on Windows',
    html: data
  })
})
