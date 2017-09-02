<template lang="html">
  <div class="adv-box">
    <slot name="image"></slot>
    <h4><slot name="title"></slot></h4>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.adv-box{
  background: #fff;
  img{
    width: 100%;
  }
  h4{
    width: 100%;
    box-sizing: border-box;
    padding: 0 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 40px;
    font-size: 16px;
    color: #333;
  }
}
</style>
