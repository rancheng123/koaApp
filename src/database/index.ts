/*
    docker 命令

    docker pull mysql
    docker run --name mysql -e MYSQL_ROOT_PASSWORD=12345678 -d mysql:tag


*/



console.log('process.env.CONNECTIONSTRING', process.env.CONNECTIONSTRING)

//连接数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'workFlowApp'
});
connection.connect();


//断开数据库的连接
//connection.end();




//
// var mybatis = require('mybatisnodejs');
//
// app.use(mybatis.Contexto.domainMiddleware);
// app.use(mybatis.Contexto.middlewareOnError);
//
// var sessionFactory  = new mybatis.Principal().processe(dir_xml);
// global.sessionFactory = sessionFactory;



module.exports = connection;
