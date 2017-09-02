<template lang="html">
  <div class="">
    <m-loading v-if="show" bg></m-loading>
    <div class="" v-if="!show">
      <div class="mar-t-20"></div>
      <m-cell title="新书速递">
        <span slot="cell-right">更多 <img src="../../../assets/images/ic_arrow_right_orange.png" alt=""></span>
      </m-cell>
      <m-swiper swipeid="swipe02" :loop="false" :autoplay="0" :pagination="false" :slidesPerView="3.3">
          <div class="swiper-slide isWidth" slot="swiper-con" v-for="v in newBooks">
            <!-- <router-link :to="{name:'details',params:{id:v.id}}"> -->
            <img :src="v.images.small" alt="" height="114">
            <p class="swiper-title">{{v.title}}</p>
            <p class="stars">
              <m-stars :stars="v.rating.average" v-if="v.rating.average"></m-stars>
              {{v.rating.average|countAverage}}
            </p>
          <!-- </router-link> -->
          </div>
      </m-swiper>
      <div class="mar-t-20"></div>
      <m-cell title="最受关注的虚构类图书">
        <span slot="cell-right">更多 <img src="../../../assets/images/ic_arrow_right_orange.png" alt=""></span>
      </m-cell>
      <m-swiper swipeid="swipe03" :loop="false" :autoplay="0" :pagination="false" :slidesPerView="3.3">
          <div class="swiper-slide isWidth" slot="swiper-con" v-for="v in fictionBooks">
            <router-link :to="{name:'details',params:{id:v.id}}">
              <img :src="v.image" alt="" height="114">
              <p class="swiper-title">{{v.title}}</p>
              <p class="stars">
                <m-stars :stars="v.rating.average" v-if="v.rating.average"></m-stars>
                {{v.rating.average|countAverage}}
              </p>
            </router-link>
          </div>
      </m-swiper>
      <div class="mar-t-20"></div>
      <m-cell title="最受关注的非虚构类图书">
        <span slot="cell-right">更多 <img src="../../../assets/images/ic_arrow_right_orange.png" alt=""></span>
      </m-cell>
      <m-swiper swipeid="swipe04" :loop="false" :autoplay="0" :pagination="false" :slidesPerView="3.3">
          <div class="swiper-slide isWidth" slot="swiper-con" v-for="v in realityBooks">
            <router-link :to="{name:'details',params:{id:v.id}}">
              <img :src="v.image" alt="" height="114">
              <p class="swiper-title">{{v.title}}</p>
              <p class="stars">
                <m-stars :stars="v.rating.average" v-if="v.rating.average"></m-stars>
                {{v.rating.average|countAverage}}
              </p>
            </router-link>
          </div>
      </m-swiper>
      <div class="mar-t-20"></div>
      <m-cell title="选图书"></m-cell>
      <p class="btn-box">
        <m-button small radio20  class="ma-r-10" isRouter id="小说" path="/home/audiobook/search/book">小说</m-button>
        <m-button small radio20  class="ma-r-10" isRouter id="爱情" path="/home/audiobook/search/book">爱情</m-button>
        <m-button small radio20  class="ma-r-10" isRouter id="历史" path="/home/audiobook/search/book">历史</m-button>
        <m-button small radio20  class="ma-r-10" isRouter id="外国文学" path="/home/audiobook/search/book">外国文学</m-button>
        <m-button small radio20  class="ma-r-10" isRouter id="青春" path="/home/audiobook/search/book">青春</m-button>
        <m-button small radio20  class="ma-r-10" isRouter id="励志" path="/home/audiobook/search/book">励志</m-button>
        <m-button small radio20  class="ma-r-10" isRouter id="随笔" path="/home/audiobook/search/book">随笔</m-button>
        <m-button small radio20  class="ma-r-10" isRouter id="传记" path="/home/audiobook/search/book">传记</m-button>
        <m-button small radio20  class="ma-r-10" isRouter id="推理" path="/home/audiobook/search/book">推理</m-button>
        <m-button small radio20  class="ma-r-10" isRouter id="旅行" path="/home/audiobook/search/book">旅行</m-button>
        <m-button small radio20  class="ma-r-10" isRouter id="奇幻" path="/home/audiobook/search/book">奇幻</m-button>
        <m-button small radio20  class="ma-r-10" isRouter id="经管" path="/home/audiobook/search/book">经管</m-button>
      </p>
    </div>
  </div>
</template>

<script>
import mCell from '../../../components/cell.vue'
import mSwiper from '../../../components/swiper.vue'
import mLoading from '../../../components/loading.vue'
import mMediaCell from '../../../components/media-cell.vue'
import mAdvertisement from '../../../components/advertisement.vue'
import mStars from '../../../components/stars.vue'
import mCard from '../../../components/card.vue'
import mCardItem from '../../../components/card-item.vue'
import mButton from '../../../components/button.vue'

Vue.filter('countAverage', function(val) {
    if(val<=0){
      val="暂无评分"
    }
    return val
});

export default {
  data(){
    return{
      newBooks:[],
      fictionBooks:[],
      realityBooks:[],
      show:true
    }
  },
  components:{
    mCell,
    mSwiper,
    mLoading,
    mMediaCell,
    mAdvertisement,
    mStars,
    mCard,
    mCardItem,
    mButton
  },
  mounted(){
    this.getHot();
  },
  methods:{
    getHot(){
      this.axios.get('/api/book/search?tag=新书').then((response) =>{
        this.newBooks=response.data.books;
        console.log(response.data.books)
        console.log(this.show)
      },(error) =>{
        console.log(error);
      });
      this.axios.get('/api/book/search?tag=虚构').then((response) =>{
        this.fictionBooks=response.data.books
        console.log(response.data.books)
      },(error) =>{
        console.log(error)
      });
      this.axios.get('/api/book/search?tag=非虚构').then((response) =>{
        this.realityBooks=response.data.books
        console.log(response.data.books)
      },(error) =>{
        console.log(error)
      })
    },
  },
  watch:{
    newBooks:function(val,oldval){
      this.show=true
      this.$nextTick(() =>{
        this.show=false
      })
    },
    fictionBooks:function(val,oldval){
      this.show=true
      this.$nextTick(() =>{
        this.show=false
      })
    },
    realityBooks:function(val,oldval){
      this.show=true
      this.$nextTick(() =>{
        this.show=false
      })
    }
  }
}
</script>

<style lang="less">
  .swipe04{
    padding-bottom: 20px;
  }
  .swiper-title{
    color: #333;
  }
  .stars{
    font-size: 12px;
    color: #aaa;
    line-height: 20px;
    height: 20px;
    text-align: left;
    padding-bottom: 10px;
  }
  .swiper-name{
    font-size: 14px;
    color: #333;
    padding-bottom: 10px;
  }
  .btn-box{
    text-align: left;
    padding: 15px;
    background: #fff;
    .ma-r-10{
      margin-right: 10px;
    }
  }
</style>
