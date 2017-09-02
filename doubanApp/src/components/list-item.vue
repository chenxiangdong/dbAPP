<template lang="html">
  <a class="m-list-item" :class="{'is-active':isActive}" @click="goToRouter">
    <slot name="list-item-content"></slot>
  </a>
</template>

<script>
export default {
  props:{
    id:{
      type:String,
    },
    isRouter:{
      type:Boolean,
      default:false
    }
  },
  computed:{
    isActive(){
      if(this.$parent.value==this.id){
        return true
      }
    }
  },
  methods:{
    goToRouter:function(){
      this.$parent.$emit('input',this.id)
      if(this.isRouter){
        this.$router.push(this.id)
      }
    }
  }
}
</script>

<style lang="less">
@import "../assets/less/var.less";

.m-list-item{
  display: table-cell;
  color: #999;
  line-height: 40px;
  font-size: 14px;
  box-sizing: border-box;
  &.is-active{
    border-bottom: 2px solid @defaultColor;
    color: @defaultColor;
  }
}
</style>
