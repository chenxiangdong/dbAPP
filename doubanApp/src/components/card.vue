<template lang="html">
  <div class="m-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
  .m-card{
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    height: auto;
    overflow: hidden;
    padding: 0 15px 20px;
  }
</style>
