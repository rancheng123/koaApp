var connection = require('../database')

let ctx = {
    request: {
        body: JSON.stringify({
            userName: 'rancheng',
            password: '1111'
        })
    }
}



let data = JSON.parse(ctx.request.body)

console.log(data)


var sql = 'INSERT INTO `users_tbl` \\\n' +
    '           ( user_id, user_name,user_password ) \\\n' +
    '           VALUES \\\n' +
    '           ( 1, '+ data.userName +',' + data.password +' );'
connection.query(sql,async function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    var responseData = {
        code: 20000,
        data: result,
        msg: '成功'
    }
});