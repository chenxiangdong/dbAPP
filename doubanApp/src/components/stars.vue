<template lang="html">
  <div class="stars-box">
    <span>
      <img src="../assets/images/rating_star_small_on.png" alt="" v-if="n1==2">
      <img src="../assets/images/rating_star_small_half.png" alt="" v-if="n1==1">
      <img src="../assets/images/rating_star_small_off.png" alt="" v-if="n1==0">
    </span>
    <span>
      <img src="../assets/images/rating_star_small_on.png" alt="" v-if="n2==2">
      <img src="../assets/images/rating_star_small_half.png" alt="" v-if="n2==1">
      <img src="../assets/images/rating_star_small_off.png" alt="" v-if="n2==0">
    </span>
    <span>
      <img src="../assets/images/rating_star_small_on.png" alt="" v-if="n3==2">
      <img src="../assets/images/rating_star_small_half.png" alt="" v-if="n3==1">
      <img src="../assets/images/rating_star_small_off.png" alt="" v-if="n3==0">
    </span>
    <span>
      <img src="../assets/images/rating_star_small_on.png" alt="" v-if="n4==2">
      <img src="../assets/images/rating_star_small_half.png" alt="" v-if="n4==1">
      <img src="../assets/images/rating_star_small_off.png" alt="" v-if="n4==0">
    </span>
    <span>
      <img src="../assets/images/rating_star_small_on.png" alt="" v-if="n5==2">
      <img src="../assets/images/rating_star_small_half.png" alt="" v-if="n5==1">
      <img src="../assets/images/rating_star_small_off.png" alt="" v-if="n5==0">
    </span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // 0 空的 1半颗 2一颗
      n1:0,
      n2:0,
      n3:0,
      n4:0,
      n5:0,
      nub:0
    }
  },
  props:['stars'],
  mounted(){
    this.nub=Number(this.stars)
    if(this.nub==10){
      this.n1=2;
      this.n2=2;
      this.n3=2;
      this.n4=2;
      this.n5=2;
    }else if(this.nub>8){
      this.n1=2;
      this.n2=2;
      this.n3=2;
      this.n4=2;
      this.n5=1;
    }else if(this.nub==8){
      this.n1=2;
      this.n2=2;
      this.n3=2;
      this.n4=2;
      this.n5=0;
    }else if(this.nub>6){
      this.n1=2;
      this.n2=2;
      this.n3=2;
      this.n4=1;
      this.n5=0;
    }else if(this.nub==6){
      this.n1=2;
      this.n2=2;
      this.n3=2;
      this.n4=0;
      this.n5=0;
    }else if(this.nub>4){
      this.n1=2;
      this.n2=2;
      this.n3=1;
      this.n4=0;
      this.n5=0;
    }else if(this.nub==4){
      this.n1=2;
      this.n2=2;
      this.n3=0;
      this.n4=0;
      this.n5=0;
    }else if(this.nub>2){
      this.n1=2;
      this.n2=1;
      this.n3=0;
      this.n4=0;
      this.n5=0;
    }else if(this.nub==2){
      this.n1=2;
      this.n2=0;
      this.n3=0;
      this.n4=0;
      this.n5=0;
    }else if(this.nub>0){
      this.n1=1;
      this.n2=0;
      this.n3=0;
      this.n4=0;
      this.n5=0;
    }else{
      return
    }
  }
}
</script>

<style lang="less">
  .stars-box img{
    float: left;
    width: 10px !important;
    height: 10px !important;
    margin-top: 5px;
  }
</style>
