const nodemailer = require('nodemailer');
const config = require('../config/mail.config.json');

const transporter = nodemailer.createTransport({
  service: config.service,
  auth: {
    user: config.mail,
    pass: config.password
  }
});

let sendMail = (recipient, subject, message) => {
  var mailOptions = {
    from: config.mail,
    to: recipient,
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = {
  "sendMail": sendMail
}