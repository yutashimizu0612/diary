const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// routes
const authRouter = require('./routes/auth');

const app = express();
require('dotenv').config();

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/api', authRouter);

app.get('/', (req, res) => {
  res.send('api is started.');
});

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`Server is started on port ${port}.`);
});
