<template lang="html">
  <div class="">
    <img src="../assets/images/loading_green.gif" alt="" class="loading" v-if="bg">
    <img src="../assets/images/loading_grey.gif" alt="" class="loading" v-if="!bg">
  </div>
</template>

<script>
export default {
  props:{
    bg:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style lang="less">
  .loading{
    width: 30px;
    height: 30px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
