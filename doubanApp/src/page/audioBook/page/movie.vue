<template lang="html">
  <div class="">
    <m-loading v-if="show" bg></m-loading>
    <div class="" v-if="!show">
      <div class="mar-t-20"></div>
      <m-cell title="影院热映">
        <span slot="cell-right">更多 <img src="../../../assets/images/ic_arrow_right_orange.png" alt=""></span>
      </m-cell>
      <m-swiper swipeid="swipe02" :loop="false" :autoplay="0" :pagination="false" :slidesPerView="3.3">
          <div class="swiper-slide isWidth" slot="swiper-con" v-for="v in hot">
            <router-link :to="{name:'details',params:{id:v.id}}">
              <img :src="v.images.small" alt="">
            <p class="swiper-title">{{v.title}}</p>
            <p class="stars">
              <m-stars :stars="v.rating.average" v-if="v.rating.average"></m-stars>
              {{v.rating.average|countAverage}}
            </p>
          </router-link>
          </div>
      </m-swiper>
      <div class="mar-t-20"></div>
      <m-advertisement>
        <img src="../../../assets/images/01.jpg" alt="" slot="image">
        <span slot="title">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</span>
      </m-advertisement>
      <div class="mar-t-20"></div>
      <m-cell title="影院即将上映">
        <span slot="cell-right">更多 <img src="../../../assets/images/ic_arrow_right_orange.png" alt=""></span>
      </m-cell>
      <m-swiper swipeid="swipe03" :loop="false" :autoplay="0" :pagination="false" :slidesPerView="3.3">
          <div class="swiper-slide isWidth" slot="swiper-con" v-for="v in soon">
            <router-link :to="{name:'details',params:{id:v.id}}">
              <img :src="v.images.small" alt="">
              <p class="swiper-title">{{v.title}}</p>
              <p class="stars">
                <m-stars :stars="v.rating.average" v-if="v.rating.average"></m-stars>
                {{v.rating.average|countAverage}}
              </p>
            </router-link>
          </div>
      </m-swiper>
      <div class="mar-t-20"></div>
      <m-advertisement>
        <img src="../../../assets/images/01.jpg" alt="" slot="image">
        <span slot="title">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</span>
      </m-advertisement>
      <div class="mar-t-20"></div>
      <m-cell title="精选榜单"></m-cell>
      <m-swiper swipeid="swipe04" :loop="false" :autoplay="0" :pagination="false" :slidesPerView="2.3">
          <div class="swiper-slide isWidth" slot="swiper-con">
              <img src="../../../assets/images/jingxuan01.jpg" alt="">
          </div>
          <div class="swiper-slide isWidth" slot="swiper-con">
              <img src="../../../assets/images/jingxuan02.jpg" alt="">
          </div>
          <div class="swiper-slide isWidth" slot="swiper-con">
              <img src="../../../assets/images/jingxuan03.jpg" alt="">
          </div>
          <div class="swiper-slide isWidth" slot="swiper-con">
              <img src="../../../assets/images/jingxuan04.jpg" alt="">
          </div>
      </m-swiper>
      <div class="mar-t-20"></div>
      <m-cell title="今日推荐影人">
        <span slot="cell-right">更多 <img src="../../../assets/images/ic_arrow_right_orange.png" alt=""></span>
      </m-cell>
      <m-swiper swipeid="swipe05" :loop="false" :autoplay="0" :pagination="false" :slidesPerView="3.3">
          <div class="swiper-slide isWidth" slot="swiper-con" v-for="v in soon" v-if="v.casts.length">
              <img :src="v.casts[1].avatars.small" alt="">
            <p class="swiper-name">{{v.casts[1].name}}</p>
          </div>
      </m-swiper>
      <div class="mar-t-20"></div>
      <m-cell title="你可能感兴趣"></m-cell>
      <m-card>
        <m-card-item v-for="v in weekly">
          <img :src="v.images.small" alt="" slot="image" class="image">
          <p slot="movieName" class="moviesName">{{v.title}}</p>
          <p slot="cardStars" class="stars">
            <m-stars :stars="v.rating.average" v-if="v.rating.average"></m-stars>
            {{v.rating.average|countAverage}}
          </p>
        </m-card-item>
      </m-card>
      <div class="mar-t-20"></div>
      <m-cell title="选电影"></m-cell>
      <p class="btn-box">
        <m-button small radio20  class="ma-r-10" isRouter id="剧情" path="/home/audiobook/search/movie">剧情</m-button>
        <m-button small radio20  class="ma-r-10" isRouter id="爱情" path="/home/audiobook/search/movie">爱情</m-button>
        <m-button small radio20  class="ma-r-10" isRouter id="喜剧" path="/home/audiobook/search/movie">喜剧</m-button>
        <m-button small radio20  class="ma-r-10" isRouter id="科幻" path="/home/audiobook/search/movie">科幻</m-button>
        <m-button small radio20  class="ma-r-10" isRouter id="动作" path="/home/audiobook/search/movie">动作</m-button>
        <m-button small radio20  class="ma-r-10" isRouter id="悬疑" path="/home/audiobook/search/movie">悬疑</m-button>
        <m-button small radio20  class="ma-r-10" isRouter id="治愈" path="/home/audiobook/search/movie">治愈</m-button>
        <m-button small radio20  class="ma-r-10" isRouter id="青春" path="/home/audiobook/search/movie">青春</m-button>
        <m-button small radio20  class="ma-r-10" isRouter id="文艺" path="/home/audiobook/search/movie">文艺</m-button>
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
    val=val.toFixed(1);
    if(val<=0){
      val="暂无评分"
    }
    return val
});

export default {
  data(){
    return{
      hot:[],
      soon:[],
      weekly:[],
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
      this.axios.get('/api/movie/in_theaters').then((response) =>{
        this.hot=response.data.subjects;
      },(error) =>{
        console.log(error);
      });
      this.axios.get('/api/movie/coming_soon').then((response) =>{
        this.soon=response.data.subjects
      },(error) =>{
        console.log(error)
      });
      this.axios.get('/api/movie/top250').then((response) =>{
        this.weekly=response.data.subjects
      },(error) =>{
        console.log(error)
      })
    },
  },
  watch:{
    hot:function(val,oldval){
      this.show=true
      this.$nextTick(() =>{
        this.show=false
      })
    },
    soon:function(val,oldval){
      this.show=true
      this.$nextTick(() =>{
        this.show=false
      })
    },
    weekly:function(val,oldval){
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
