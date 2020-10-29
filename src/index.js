const express = require('express');
const morgan = require('morgan');

const apiRouter = require('./routes')

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/', apiRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
