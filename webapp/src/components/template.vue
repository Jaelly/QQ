<template>
  <div class="wrapper">

  </div>
</template>

<script>
  export default {
    name: '',

    props: {},

    components: {
    },

    data() {
      return {}
    },

    computed: {},

    watch: {},

    methods: {},
    beforeUpdate(){
      //数据更新时调用
    },
    updated(){
      //由于数据更改导致的虚拟dom重新渲染和打补丁，在这之后会调用
      //当这个钩子被调用是dom已经更新
    },
    beforeCreate(){
      //创建实例之前
    },
    created(){
      //实例创建完成后执行$el属性目前还没有
    },
    beforeMount(){
      //编译完的HTML挂载到对应虚拟dom
    },
    mounted(){
      //编译完的HTML挂载到页面后，整个实例中只执行一次
    },
    beforeDestroy(){
      //实例销毁前
    },
    destroyed(){
      //实例销毁后
    }
  }
</script>

<style lang="scss" scoped>

</style>
