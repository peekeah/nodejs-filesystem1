const express = require("express");
const router = express.Router();
const { createLog } = require("../module/createLog");
const { getLog } = require("../module/getLog");

router.get('/create', createLog);
router.get('/get', getLog);

module.exports = router ;
