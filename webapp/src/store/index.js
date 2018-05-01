import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
      state:{//存放数据
        count: 0,
        tabTips: { //底部tab的未读提示 暂时只做好友添加请求的提示
          addFriendReq: "" //是否有好友添加请求 0没有 1有
        },
        robotmsg: [// 机器人首语
          {
            message: "hi , 欢迎与我聊天，问我问题哦！",
            user: "robot"
          }
        ],
      },
      getters:{//Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。
        // 就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
        tabTipsGetter: state => state.tabTips,
        robotMsgGetter: state => state.robotmsg,

      },
      mutations:{//更改 Vuex 的 store 中的状态的唯一方法是提交 mutation，必须同步执行
        increment (state) {
          state.count++
        }
      },
      actions:{//Action 类似于 mutation，不同在于Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。
        //Action 通过 store.dispatch 方法触发：  store.dispatch('increment')
        increment (context) {
          context.commit('increment')
        }
      }
})

export default store;
