const router = require('koa-router')();

const register = require('../controllers/register');
const login = require('../controllers/login');
//router.prefix(`/`)
router.get('/hello/:name',async (ctx,next)=>{
            console.log('use1-1');
            var name = ctx.params.name;
            ctx.response.body =`<h1>Hello,${name}!</h1>`
            console.log('use1-2');
        })
    .post('/register',register)
    .post('/login',login);

module.exports = router