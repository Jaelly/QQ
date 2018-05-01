<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
  name: 'App',
  mounted(){

  }
}
</script>

<style lang="scss" type="text/scss">

body,
html {
  background-color: #F5F6F8;
  width: 100%;
  height: 100%;
  font-family: 'Microsoft Yahei' !important;
}
.icon {
  width: 1.2em;
  height: 1.2em;
  vertical-align: -.3em;
  fill: currentColor;
  overflow: hidden;
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // -webkit-tap-highlight-color: rgba(0,0,0,0);
  // -ms-touch-action: none;
  // -webkit-touch-callout: none;
  // user-select: none;
  // text-size-adjust: none;
}
</style>
