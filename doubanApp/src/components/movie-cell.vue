<template lang="html">
  <div class="m-movie-cell-wrap">
    <a href="javascript:;">
      <router-link :to="{name:name,params:{id:id}}">
      <div class="m-movie-pull-right right-img" :style="{'background-image':'url('+img+')'}" v-if="img"></div>
      <div class="m-movie-cell">
        <div class="m-movie-cell-title">
          <slot name="title"></slot>
        </div>
        <div class="m-movie-cell-stars">
          <slot name="stars"></slot>
        </div>
        <div class="m-movie-cell-actor">
          <slot name="actor"></slot>
        </div>
      </div>
    </router-link>
    </a>
  </div>
</template>

<script>
export default {
  props:['img','name','id']
}
</script>

<style lang="less">
.m-movie-cell-wrap{
  display: flex;
  flex-direction: row;
  padding: 10px;
  position: relative;
  background: #fff;
  a{
    width: 100%;
    height: 100%;
    display: flex;
  }
  &:after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    background: #eee;
    transform: scaleY(0.5);
  }
  .m-movie-cell{
    flex: 1;
    padding-left: 20px;
  }
  .m-movie-cell-title{
    font-size: 16px;
    line-height: 22px;
    color: #333;
    font-weight: bold;
    text-align: left;
  }
  .m-movie-cell-stars{
    font-size: 12px;
    color: #aaa;
    line-height: 20px;
    height: 20px;
    text-align: left;
    padding-bottom: 10px;
  }
  .m-movie-cell-actor{
    color: #333;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
  }
  .m-movie-pull-right{
    width: 94px;
    height: 94px;
    overflow: hidden;
    background-position: center center;
    background-size: cover;
    img{
      width: 100%;
    }
  }
}
</style>
