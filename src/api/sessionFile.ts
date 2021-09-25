var router = require('../router');
var connection = require('../database')
import * as Debug from "debug";
import * as fs from "fs";


interface ResponseData {
    code: number,
    data: object,
    msg: string
}

let logPath = process.cwd() + '/logs/log.txt';
if (!fs.existsSync(logPath)){
    debugger;
    fs.mkdirSync(logPath)
}


//发送file
router.post('/sdk/sessionFile',async (ctx, next) => {


    var res = await new Promise( async (resolve, reject)=>{



        var responseData:ResponseData = {
            code: 10000,
            data: {},
            msg: '1111111'
        }
        resolve(responseData);


    })
    ctx.body = res;
});

