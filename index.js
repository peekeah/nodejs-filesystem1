const express = require('express');
const logRouter = require('./router/log');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// router
app.use('/', logRouter);

app.listen(3001);