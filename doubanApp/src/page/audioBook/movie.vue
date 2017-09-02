<template lang="html">
  <div class="page">
    <m-header class="page-header detail-header" :title="title" :fixed="true" :style="{background:dominant}" :border="true">
      <a href="javascript:;" slot="left">
        <img src="../../assets/images/ic_bar_back_white.png" alt="" class="m-icon-img"  @click="goHistory">
      </a>
    </m-header>
    <m-loading v-show="load"></m-loading>
    <div class="page-container movieDetail" v-show="!load" id="movieDetail">
      <div class="movieThumb" :style="{background:dominant}">
        <img class="movieThumb__img" :src="movie.images.large" alt="" />
      </div>
      <div class="movieInfo">
        <div class="movieInfo__text" @click="handleInfo">
          <h3 class="movieInfo__title">{{movie.title}}</h3>
          <p class="movieInfo__directors">导演：
            <span v-for="(daoyan,index) in movie.directors">
              <i v-if="index==movie.directors.length-1">{{daoyan.name}}</i>
              <i v-else>{{daoyan.name}} / </i>
            </span>
          </p>
          <p class="movieInfo__casts">主演：
            <span v-for="(zhuyan,index) in movie.casts">
              <i v-if="index==movie.casts.length-1">{{zhuyan.name}}</i>
              <i v-else>{{zhuyan.name}} / </i>
            </span>
          </p>
        </div>
        <div class="movieInfo__rating">
          <span class="movieInfo__num">{{movie.rating.average}}</span>
          <div class="movieInfo__star">
            <m-stars :stars="movie.rating.average" v-if="movie.rating.average"></m-stars>
          </div>
          <span class="movieInfo__count">
            {{movie.ratings_count}} 人
          </span>
        </div>
      </div>
      <div class="movieIntro">
        <h4 class="movieIntro__title">简介</h4>
        <p class="movieIntro__content" @click="intro_open">
          <span class="is_open">{{newSummary}}</span>
          <span class="movieIntro__open" v-if="is_more">{{is_open==false?'展开':'< 隐藏'}}</span>
        </p>
      </div>
      <div class="movieStarre">
        <m-swiper swipeid="swipe05" :loop="false" :autoplay="0" :pagination="false" :slidesPerView="2.7">
            <div class="swiper-slide isWidth" slot="swiper-con" v-for="v in movie.casts">
                <img :src="v.avatars.small" alt="">
              <p class="swiper-name">{{v.name}}</p>
            </div>
        </m-swiper>
      </div>
    </div>
  </div>
</template>

<script>
import mHeader from '../../components/header.vue'
import mLoading from '../../components/loading.vue'
import mStars from '../../components/stars.vue'
import RGBaster from '../../lib/rgbaster/rgbaster.js'
import mSwiper from '../../components/swiper.vue'

