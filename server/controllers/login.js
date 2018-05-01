/**
 *  通过路由触发数据查询
 */

let userModel = require("../models/user_info");
const md5 = require('md5');

module.exports =async (ctx, next)=>{
    console.log('login');
    let user = {
        name:ctx.request.body.name || "",
        password:ctx.request.body.password || ""
    };
    if(user.name === "" || user.password ===""){
        ctx.body = {
            success:false,
            message:"用户名或密码不能为空"
        }
        return;
    }
    await userModel.findDataByName(user.name)
        .then((result=>{
            console.log(result);
            if(result.length){
                //验证通过需要token 暂时省略。。。。
                if(result[0].password===user.password){
                    ctx.body = {
                        success:true,
                        message:"登录成功",
                        userInfo:{
                            name:result[0].name,
                            user_id:result[0].id,
                            sex:result[0].sex,
                            website:result[0].website,
                            github:result[0].github,
                            intro:result[0].intro,
                            avator:result[0].avator,
                            place:result[0].place,
                            sockedId:result[0].sockedId
                        }
                    };
                }else{
                    ctx.body ={
                        success:false,
                        message:"密码错误"
                    }
                }
            }else{
                ctx.body ={
                    success:false,
                    message:"用户名错误"
                }
            }
        }))
};