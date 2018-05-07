const router = require('koa-router')();

const register = require('../controllers/register');
const login = require('../controllers/login');
const robot = require('../controllers/robot');
const userInfo = require('../controllers/user_info');
//router.prefix(`/`)
router.get('/hello/:name',async (ctx,next)=>{
            console.log('use1-1');
            var name = ctx.params.name;
            ctx.response.body =`<h1>Hello,${name}!</h1>`
            console.log('use1-2');
        })
    .post('/register',register)//注册
    .post('/login',login)//登录
    .get('/robot',robot) //机器人交流
    .get('/user_info',userInfo.getUserInfo)// 获取用户资料
    .post('/editor_info',userInfo.editorInfo);//修改用户资料

module.exports = router