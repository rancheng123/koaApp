var router = require('../router');
var connection = require('../database')
import * as Debug from "debug";

interface ResponseData {
    code: number,
    data: object,
    msg: string
}


//工作流列表
router.post('/api/flow/flow/list',async (ctx, next) => {
    debugger
    console.log('flowList')
    var res = await new Promise( async (resolve, reject)=>{
        var responseData:ResponseData = {"code":0,"msg":"请求成功","data":{"total":388,"list":[{"flow_id":1016,"flow_name":"标准流程-副本-副本","begin_time":0,"end_time":0,"flow_status":3,"trigger_count":0,"creator":"user97c6eee6bc727cbbde86a369664dc33c","creator_name":"Rebecca","created_at":1643279878,"modifier":"user97c6eee6bc727cbbde86a369664dc33c","modifier_name":"Rebecca","updated_at":1643279881,"enter_repeat_status":1},{"flow_id":1015,"flow_name":"标准流程-副本","begin_time":1643279875,"end_time":0,"flow_status":1,"trigger_count":0,"creator":"user97c6eee6bc727cbbde86a369664dc33c","creator_name":"Rebecca","created_at":1643279866,"modifier":"user97c6eee6bc727cbbde86a369664dc33c","modifier_name":"Rebecca","updated_at":1643279875,"enter_repeat_status":1},{"flow_id":1014,"flow_name":"标准流程","begin_time":1643279835,"end_time":0,"flow_status":1,"trigger_count":0,"creator":"user97c6eee6bc727cbbde86a369664dc33c","creator_name":"Rebecca","created_at":1643279830,"modifier":"user97c6eee6bc727cbbde86a369664dc33c","modifier_name":"Rebecca","updated_at":1643279835,"enter_repeat_status":1},{"flow_id":1013,"flow_name":"【不要删】if\/else事件属性问题重现-202201271558-副本","begin_time":1643279516,"end_time":0,"flow_status":1,"trigger_count":0,"creator":"user97c6eee6bc727cbbde86a369664dc33c","creator_name":"Rebecca","created_at":1643279127,"modifier":"user97c6eee6bc727cbbde86a369664dc33c","modifier_name":"Rebecca","updated_at":1643279516,"enter_repeat_status":1},{"flow_id":979,"flow_name":"rcTest2s11-副本-副本","begin_time":1643278213,"end_time":0,"flow_status":1,"trigger_count":2,"creator":"user97c6eee6bc727cbbde86a369664dc33c","creator_name":"Rebecca","created_at":1643255041,"modifier":"user97c6eee6bc727cbbde86a369664dc33c","modifier_name":"Rebecca","updated_at":1643278213,"enter_repeat_status":1},{"flow_id":981,"flow_name":"rc-test3","begin_time":0,"end_time":0,"flow_status":3,"trigger_count":0,"creator":"user97c6eee6bc727cbbde86a369664dc33c","creator_name":"Rebecca","created_at":1643255339,"modifier":"user97c6eee6bc727cbbde86a369664dc33c","modifier_name":"Rebecca","updated_at":1643278196,"enter_repeat_status":1},{"flow_id":1002,"flow_name":"【不要删】if\/else事件属性问题重现-202201271558","begin_time":1643271354,"end_time":0,"flow_status":1,"trigger_count":21,"creator":"user97c6eee6bc727cbbde86a369664dc33c","creator_name":"Rebecca","created_at":1643271303,"modifier":"user97c6eee6bc727cbbde86a369664dc33c","modifier_name":"Rebecca","updated_at":1643273366,"enter_repeat_status":1},{"flow_id":999,"flow_name":"市场线索属性晚于校验-202201271553","begin_time":1643270082,"end_time":1643270380,"flow_status":2,"trigger_count":8,"creator":"user97c6eee6bc727cbbde86a369664dc33c","creator_name":"Rebecca","created_at":1643269946,"modifier":"user97c6eee6bc727cbbde86a369664dc33c","modifier_name":"Rebecca","updated_at":1643270380,"enter_repeat_status":1},{"flow_id":995,"flow_name":"cta-TransformationTime早于等于指定时间-副本-副本","begin_time":1643268485,"end_time":1643268734,"flow_status":2,"trigger_count":6,"creator":"user97c6eee6bc727cbbde86a369664dc33c","creator_name":"Rebecca","created_at":1643267968,"modifier":"user97c6eee6bc727cbbde86a369664dc33c","modifier_name":"Rebecca","updated_at":1643268734,"enter_repeat_status":1},{"flow_id":994,"flow_name":"cta-TransformationTime早于指定时间-副本","begin_time":1643267726,"end_time":1643268548,"flow_status":2,"trigger_count":4,"creator":"user97c6eee6bc727cbbde86a369664dc33c","creator_name":"Rebecca","created_at":1643267634,"modifier":"user97c6eee6bc727cbbde86a369664dc33c","modifier_name":"Rebecca","updated_at":1643268548,"enter_repeat_status":1},{"flow_id":992,"flow_name":"cta-TransformationTime早于指定时间","begin_time":1643267347,"end_time":1643267734,"flow_status":2,"trigger_count":6,"creator":"user97c6eee6bc727cbbde86a369664dc33c","creator_name":"Rebecca","created_at":1643267284,"modifier":"user97c6eee6bc727cbbde86a369664dc33c","modifier_name":"Rebecca","updated_at":1643267734,"enter_repeat_status":1},{"flow_id":974,"flow_name":"cta-if\/else嵌套-202201271052","begin_time":1643252123,"end_time":1643265633,"flow_status":2,"trigger_count":58,"creator":"user97c6eee6bc727cbbde86a369664dc33c","creator_name":"Rebecca","created_at":1643251936,"modifier":"user97c6eee6bc727cbbde86a369664dc33c","modifier_name":"Rebecca","updated_at":1643265633,"enter_repeat_status":1},{"flow_id":965,"flow_name":"rcTest2s11","begin_time":1643253708,"end_time":1643385600,"flow_status":1,"trigger_count":6,"creator":"user97c6eee6bc727cbbde86a369664dc33c","creator_name":"Rebecca","created_at":1643189878,"modifier":"user97c6eee6bc727cbbde86a369664dc33c","modifier_name":"Rebecca","updated_at":1643254111,"enter_repeat_status":1},{"flow_id":976,"flow_name":"rcTest2s-副本","begin_time":0,"end_time":0,"flow_status":3,"trigger_count":0,"creator":"user97c6eee6bc727cbbde86a369664dc33c","creator_name":"Rebecca","created_at":1643253830,"modifier":"user97c6eee6bc727cbbde86a369664dc33c","modifier_name":"Rebecca","updated_at":1643253830,"enter_repeat_status":1},{"flow_id":969,"flow_name":"cccc等待一段时间执行-202201261736-副本-副本-副本-副本","begin_time":1643192222,"end_time":1643192248,"flow_status":2,"trigger_count":0,"creator":"user97c6eee6bc727cbbde86a369664dc33c","creator_name":"Rebecca","created_at":1643190803,"modifier":"user97c6eee6bc727cbbde86a369664dc33c","modifier_name":"Rebecca","updated_at":1643192248,"enter_repeat_status":1},{"flow_id":964,"flow_name":"等待一aaaaaa1261736","begin_time":1643189820,"end_time":1643190858,"flow_status":2,"trigger_count":8,"creator":"user97c6eee6bc727cbbde86a369664dc33c","creator_name":"Rebecca","created_at":1643189792,"modifier":"user97c6eee6bc727cbbde86a369664dc33c","modifier_name":"Rebecca","updated_at":1643191989,"enter_repeat_status":1},{"flow_id":968,"flow_name":"等待一段时间执行xxx-202201261736-副本-副本-副本","begin_time":1643190740,"end_time":1643190909,"flow_status":2,"trigger_count":2,"creator":"user97c6eee6bc727cbbde86a369664dc33c","creator_name":"Rebecca","created_at":1643190693,"modifier":"user97c6eee6bc727cbbde86a369664dc33c","modifier_name":"Rebecca","updated_at":1643191926,"enter_repeat_status":1},{"flow_id":967,"flow_name":"等待一段时间执行-202201261736-副本-副本","begin_time":1643190308,"end_time":1643190698,"flow_status":2,"trigger_count":2,"creator":"user97c6eee6bc727cbbde86a369664dc33c","creator_name":"Rebecca","created_at":1643190271,"modifier":"user97c6eee6bc727cbbde86a369664dc33c","modifier_name":"Rebecca","updated_at":1643190698,"enter_repeat_status":1},{"flow_id":966,"flow_name":"等待一段时间执行-202201261736-副本","begin_time":1643190005,"end_time":1643190316,"flow_status":2,"trigger_count":2,"creator":"user97c6eee6bc727cbbde86a369664dc33c","creator_name":"Rebecca","created_at":1643189941,"modifier":"user97c6eee6bc727cbbde86a369664dc33c","modifier_name":"Rebecca","updated_at":1643190316,"enter_repeat_status":1},{"flow_id":890,"flow_name":"rcTest","begin_time":0,"end_time":0,"flow_status":3,"trigger_count":0,"creator":"user97c6eee6bc727cbbde86a369664dc33c","creator_name":"Rebecca","created_at":1643015660,"modifier":"user97c6eee6bc727cbbde86a369664dc33c","modifier_name":"Rebecca","updated_at":1643189826,"enter_repeat_status":1}]}}
        resolve(responseData);
        await next();
    })
    ctx.body = res;
});

//新建工作流
router.post('/api/flow/flow/save',async (ctx, next) => {
    var res = await new Promise( async (resolve, reject)=>{

        debugger







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

