var query = require("../../mysql");

var sql = require("../../mysql/mysql");

var uuid = require("node-uuid");

var userlist = function(req, res, next) {
    var uid = uuid.v1();

    var nick_name = req.body.nick_name || "";

    query(sql.ADD_USER, [uid, nick_name], function(err, results) {

        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: "添加成功" })
        }
    })
}

module.exports = {
    userlist: userlist,
}