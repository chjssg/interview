var express = require('express')
var router = express.Router()
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 1337,
    user     : 'root',
    password : '123',
    database : 'users'
});

connection.connect();

router.post('/login', function(req, res) {
    console.log(req.body)
    connection.query('select * from users where name = ? and password =?;', [req.body.name, req.body.password], function(err, result) {
        if (err) {
            res.send({
                errorno: 1,
                errormsg: '登录失败',
                data: results
            })
            throw err;
        };
        res.send({
            errorno: 0,
            errormsg: '成功',
            data: results
        })
    })
})

router.post('/regisiter', function(req, res) {
    console.log(req.body)
    connection.query('insert ?,? to users;', [req.body.name, req.body.password], function(err, result) {
        if (err) {
            res.send({
                errorno: 1,
                errormsg: '注册失败',
                data: results
            })
            throw err;
        };
        res.send({
            errorno: 0,
            errormsg: '注册成功',
            data: results
        })
    })
})

module.exports = router;