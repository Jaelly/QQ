/**
 *  通过路由触发数据查询
 */

let userModel = require("../models/user_info");
const md5 = require('md5');

module.exports = async (ctx,next) => {
    console.log('register');
    let user = {
        name: ctx.request.body.name,//请求参数
        password:ctx.request.body.password
    };
    console.log(user);
    //调用models user_info 查询数据库
    //查询用户是否存在
    console.log(userModel);
   await userModel.findDataByName(user.name).then(result =>{
       console.log(result);
       if(result.length){//如果长度等于1为真
           ctx.body = {
               success:false,
               message:"用户名已存在"
           };
       }else{
           ctx.body ={
               success:true,
               message:"注册成功"
           };
           console.log("注册成功");
           //插入用户
           userModel.insertData([ctx.request.body.name,ctx.request.body.password]);
       }
   });
   // console.log(ctx.request);
};


