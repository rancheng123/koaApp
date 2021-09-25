var Koa = require('koa');
var bodyParser = require('koa-bodyparser');

var app = new Koa();
app.use(bodyParser());

app.use(async ctx => {
    // the parsed body will store in ctx.request.body
    // if nothing was parsed, body will be an empty object {}

    console.log(1111)
    console.log(ctx.request.body.name)
    ctx.body = ctx.request.body;
});
app.listen(5000);