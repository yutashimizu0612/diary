const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
// routes
const authRouter = require('./routes/auth');

const app = express();
require('dotenv').config();

// middleware
app.use(express.json());
app.use(morgan('dev'));
if (process.env.NODE_ENV === 'development') {
  app.use(cors({ origin: `http://localhost:3000` }));
}
app.use('/api', authRouter);

app.get('/', (req, res) => {
  res.send('api is started.');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is started on port ${port}.`);
});
