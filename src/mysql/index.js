/*
 * @Author: houxiaoyuan 
 * @Date: 2018-12-08 11:12:50 
 * @Last Modified by: houxiaoyuan
 * @Last Modified time: 2018-12-11 20:29:48
 */
var mysql = require("mysql");

var config = {
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "13784388824",
    database: "lemon",
    connectionLimit: 100,

}

/**
 * 
 * @param {string} sql 
 * @param {array} array 
 * @param {function} fn 
 */
var connection = mysql.createPool(config);

module.exports = function(sql, query, fn) {
    fn = fn ? fn : query;
    query = query || [];
    connection.getConnection((err, connect) => {
        if (err) {
            fn(err)
        } else {
            connect.query(sql, query, function(err, results) {
                connect.release();
                if (err) {
                    fn(err)
                } else {
                    fn(err, results)
                }
            })
        }
    })

}