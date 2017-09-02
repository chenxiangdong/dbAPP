<template lang="html">
  <div class="button" :class="{'large':large,'small':small,'radio10':radio10,'radio20':radio20}" @click="goToRouter">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    large:{
      type:Boolean,
      default:false
    },
    small:{
      type:Boolean,
      default:false
    },
    radio10:{
      type:Boolean,
      default:false
    },
    radio20:{
      type:Boolean,
      default:false
    },
    isRouter:{
      type:Boolean,
      default:false
    },
    id:{
      type:String,
    },
    path:{
      type:String,
      default:''
    }
  },
  methods:{
    goToRouter:function(){
      if(this.isRouter){
        this.$router.push({
          path:this.path,
          query:{
            q:this.id
          }
        })
      }
    }
  }
}
</script>

<style lang="less">
@import "../assets/less/var.less";
.button{
  display: inline-block;
  border: 1px solid @defaultColor;
  color: @defaultColor;
  line-height: 30px;
  padding: 0 15px;
  border-radius: 5px;
  margin-bottom:20px;
  &.large{
    line-height: 36px;
    padding: 0 20px;
  }
  &.small{
    line-height: 24px;
    padding: 0 10px;
  }
  &.radio10{
    border-radius: 10px;
  }
  &.radio20{
    border-radius: 15px;
  }
}
</style>
