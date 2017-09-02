<template lang="html">
  <div class="city-box">
    <p class="city-box-select">
      <span>
        当前城市:{{city}}
        <img src="../../../assets/images/ic_seti_arrow_right_gray.png" alt="" height="18">
      </span>
      <span>
        类型 时间 地点
        <img src="../../../assets/images/ic_seti_arrow_right_gray.png" alt="" height="18">
      </span>
    </p>
    <div class="">
      <m-loading v-show="load"></m-loading>
      <div class="" v-show="!load">
        <m-cell title="热门活动">
          <span slot="cell-right">更多
          <img src="../../../assets/images/ic_arrow_gray_small.png" alt=""></span>
        </m-cell>
        <m-swiper swipeid="swiper05" :loop="false" :autoplay="0" :pagination="false" :slidesPerView="3.3">
          <div class="swiper-slide isWidth" slot="swiper-con" v-for="(v,i) in activity" v-if="i<10">
            <img :src="v.image" alt="" height="114">
            <p class="swiper-title">{{v.title}}</p>
            <p class="swiper-time">{{v.begin_time}}</p>
          </div>
        </m-swiper>
      </div>
    </div>
  </div>
</template>

<script>
import mLoading from '../../../components/loading.vue'
import mCell from '../../../components/cell.vue'
import mSwiper from '../../../components/swiper.vue'

export default {
  data(){
    return{
      city:'北京',
      id:'108288',
      activity:'',
      load:false
    }
  },
  components:{
    mLoading,
    mCell,
    mSwiper
  },
  mounted(){
    this.getData()
  },
  watch:{
    activity:function(val,oldval){
      this.load=true
      this.$nextTick(() =>{
        this.load=false
      })
    }
  },
  methods:{
    getData(){
      this.axios.get('/api/event/list?loc='+this.id+'&count=100').then((response) =>{
        this.activity=response.data.events
      },(error) =>{
        consoel.log(error)
      })
    }
  }
}
</script>

<style lang="less">
.city-box{
  background: #fff;
}
  .city-box-select{
    height: 20px;
    display: table;
    color: #999;
    width: 100%;
    padding-top: 5px;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .city-box-select span{
    display: table-cell;
    height: 20px;
    margin: 0;
    line-height: 20px;
  }
  .city-box-select span img{
    float: right;
    margin-top: 0;
    margin-right: 15px;
  }
  .swiper-title{
    color: #333;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px;
  }
  .swiper-time{
    font-size: 12px;
    margin-bottom: 10px;
  }
</style>
