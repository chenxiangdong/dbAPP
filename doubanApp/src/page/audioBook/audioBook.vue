<template lang="html">
  <div class="audioBook">
    <m-header title="书影音" :bg="false" :fixed="true" :value="Lselect" :name="'search'">
      <a href="javascript:;" slot="right">
        <img src="../../assets/images/ic_actionbar_search_icon.png" alt="" class="m-icon-img-r"></a>
    </m-header>
    <m-list v-model="Lselect" bg borderBottom>
      <m-list-item id="movie" isRouter>
        <span slot="list-item-content">电影</span>
      </m-list-item>
      <m-list-item id="book" isRouter>
        <span slot="list-item-content">读书</span>
      </m-list-item>
      <m-list-item id="city" isRouter>
        <span slot="list-item-content">同城</span>
      </m-list-item>
      <m-list-item id="music" isRouter>
        <span slot="list-item-content">音乐</span>
      </m-list-item>
    </m-list>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import mHeader from '../../components/header.vue'
import mList from '../../components/list.vue'
import mListItem from '../../components/list-item.vue'

export default {
  data(){
    return {
      Lselect:'movie'
    }
  },
  components:{
    mHeader,
    mList,
    mListItem
  }
}
</script>

<style lang="less">
.audioBook{
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 51px;
}
.audioBook-list{
  width: 100%;
  height: 40px;
  border-top: 1px solid #ddd;
  background: #fff;
  display: table;
}
.audioBook-list li{
  display: table-cell;
}
.audioBook-list li a{
  color: #999;
  line-height: 40px;
}
</style>
