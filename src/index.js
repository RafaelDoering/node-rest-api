const express = require('express');

const apiRouter = require('./routes')

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
