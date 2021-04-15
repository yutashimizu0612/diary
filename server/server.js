const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// routes
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const accomplishmentRouter = require('./routes/accomplishment');

const app = express();
require('dotenv').config();

// middleware
app.use(express.json());
app.use(morgan('dev'));
if (process.env.NODE_ENV === 'development') {
  app.use(cors({ origin: `http://localhost:3000` }));
}
app.use('/api', authRouter);
app.use('/api', userRouter);
app.use('/api', postRouter);
app.use('/api', accomplishmentRouter);

app.get('/', (req, res) => {
  res.send('api is started.');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is started on port ${port}.`);
});
