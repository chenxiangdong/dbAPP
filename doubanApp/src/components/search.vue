<template lang="html">
  <header class="m-header" v-bind:class="{'is-bg':bg,'is-fixed':fixed}" >
    <div class="m-header-button is-left">
      <slot name="left"></slot>
    </div>
    <input type="text" autofocus="false" v-bind:name="name" v-bind:placeholder="placeholder" class="m-input" v-model="query">
    <div class="m-header-button is-right"  v-on:click="sea">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return {
      query:''
    }
  },
  props:{
    bg:{
       type:Boolean,
       default:false
    },
    fixed:{
       type:Boolean,
       default:false
    },
    name:{
      type:String,
      default:''
    },
    placeholder:{
      type:String,
      default:''
    }
  },
  computed:{

  },
  mounted:function(){},
  methods:{
    sea:function(){
      this.$emit('cSeach',this.query);
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
    box-sizing: border-box;
    color: @headerDefaultColor;
    a{
      color: @headerDefaultColor;
    }
    .m-input{
      height: 70%;
      width: 300%;
      text-indent: 20px;
      border: none;
      color: #999;
      font-size: 16px;
      outline: none;
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
    &:after{
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
