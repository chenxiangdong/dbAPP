<template lang="html">
  <div class="swiper-container" v-bind:class="swipeid">
    <div class="swiper-wrapper">
      <slot name="swiper-con"></slot>
        <!-- <div class="swiper-slide">Slide 3</div> -->
    </div>
    <!-- 分页器 -->
   <div v-bind:class="{'swiper-pagination':pagination}"></div>
  </div>
</template>

<script>
import '../lib/swiper/js/swiper.js'
export default {
  props:{
    swipeid: {
        type: String,
        default: ''
      },
      effect: {
        type: String,
        default: 'slide'
      },
      loop: {
        type: Boolean,
        default: true
      },
      direction: {
        type: String,
        default: 'horizontal'
      },
      pagination: {
        type: Boolean,
        default: true
      },
      autoplay: {
        type: Number,
        default: 5000,
      },
      paginationType: {
        type: String,
        default: 'bullets'
      },
      slidesPerView:{
        type:Number,
        default:1
      }
  },
  mounted(){
    var That=this;
    new Swiper ('.'+That.swipeid, {
      // autoplayDisableOnInteraction : false,
      //循环
       loop: That.loop,
       //分页器
       pagination: '.swiper-pagination',
       //分页类型
       paginationType: That.paginationType, //fraction,progress,bullets
       //自动播放
       autoplay: That.autoplay,
       //方向
       direction: That.direction,
       //特效
       effect: That.effect, //slide,fade,coverflow,cube
       slidesPerView : That.slidesPerView,
    })
  }
}
</script>

<style lang="less">
@import '../lib/swiper/css/swiper.css';
  .swiper-container{
    background: #fff;
  }
  .swiper-pagination-bullet-active {
    background: #fff;
  }
  .swiper-container img{
    width: 100%;
  }
  .swiper-slide.isWidth{
    padding: 0  3%;
    box-sizing: border-box;
    & p{
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
</style>
