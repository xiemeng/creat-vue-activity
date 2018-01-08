<template>
  <div id="app">
  	<router-view></router-view>
  </div>
  
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less" scoped>
	@import url("assets/css/common.css");
	@import './assets/font/iconfont.css';
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  color: #2c3e50;
	  width: 100%;height: 100%;
	}
</style>
