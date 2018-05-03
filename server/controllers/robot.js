const request = require('request-promise');//请求接口

module.exports = async(ctx,next)=>{
    const auth = ctx.get('Authorization');
    console.log('==============');
    console.log(auth);
    const date = {
        key: "92febb91673740c2814911a6c16dbcc5",
        info: "" + ctx.query.message,
        userid: ""
    };
    const options = {
        method:"post",
        uri:"http://www.tuling123.com/openapi/api",
        body:date,
        json:true
    }
    const response  = await request(options);
    console.log(response);
    ctx.body={
        data:response
    }
}