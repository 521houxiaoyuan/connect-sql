var express = require('express');
var router = express.Router();
var bill_list = require("./bill_api");
/* GET users listing. */
router.post('/api/bill_list', bill_list.bill_list);
router.get("/api/select_bill", bill_list.billclassify);
router.get("/api/deletebill", bill_list.deleteBill);
module.exports = router;