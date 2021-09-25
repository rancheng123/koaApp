var app = require('../app');

//引入koa-body(注意： koa-body 要放在 router之前， 否则 获取不到ctx.request.body)
const koaBody = require('koa-body');
app.use(koaBody(
    {
        multipart: true,
        formidable: true
    }
));

// var bodyParser = require('koa-bodyparser');
// app.use(bodyParser());


// const bodyParser = require('koa-bodyparser');
// app.use(bodyParser()) //处理POST 请求



//引入koa-router中间件
const Router = require('@koa/router');
var router = new Router();
//必须使用此方法，否则路由不生效
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = router;
