const express = require('express');
const router = express.Router();

const studentRouter = require('./student.router');

router.use('/student', studentRouter);

module.exports = router;
