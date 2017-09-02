<template lang="html">
  <header class="m-header" v-bind:class="{'is-bg':bg,'is-fixed':fixed,'is-border':!border}" >
    <div class="m-header-button is-left">
      <slot name="left"></slot>
    </div>
    <h1 class="m-header-title" v-text="title"></h1>
    <div class="m-header-button is-right">
      <router-link :to="{ name: name, params: { id: value }}">
      <slot name="right"></slot>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:''
    },
    bg:{
       type:Boolean,
       default:false
    },
    fixed:{
       type:Boolean,
       default:false
    },
    border:{
      type:Boolean,
      default:false
    },
    // value:{
    //   type:String,
    //   default:'movie'
    // },
    name:{
      type:String,
      default:''
    }
  },
  computed:{
    value(){
      if(this.name=='search'){
        return this.$route.matched[2].name
      }
    }
  }
}
</script>

<style lang="less">
/*导入颜色变量*/
@import "../assets/less/var.less";
.m-header{
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 10px;
    background: #fff;
    color: @headerDefaultColor;
    a{
      color: @headerDefaultColor;
    }
    .m-header-button{
        width: 70px;
        align-items:stretch;
        &.is-left{
            text-align: left;
        }
        &.is-right{
            text-align: right;
        }
        .m-icon-img{
            width: 20px;
            height: 20px;
            float: left;
            margin-top: 1px;
        }
        .m-icon-img-r{
            width: 20px;
            height: 20px;
            float: right;
            margin-top: 1px;
        }
        .margin-right-10{
            margin-right: 10px;
        }
    }
    .m-header-title{
        flex: 1;
        text-align: center;
        font-size: 16px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-weight: normal;
    }
    &.is-bg{
        background:@headerBg;
        color: #fff;
        a{color: #fff;}
        .m-header-title{
            color: #fff;
        }
    }
    &.is-border:after{
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background: #eee;
      transform: scaleY(0.5);
    }
    &.is-fixed{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
}
</style>
