
/*
    koa的特点
        Koa 很小，因为没有捆绑中间件
        中间件的功能： 内容协商，缓存清理，代理支持和重定向
        async功能，实现了 “真实” 的中间件

*/
const Koa = require('koa');
var app = new Koa();


if(1){
    app.listen(3000,()=>{
        console.log('the app is listening on 3000')
    });
}else{

    const sslify = require('koa-sslify').default;//http强制HTTPS
    app.use(sslify())
    const https = require('https');//node内置https server
    const fs = require('fs');


    var options = {
        key: fs.readFileSync(process.cwd() + '/src/app/server.pem'),  //私钥文件路径
        cert: fs.readFileSync(process.cwd() + '/src/app/server.pem')  //证书文件路径
    };
    https.createServer(options, app.callback()).listen(3000, () => {
        console.log(`the app is listening https://localhost:3000`)
    });
}



console.log('rancheng love caisujia forever12')

const cors = require('koa2-cors');
app.use(
    cors({
        origin: function(ctx) { //设置允许来自指定域名请求
            return 'http://localhost:9001';
        },
        maxAge: 5, //指定本次预检请求的有效期，单位为秒。
        credentials: true, //是否允许发送Cookie
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法'
        //allowHeaders: ['Content-Type', 'Authorization', 'Accept','x-auth-token'], //设置服务器支持的所有头信息字段
        //exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
    })
);


// logger中间件
var requestLogMiddleWare = require('../middleWare/requestLog')
app.use(requestLogMiddleWare);



const serve = require('koa-static');


app.use(serve(process.cwd() + '/src/static'));



module.exports = app;
