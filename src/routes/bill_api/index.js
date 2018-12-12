var query = require("../../mysql");

var sql = require("../../mysql/mysql");
var uuid = require("node-uuid");

//添加账单
var bill_list = function(req, res, next) {
    var params = req.body,
        bid = uuid.v1(),
        uid = params.uid,
        timer = params.timer,
        cid = params.cid,
        money = params.money;
    console.log(params)

    query(sql.ADD_BILL, [bid, uid, timer, cid, money], function(err, results) {
        // console.log(err)
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: "添加成功" })
        }
    })


}

//查询账单
var billclassify = function(req, res, next) {

        var uid = req.query.uid, //用户
            timer = req.query.timer, //时间
            classify = req.query.classify, //分类["购物"]
            type = req.query.type //1:按年查询账单； 2：按月查询账单
        if (!uid || !timer) {
            res.json({ code: 4, msg: "缺少参数" })
        } else {
            //三元判断
            //classify乱码，先string变parse,再去解码
            if (classify) {
                var target = [];
                classify = JSON.parse(classify);

                classify.forEach((item) => {
                    //解码
                    target.push(decodeURI(item))

                })
                console.log(target);
                var sqls = type == 1 ? sql.SELECT_YEAR_CBILL : sql.SELECT_MONTH_CBILL;

            } else {
                var sqls = type == 1 ? sql.SELECT_YEAR_BILL : sql.SELECT_MONTH_BILL;

            }
            getlist(sqls, target);
        }

        function getlist(sqls, target) {
            query(sqls, [uid, timer, target], function(err, results) {
                if (err) {
                    res.json({ code: 0, msg: err })
                } else {
                    res.json({ code: 1, msg: results })
                }
            })
        }


    }
    //删除账单
var deleteBill = function(req, res, next) {
    var bid = req.query.bid;
    query(sql.DELETE_BILL, [bid], function(err, results) {
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: "删除成功" })
        }
    })

}

module.exports = {
    bill_list: bill_list,
    billclassify: billclassify,
    deleteBill: deleteBill,

}