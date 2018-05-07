const userModel = require('../models/user_info');

/**
 * 通过user_id获取用户信息（不包括密码）
 * @param
 * @return 用户名，性别，头像，最后登陆时间，状态等
 */

let getUserInfo = async(ctx,next)=>{
    const RowDataPacket = await userModel.getUserInfo(ctx.query.user_id),
        userInfo = JSON.pase(JSON.stringify(RowDataPacket));
    ctx.body = {
        success:true,
        data:{
            userInfo:userInfo
        }
    }
};

/**
 * 修改个人信息
 * @param  github   github
 * 			website website
 * 			sex 性别
 * 			place 来自哪里
 * 			user_id  本机用户id
 * @return
 */
let editorInfo = async (ctx, next) => {
    const data = [ctx.request.body.github, ctx.request.body.website, ctx.request.body.sex, ctx.request.body.place, ctx.user_id]
    console.log('editorInfo', data)
    await userModel.editorInfo(data).then(result => {
        console.log("editorInfo", result);
        if (result) {
            ctx.body = {
                success: true
            };
            console.log("修改个人信息成功");
        }
    })
        .catch(err => {
            console.log(err);
        });
};


module.exports ={
    getUserInfo,
    editorInfo
}