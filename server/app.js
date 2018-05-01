/**
 *  app的启动文件
 *  使用koa开发框架，express的下一代
 */

const Koa=require('koa');
const cors = require("koa2-cors");//设置跨越请求
const bodyParser = require('koa-bodyparser');//获取post请求参数
//const router = require('koa-router')();//路由中间件
const app = new Koa();
//导入路由表
const router= require('./routes/index');

app.use(cors({
    origin:['http://localhost:8080','127.0.0.1:8080'],//允许这个域的访问
    //methods:['GET','POST'],//只允许GET和POST请求
   // alloweHeaders:['Conten-Type','Authorization'],//只允许带这两种请求头的链接访问
}));

app.use(bodyParser());

//设置请求头
app.use(async (ctx,next)=>{
    ctx.set("Access-Control-Allow-Origin","*");
    ctx.set("Access-Control-Allow-Credentials", true);
    ctx.set("Access-Control-Max-Age", 86400000);
    ctx.set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
    //console.log(`${ctx.request.method} ${ctx.request.url}`);

    await next();
});
// router.get('/bb',async (ctx,next)=>{
//     console.log('bb');
// })
// router.get('/:name',async (ctx,next)=>{
//     console.log(ctx.params.name)
//     ctx.response.body = "dlfkjsldf";
// })
// router.post('/register',async (ctx,next)=>{
//         console.log('use2-1');
//         console.log(ctx.request.body);
//         ctx.body = {a:2};
//     });

app.use(router.routes());
//监听8080端口
app.listen(3000);
console.log(`app started at port 3000`);