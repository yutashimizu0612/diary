const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('api is started.');
});

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`Server is started on port ${port}.`);
});
