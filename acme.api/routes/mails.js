const express = require('express');
const mailingSerice = require('../services/mail.service');
const router = express.Router();

router.post('/subscribe', (req, res) => {
  let mail = req.body.mail;

  mailingSerice.sendMail(mail, 'Subscription', 'This is a fake response for your subscription to ACME Solutions. You suck.');

  res.send('Please check your mailbox for the confirmation email.');
});

router.post('/quote', (req, res) => {
  let mail = req.body.mail;
  let name = req.body.name;
  let message = req.body.message;

  mailingSerice.sendMail(mail, 'Quote - ' + name, 'This is the message you send us: [' + message + ']');

  res.send('The quote has been sent to your email.');
});

module.exports = router;