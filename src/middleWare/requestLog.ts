import moment from 'moment';
var debug = require('debug')('info:http')




module.exports = async (ctx, next) => {

    //调用next时，该中间件暂停并将控制权交给下一个中间件
    debug(`${moment().format("YYYY-MM-DD HH:mm:ss")}          ${ctx.method} ${ctx.url}  ${ctx.request.body}`);
    const start = Date.now();
    await next();
    const ms = Date.now() - start;

    debug(`${moment().format("YYYY-MM-DD HH:mm:ss")}          ${ctx.method} ${ctx.url} - ${ms}ms`);

};



/*

// hanhu genggbaohong
func MiddlewareTrace(r *ghttp.Request) {
	span, spanCtx := tracer.StartSpanFromContext(context.Background(),
		"web.request", tracer.ResourceName(strings.Split(r.RequestURI, "?")[0]+":"+r.Request.Method))
	ctx := context.WithValue(r.Context(), "traceCtx", spanCtx)
	r.SetCtx(ctx)

	r.Middleware.Next()

	span.SetTag("http.url", r.RequestURI)
	span.SetTag("http.method", r.Request.Method)
	span.SetTag("http.status_code", r.Response.Status)
	if err := r.GetError(); err != nil {
		span.Finish(tracer.WithError(err))
		return
	}
	span.Finish()
}






// 服务端性能优化

    1. i/o 开销 （输入输出流量百分比）

        只返回有效信息， 去掉无用信息， 有利于 服务器IO资源节省。

    2. 系统资源占用
        cpu开销
        内存开销
        磁盘开销

        解决办法
            1. 加机器
            2. 代码优化

     高并发， 考验服务端的处理能力


*/

