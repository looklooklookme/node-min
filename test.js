var express = require('express');
var app = express();
var bodyParse = require('body-parser');
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(bodyParse.urlencoded({
    extended:false
}));

//处理根目录的get请求
app.get('/',function (req,res) {
    res.sendfile('public/main.html');

});

//处理login的get请求
app.get('/add',function (req,res) {
    res.sendfile('public/add.html');
});

//处理login的post请求
app.post('/login',function(req,res){
    name = req.body.name;
    pwd = req.body.pwd;
    console.log(name+'--'+pwd);
    res.status(200).send(name+'--'+pwd);
    
})

//监听3000端口
var server = app.listen(3000);