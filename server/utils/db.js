const mysql = require('mysql');
const dbConfig = require('./config').db;

//通过mysql连接池连接mysql
const pool = mysql.createPool({
    user:dbConfig.user,
    password:dbConfig.password,
    database:dbConfig.database,
    host:dbConfig.host
});

//基本的连接
let query = (sql, values)=>{
    return new Promise((resolve, reject)=>{
        pool.getConnection((err, connection)=> {
            if(err){
                resolve(err);
            }else{
                connection.query(sql, values, (err, rows)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(rows);
                    }
                    connection.release();//release就是释放内存
                })
            }
        })
    })
};

module.exports = {
    query
}