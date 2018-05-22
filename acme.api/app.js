const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config/api.config.json');
const mailing = require('./routes/mails');

const app = express();

app.get('/api', (req, res) => {
  res.send('acme solutions api!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/api/v1/mails', mailing);


app.listen(config.port, config.url, () => {
  console.log('Example app listening on port ' + config.port + '!');
});