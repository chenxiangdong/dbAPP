<template lang="html">
  <div class="m-cardItem">
    <slot name="image"></slot>
    <slot name="movieName"></slot>
    <slot name="cardStars"></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
  .m-cardItem{
    width: 33.3%;
    display: inline-block;
    float: left;
    .image{
      width: 90%;
    }
    .moviesName{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 90%;
    }
  }
</style>