export default {
  data(){
    return {
      id:'',
      movie:'',
      title:'电影',
      load:true,
      dominant:'',
      newSummary:'',
      is_open:false,
      is_more:false
    }
  },
  components:{
    mHeader,
    mLoading,
    mStars,
    mSwiper
  },
  mounted:function(){
      this.id=this.$route.params.id
      this.getMovie()
  },
  beforeRouteEnter(to,from,next){
    next(vm=>{
      vm.load=true
      vm.id=vm.$route.params.id
      vm.getMovie()
    })
  },
  computed:{
    scrollHeight(){
     return 0
    }
  },
  watch:{
    movie:function(val,oldval){
      this.$nextTick(()=>{
        this.load=false
        this.scrollY()
      })
    }
  },
  methods:{
    goHistory:function(){
      this.$router.go(-1)
    },
    getMovie:function(){
      this.axios.get('/api/movie/subject/'+this.id).then((response) =>{
        this.movie=response.data
        this.getRgba(this.movie.images.large)
        this.summarySlice()
      },(error) =>{
        console.log(error)
        this.$router.go(-1)
      })
    },
    handleInfo(){
      // this.showInfo=true;
      // this.$nextTick(()=>{
      //   this.$router.push({ name: 'FilmInfo' })
      // })
    },
    scrollY:function(){
      var box=document.querySelector('#movieDetail')
      console.log(box)
       box.addEventListener('scroll', ()=>{
          if(box.scrollTop>350){
            this.title=this.movie.title;
          }else{
            this.title='电影'
          }
        })
    },
    intro_open:function(){
      this.newSummary=this.movie.summary;
      if(this.is_open){
        this.summarySlice();
      }
      this.is_open=!this.is_open;

    },
    summarySlice:function(){
      var summary=this.movie.summary;
      var len=summary.length;
      if(len>70){
        this.is_more=true;
        this.newSummary=summary.slice(0,70)+'...';
      }else{
        this.newSummary=this.movie.summary;
        this.is_more=false;
      }
    },
    getRgba:function(url){
      var vm=this;
      var img = document.createElement('img');
      img.setAttribute('src', url)
      img.addEventListener('load',()=>{
        RGBaster.colors(img, {
          exclude: [ 'rgb(255,255,255)', 'rgb(0,0,0)' ,'rgb(254,254,254)','rgb(254,255,255)'],
          paletteSize: 15,
          success: function(payload) {
            vm.dominant=payload.dominant;
            vm.setRgb(payload.dominant);
            console.log(payload)
          }
        });
      })
    },
    setRgb:function(RGB){
      var RgbValue = RGB.replace("rgb(", "").replace(")", "");
      var RgbValueArry = RgbValue.split(",");
      var grayLevel = RgbValueArry[0] * 0.299 + RgbValueArry[1] * 0.587 + RgbValueArry[2] * 0.114;
      if (grayLevel >= 192) {
      　　console.log(grayLevel+"浅色")
          for(var i=0;i<RgbValueArry.length;i++){
            RgbValueArry[i]=RgbValueArry[i]-70;
          }
         this.dominant="rgb("+RgbValueArry[0]+","+RgbValueArry[1]+","+RgbValueArry[2]+")";
      } else {
      　　console.log(grayLevel+"深色")
      }
    },
  }
}
</script>

<style lang="less">
@import '../../assets/less/var.less';

.page-header ~ div.page-container{
  bottom: 0;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  overflow: auto;
}
.page-header.detail-header{
  color: #fff;
  border-bottom: none;
  transition: all 1s;
  .mint-header-title{
    color: #fff;
    font-size: 16px;
  }
}
.movieThumb{
  height:290px;
  box-sizing: border-box;
  padding:20px;
  text-align: center;
  transition: all 1s;
}
.movieThumb__img{
  height: 100%;
}
.movieInfo{
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 25px 15px;
  background: #fff;
}
.movieInfo__text{
  flex: 1;
  box-sizing: border-box;
  padding-right: 50px;
}
.movieInfo__title{
  font-size: 27px;
  font-weight: bold;
}
.movieInfo__directors{
  font-size: 12px;
  color: #999;
  text-align: left;
  i{font-style: normal}
}
.movieInfo__casts{
font-size: 12px;
color: #999;
text-align: left;
i{font-style: normal}
}
.movieInfo__rating{
  width: 85px;
  height: 85px;
  box-shadow:0 0 10px #e9e8e5;
  text-align: center;
  justify-content: center;
}
.movieInfo__num{
  display: block;
  font-size: 17px;
  color: #333;
  font-weight: bold;
  text-align: center;
  padding-top:16px;
}
.movieInfo__star{
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.movieInfo__img{
  width: 10px;
  height: 10px;
}
.movieInfo__count{
  display: block;
  font-size: 12px;
  margin-top: 8px;
}
// movieIntro
.movieIntro{
  padding:15px;
  position: relative;
  background: #fff;
  &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      background: @line;
      transform: scaleY(0.5);
  }
  &__title{
    padding:15px 0;
    font-size: 17px;
    font-weight: normal;
    color: #333;
    text-align: left;
  }
  &__content{
    font-size:15px;
    text-align: left;
  }
  &__open{
    color: @defaultColor;
  }
}
.mask{
  position: absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  background: rgba(0,0,0,0.5);
  z-index: 10;
}
.movieStarre{
  padding-bottom: 20px;
  background: #fff;
}
</style>
