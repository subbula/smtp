var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'subbulakshmi15051995@gmail.com',
    pass: 'rmrebldzgkvmvfqn'
  }
});




app.post('/sendEmailNotification', async (req, res) => {
      const mailOptions = {
      from: 'subbulakshmi15051995@gmail.com',
      to: (req.body.To? req.body.To:'subbulakshmi.r@ibm.com'),
      subject: (req.body.subject?req.body.subject :'Invoice Processor Completion Status'),
      text: (req.body.msg? req.body.msg:'')
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
