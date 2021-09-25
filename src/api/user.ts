var router = require('../router');
var connection = require('../database')
import * as Debug from "debug";

interface ResponseData {
    code: number,
    data: object,
    msg: string
}


interface Project{
    id: number,
    name: string;
}
interface EaUser {
    name: string;
    email: string;
    password: string;
    companyId: number;
    projects: [Project];
}


//注册user
router.post('/user/regist',async (ctx, next) => {

    var res = await new Promise( async (resolve, reject)=>{



        if(!ctx.request.body.userName){
            var responseData:ResponseData = {
                code: 20004,
                data: {},
                msg: '请输入用户名称'
            }
            resolve(responseData);
            await next();
            return;
        }
        if(!ctx.request.body.password){
            var responseData:ResponseData = {
                code: 20004,
                data: {},
                msg: '请输入密码'
            }
            resolve(responseData);
            await next();
            return;
        }

        let sql1 = `select * from users_tbl where user_name='${ctx.request.body.userName}' and user_password=${ctx.request.body.password};`
        connection.query(sql1,async function (err, result) {
            if(err){

    /*
        报错种类
            1. 程序报错          自动打印   调用栈信息

                如语法错误，没有此目录
                fs123.readFileSync('./a')

            2. 第三方接口错误，    不打印    调用栈信息， 需要手动添加console.error日志
    */

                console.log('[SELECT ERROR] - ',err.message);
                console.trace()
                return;
            }


            if( result && result.length ){
                var responseData:ResponseData = {
                    code: 10000,
                    data: {},
                    msg: '该用户已存在'
                }
                resolve(responseData);
                await next();
            }else{


                var sql = `INSERT INTO users_tbl
                (  user_name,user_password )
                VALUES
                ('${ctx.request.body.userName}','${ctx.request.body.password}')
                `

                console.log(sql)
                connection.query(sql,async function (err, result) {
                    if(err){



                        console.log('[SELECT ERROR] - ',err.message);
                        return;
                    }

                    var responseData:ResponseData = {
                        code: 20000,
                        data: result,
                        msg: '成功'
                    }
                    resolve(responseData);
                    await next();
                });
            }
        })




    })
    ctx.body = res;
});


//查询user
router.post('/user/login',async (ctx, next) => {











   // let crypto = require('crypto')

    // password = crypto.createHmac("md5", "cyl").update(password).digest("hex");
    //
    //
    // console.log(ctx.cookies.get('aaa'))




    var res = await new Promise((resolve, reject)=>{
        let sql1 = `select * from users_tbl where user_name='${ctx.request.body.userName}' and user_password=${ctx.request.body.password};`

        connection.query(sql1,async function (err, result) {

            if(err){

                console.log('[SELECT ERROR] - ',err.message);
                console.trace()
                return;
            }
            //有此用户
            if( result && result.length ){

                console.log('有此用户')

                ctx.cookies.set(
                    "username",
                    'hello',
                    {
                        //domain:'api-dev.userview.net', // 写cookie所在的域名
                        domain:'localhost', // 写cookie所在的域名
                        sameSite: true,
                        path:'/',       // 写cookie所在的路径
                        //maxAge:1000*60*60*24,   // cookie有效时长
                        expires:new Date('2018-12-31'), // cookie失效时间
                        httpOnly:false,  // 是否只用于http请求中获取
                       //  overwrite:false  // 是否允许重写
                    }
                )

                var responseData:ResponseData = {
                    code: 20000,
                    data: result,
                    msg: '登录成功'
                }

                console.log('sucess')
                resolve(responseData);
                await next();


            }else{


                console.log('没有此用户')
                var responseData:ResponseData = {
                    code: 20002,
                    data: {},
                    msg: '没有此用户'
                }
                resolve(responseData);
                await next();

            }
        })

    })




    /*User.findOne({ username}, function (err, doc) {
        if (err) { //对错误处理
        }
        if (doc) { //查询数据库发现存在 那么就到个人页面
            if (doc.password === password) { //如果密码也匹配
                res.cookie("username", username);
                res.redirect("/main");
                res.end();
            } else {

                res.render("error");
            }
        } else {
            res.redirect("/register"); //如果不存在 那么就到注册页面
        }
    })*/



    ctx.body = res;
});






//查询user
router.post('/user/queryUsers',async (ctx, next) => {
    var res = await new Promise((resolve, reject)=>{
        var sql = 'select * from users_tbl;'
        connection.query(sql,async function (err, result) {
            if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
            }

            var responseData:ResponseData = {
                code: 20000,
                data: result,
                msg: '成功'
            }

            console.log('sucess')
            resolve(responseData);
            await next();
        });
    })
    ctx.body = res;
});





//登出   清除cookie
//修改用户信息
//检查邮箱是否存在
//发送重置密码邮件
    //😓任务  使用worker（线程） 发送邮件


//邀请项目成员
//获取项目成员
//添加项目成员
//更新项目成员
//删除项目成员




//  ClickHouse DB  存储事件


/*
    // redis 使用场景
        获取sessionId  因为sessionId 长期不变



    // 中间件
        数据追踪 datadog

        tracer.Start(
            tracer.WithServiceName(conf.GetString("datadog.service_name")),
            tracer.WithAgentAddr(conf.GetString("datadog.agent_addr")),
            tracer.WithEnv("ea-dev"),
        )


*/


