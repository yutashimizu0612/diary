const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('api is started.');
});

app.listen(5000, () => {
  console.log('Server is started.');
});
