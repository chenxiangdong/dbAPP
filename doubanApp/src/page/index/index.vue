<template lang="html">
  <div class="index">
    <m-header title="豆瓣app" :bg="true" :fixed="true">
      <!-- <a href="javascript:;" slot="left"><img class="m-icon-img" src="../../assets/images/ic_bar_back_white.png"/>返回</a>
      <a href="javascript:;" slot="right">分享</a> -->
    </m-header>
    <div class="page-content">
      <m-swiper swipeid="swipe01" :loop="false" paginationType="fraction" :autoplay="2000">
          <div class="swiper-slide slide01" slot="swiper-con"><img src="../../assets/images/01.jpg" alt=""></div>
          <div class="swiper-slide slide02" slot="swiper-con"><img src="../../assets/images/02.jpg" alt=""></div>
          <div class="swiper-slide slide03" slot="swiper-con"><img src="../../assets/images/03.jpg" alt=""></div>
      </m-swiper>
      <m-cell title="推荐" recommend v-if="hotData.length>0"></m-cell>
      <m-cell-media :author="item.target.author.name" :column="item.source_cn" :img="item.target.cover_url" v-for="(item,index) in hotData":key="item.id">
        <span slot="title">{{item.title}}</span>
        <span slot="describe">{{item.target.desc}}</span>
      </m-cell-media>
      <m-cell title="热门" hot v-if="recommendData.length>0"></m-cell>
      <m-cell-media :author="item.target.author.name" :column="item.source_cn" :img="item.target.cover_url" v-for="(item,index) in recommendData":key="item.id">
        <span slot="title">{{item.title}}</span>
        <span slot="describe">{{item.target.desc}}</span>
      </m-cell-media>
    </div>
  </div>
</template>

<script>

import mHeader from '../../components/header.vue'
import mSwiper from '../../components/swiper.vue'
import mCell from '../../components/cell.vue'
import mCellMedia from '../../components/media-cell.vue'

export default {
  data () {
    return {
      recommendData:[],
      hotData:[]
    }
  },
  components:{
    mHeader,
    mSwiper,
    mCell,
    mCellMedia
  },
  mounted(){
    this.fetchData()
  },
  methods:{
    fetchData(){
      this.axios.get('/api/homeData').then((response) => {
        let data = response.data.data.recommend_feeds;
        let recommend = [];
          let hot = [];
        for(var i in data){
          if (data[i].card && data[i].card.name == '为你推荐') {
              recommend.push(data[i]);
            } else {
              hot.push(data[i]);
            }
        }
        this.recommendData=recommend;
        this.hotData=hot
      },(error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="less">
.index{
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 51px;
}
</style>
