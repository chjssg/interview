
var express = require('express');
var app = express()
var fs = require('fs')
var path = require('path')


const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var router = require('./routers/index')
app.use('/api', router)

app.use('/', express.static(path.join(__dirname, '../loginFE')))

app.listen(3000, function() {
    console.log('正在监听3000端口')
})


