<template lang="html">
  <div class="m-list" :class="{'bg':bg,'borderBottom':borderBottom}">
    <slot></slot>
  </div>
</template>

<script>
import mListItem from './list-item.vue'

export default {
  props:{
    // value:{
    //   type:String,
    // },
    bg:{
      type:Boolean,
      default:false
    },
    borderBottom:{
      type:Boolean,
      default:false
    }
  },
  computed:{
    value(){
        return this.$route.matched[2].name
    }
  }
}
</script>

<style lang="less">
@import "../assets/less/var.less";

.m-list{
  width: 100%;
  height: 40px;
  display: table;
  position: relative;
  overflow: hidden;
  background: @defaultColor;
  &.bg{
    background: #fff;
  }
  &.borderBottom:before{
    content: "";
    width: 100%;
    height: 1px;
    background: #ddd;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transform: scaleY(0.5);
    display: block;
  }
}
</style>
