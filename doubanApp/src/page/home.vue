<template lang="html">
  <div>
    <router-view></router-view>
    <m-tabbar v-model="select">
      <m-tabbar-item id='index' isRouter>
        <img src="../assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal">
        <img src="../assets/images/ic_tab_home_active.png" alt="" slot="icon-active">
        首页
      </m-tabbar-item>
      <m-tabbar-item id='audiobook' isRouter>
        <img src="../assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal">
        <img src="../assets/images/ic_tab_subject_active.png" alt="" slot="icon-active">
        书影音
      </m-tabbar-item>
      <m-tabbar-item id='broadcast' isRouter>
        <img src="../assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal">
        <img src="../assets/images/ic_tab_status_active.png" alt="" slot="icon-active">
        广播
      </m-tabbar-item>
       <m-tabbar-item id='mine' isRouter>
        <img src="../assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal">
        <img src="../assets/images/ic_tab_profile_active.png" alt="" slot="icon-active">
        我的
      </m-tabbar-item>
    </m-tabbar>
  </div>
</template>

<script>
import mTabbar from '../components/tabbar.vue'
import mTabbarItem from '../components/tabbar-item.vue'

export default {
  data(){
    return {
      select: "index"
    }
  },
  components: {
    mTabbar,
    mTabbarItem
  }
}
</script>

<style lang="css">
</style>
