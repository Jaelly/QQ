const {query} = require('../utils/db');

//注册用户
let insertData = (value)=>{
    let _sql = "insert into user_info(name,password) values(?,?);"
    return query(_sql,value)
}

//通过用户名查找用户信息 user_info
let findDataByName = function(name){
    let _sql = 'SELECT * from user_info where name=?'
    return query(_sql,name);
};

//通过用户名查找用户信息 user_info 不包括密码
let findUIByName = function(name){
    let _sql = 'SELECT id,name,sex,avator,place,github from user_info where name=?'
    return query(_sql,name);
};

// 通过用户id查找用户信息 user_info 包括用户名，性别，头像，最后登录时间，状态等，不包括密码
let getUserInfo = (user_id) => {
    const _sql =
        'SELECT id AS user_id, name ,sex ,avator,place ,website,github,intro,status,last_login  FROM user_info   WHERE  user_info.id =? '
    return query(_sql, [user_id]);
}


module.exports = {
    insertData,
    findDataByName,
    findUIByName,
    getUserInfo
}