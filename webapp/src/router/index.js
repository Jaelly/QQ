import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Message from "@/pages/Message";
import Robot from "@/pages/Robot";
import ContactList from "@/pages/ContactList";
import Me from "@/pages/Me";
import userInfo from "@/pages/UserInfo"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { //登录
      path: "/login",
      component: Login
    },{ //注册
      path: "/register",
      component: Register
    },{ //首页
      path: "/message",
      component: Message
    },{ //机器人聊天
      path: "/robot",
      component: Robot
    },
    { //通讯录
      path: "/contact_list",
      component: ContactList
    },{ //个人中心
      path: "/me",
      component: Me
    },{//个人信息
      path:'/user_info/:user_id',
      component:userInfo
    }
  ]
})
