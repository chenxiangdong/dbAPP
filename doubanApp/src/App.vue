<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default{
  name:"app",
  data(){
    return {
      transitionName: 'slide-left',
    }
  },
  watch: {
      '$route' (to, from) {
          const toDepth = to.path.split('/').length
          const fromDepth = from.path.split('/').length
          this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
     }
   }
}
</script>

<style>
@import '../node_modules/element-ui/lib/theme-default/index.css';

*{
  margin: 0;
  list-style: none;
  padding: 0;
}
html,body{
  height: 100%;
  background: #efefef;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 44px;
  height: 100%;
  box-sizing: border-box;
  transition: all 3s ease;
}
a{
  text-decoration: none;
}
//透明度动画
.slide-fade-enter,.slide-left-leave-active{
    opacity: 0;
}
.slide-fade-enter, .slide-fade-leave-active {
  opacity: 0;
}
//左右移动动画
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}
.mar-t-20{
  margin-top: 10px;
}
</style>
