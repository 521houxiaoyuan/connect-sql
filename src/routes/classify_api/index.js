var query = require("../../mysql");

var sql = require("../../mysql/mysql");
var uuid = require("node-uuid");

//icon_list表格
var icon_list = function(req, res, next) {

    query(sql.SELECT_ICON_LIST, function(err, resluts) {
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: resluts })
        }
    })
}

//添加分类表格
var classify = function(req, res, next) {
    var params = req.body;

    cid = uuid.v1(),
        uid = params.uid,
        type = params.type,
        c_name = params.c_name,
        c_icon = params.c_icon;
    query(sql.ADD_CLASSIFY, [cid, uid, type, c_name, c_icon], function(err, resluts) {
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: "添加成功" })
        }
    })
}

//查找分类表格
var selectClassify = function(req, res, next) {
    var uid = req.query.uid;
    console.log(uid)
    query(sql.SELECT_CLASSIFY, [uid], function(err, resluts) {
        console.log(err);
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: resluts })
        }
    })
}

//查找表中的数据是否存在
var selectIshas = function(req, res, next) {
    var uid = req.query.uid,
        c_name = req.query.c_name,
        type = req.query.type;
    query(sql.SELECT_ISHAS, [uid, c_name, type], function(err, resluts) {
        console.log(err)
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: resluts })
        }
    })
}
module.exports = {
    icon_list: icon_list,
    classify: classify,
    selectClassify: selectClassify,
    selectIshas: selectIshas,
}