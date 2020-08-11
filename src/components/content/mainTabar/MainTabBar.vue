<template>
    <TabBar>
      <TabBarItem path="/home">
        <template>
          <img slot="item-icon" src="~assets/images/tabbar/home.svg" >
        </template>
        <template>
          <img slot="item-icon-active" src="~assets/images/tabbar/home-fill.svg" >
        </template>
        <template>
          <h4 slot="item-text">首页</h4>
        </template>
      </TabBarItem>

      <TabBarItem path="/cate">
        <template>
          <img slot="item-icon" src="~assets/images/tabbar/cate.svg" >
        </template>
        <template>
          <img slot="item-icon-active" src="~assets/images/tabbar/cate-fill.svg" >
        </template>
        <template>
          <h4 slot="item-text">分类</h4>
        </template>
      </TabBarItem>

      <TabBarItem path="/cart">
        <template>
          <img slot="item-icon" src="~assets/images/tabbar/cart.svg" >
        </template>
        <template>
          <img slot="item-icon-active" src="~assets/images/tabbar/cart-fill.svg" >
        </template>
        <template>
          <h4 slot="item-text">购物车</h4>
        </template>
      </TabBarItem>

      <TabBarItem path="/my">
        <template>
          <img slot="item-icon" src="~assets/images/tabbar/my.svg" >
        </template>
         <template>
          <img slot="item-icon-active" src="~assets/images/tabbar/my-fill.svg" >
        </template>
        <template>
          <h4 slot="item-text">我的</h4>
        </template>
      </TabBarItem>

    </TabBar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem,
  }
}
</script>

<style>
  .active{color:#0287FF}
</style>