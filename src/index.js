const express = require('express');
const morgan = require('morgan');
require('dotenv').config()

const apiRouter = require('./routes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/', apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
