<template lang="html">
  <div class="search-box">
    <m-search class="search-head header-animate" name="tag" :bg="false" :fixed="true" placeholder="影视、图书、唱片、活动等" v-on:cSeach="search" :class="{'header-animate-top':titleShow,'header-animate-bottom':!titleShow}">
      <a href="javascript:;" slot="left"><img src="../../assets/images/ic_actionbar_search_icon.png" alt="" class="m-icon-img-r"></a>
      <a href="javascript:;" slot="right">
        <span>搜</span>
      </a>
    </m-search>
    <m-header class="header-animate" title="搜索结果" :bg="true" :fixed="true" :class="{'header-animate-top':!titleShow,'header-animate-bottom':titleShow}">
      <a href="javascript:;" slot="left">
        <img src="../../assets/images/ic_bar_back_white.png" alt="" class="m-icon-img"  @click="goBack">
      </a>
    </m-header>
    <div class="search-bottom" @click="goHistory">
      <m-loading bg v-if="load"></m-loading>
      <m-cell-movie v-for="v in filterMovies" :img="v.images.small" v-if="listShow" name="details" :id="v.id">
        <span slot="title">{{v.title}}</span>
        <p slot="stars">
          <m-stars :stars="v.rating.average" v-if="v.rating.average"></m-stars>
          {{v.rating.average|countAverage}}
        </p>
        <p slot="actor" >
          <span v-for="(a,i) in v.directors" v-if="i<2">{{a.name}}<span v-if="i<1&&v.directors.length>1">/</span></span>
        </p>
      </m-cell-movie>
      <m-cell-movie v-for="v in filterBooks" :img="v.images.small" v-if="listShow" name="intro" :id="v.id">
        <span slot="title">{{v.title}}</span>
        <p slot="stars">
          <m-stars :stars="v.rating.average" v-if="v.rating.average"></m-stars>
          {{v.rating.average|countAverage}}
        </p>
        <p slot="actor" >
          <span v-for="(a,i) in v.author" v-if="i<2">{{a}}<span v-if="i<1&&v.author.length>1">/</span></span>
        </p>
      </m-cell-movie>
    </div>
  </div>
</template>

<script>
import mHeader from '../../components/header.vue'
import mSearch from '../../components/search.vue'
import mLoading from'../../components/loading.vue'
import mCellMovie from '../../components/movie-cell.vue'
import mStars from '../../components/stars.vue'


Vue.filter('countAverage', function(val) {
    // val=val.toFixed(1);
    if(val<=0){
      val="暂无评分"
    }
    return val
});
export default {
  data(){
    return {
      id:'',
      back:true,
      load:false,
      filterMovies:[],
      filterBooks:[],
      listShow:false,
      titleShow:false
    }
  },
  components:{
    mSearch,
    mLoading,
    mCellMovie,
    mStars,
    mHeader
  },
  mounted:function(){
      this.id=this.$route.params.id
      this.getData()
  },
  beforeRouteEnter(to,from,next){
    next(vm=>{
      vm.id=vm.$route.params.id
      if(this.$route.query.q){
        vm.getData()
      }
    })
  },
  methods:{
    goHistory:function(){
      if(this.back){
        this.$router.go(-1)
      }
    },
    goBack:function(){
      this.$router.go(-1)
      this.back=true
      this.load=false
      this.listShow=false
      this.titleShow=false
    },
    search:function(query){
      this.back=false;
      this.load=true;
      this.$router.push({
        name:'search',
        query:{
          q:query
        }
      })
      this.getData()
    },
    getData:function(){
      if(this.$route.query.q){
        this.load=true;
        this.axios.get('/api/'+this.id+'/search?q='+this.$route.query.q).then((response) =>{
          if(this.id=='movie'){
            this.filterMovies=response.data.subjects
          }
          else if(this.id=='book'){
            this.filterBooks=response.data.books
          }
          this.load=false;
          this.listShow=true
          this.titleShow=true
          this.back=false
        },(error) =>{
          console.log(error)
        })
      }
    }
  }
}
</script>

<style lang="less">
.search-box{
  height: 100%;
  .search-head{
    border-bottom: 1px solid #ddd;
  }
  .search-bottom{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
}
.header-animate{
  transition: all .3s ease;
}
.header-animate-top{
  transform: translateY(-44px);
}
.header-animate-bottom{
  transform: translateY(0);
}

</style>
