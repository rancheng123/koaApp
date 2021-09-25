
//创建user表
// connection.query(
//     'CREATE TABLE IF NOT EXISTS `users_tbl`(\n' +
//     '       `user_id` INT UNSIGNED AUTO_INCREMENT,\n' +
//     '       `user_name` VARCHAR(100) NOT NULL,\n' +
//     '       `user_password` VARCHAR(40) NOT NULL,\n' +
//     '\n' +
//     '        #主键\n' +
//     '        PRIMARY KEY ( `user_id` )\n' +
//     '    )ENGINE=InnoDB DEFAULT CHARSET=utf8;',
//
//     function (err, result) {
//         if(err){
//             console.log('[SELECT ERROR] - ',err.message);
//             return;
//         }
//
//         console.log('--------------------------SELECT----------------------------');
//         console.log(result);
//         console.log('------------------------------------------------------------\n\n');
//     }
// );


//var sql = 'select database();'
