var express = require('express');
var app = express();

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'subbulakshmi15051995@gmail.com',
    pass: 'rmrebldzgkvmvfqn'
  }
});



app.get('/sendEmailNotification', async (req, res) => {
      const mailOptions = {
      from: 'subbulakshmi15051995@gmail.com',
      to: (req.query.To? req.query.To:'subbulakshmi.r@ibm.com'),
      subject: 'Invoice Processor Completion Status',
      text: (req.query.body? req.query.body:'')
    };
      transporter.sendMail(mailOptions, function(error, info){
  if (error) {
 console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    // do something useful
  }
      });
  res.send("mail sent");
    })

var port = 4000;
app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});