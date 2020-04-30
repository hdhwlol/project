<template>
  <tabbar>
    <baritem path='/home'>
      <img src="~assets/images/tabbar/home_active.svg" slot="imageActive">
      <img src="~assets/images/tabbar/home.svg" slot="image">
      <span slot="title">首页</span>
    </baritem>
    <baritem path='/category'>
      <img src="~assets/images/tabbar/category_active.svg" slot="imageActive">
      <img src="~assets/images/tabbar/category.svg" slot="image">
      <span slot="title">分类</span>
    </baritem>
    <baritem path='/shopcart'>
      <img src="~assets/images/tabbar/shopcart_active.svg" slot="imageActive">
      <img src="~assets/images/tabbar/shopcart.svg" slot="image">
      <span slot="title">购物车</span>
    </baritem>
    <baritem path='/profile'>
      <img src="~assets/images/tabbar/profile_active.svg" slot="imageActive">
      <img src="~assets/images/tabbar/profile.svg" slot="image">
      <span slot="title">我的</span>
    </baritem>
  </tabbar>
</template>
<script>
import baritem from 'components/common/baritem'
import tabbar from 'components/common/tabbar'
export default {
  name:'mainbar',
  components:{
    tabbar,
    baritem
  }
}
</script>

