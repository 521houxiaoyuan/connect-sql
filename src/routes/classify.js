var express = require('express');
var router = express.Router();
var classify = require("./classify_api");
/* GET home page. */
router.get('/api/icon_list', classify.icon_list);
router.post('/api/classify', classify.classify);
router.get("/api/selectClassify", classify.selectClassify);
router.get("/api/selectIshas", classify.selectIshas);
module.exports = router;