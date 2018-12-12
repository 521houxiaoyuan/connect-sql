var express = require('express');
var router = express.Router();
var userlist = require("./user_api");
/* GET users listing. */
router.post('/api/user', userlist.userlist);

module.exports = router;