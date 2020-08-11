<template>
  <div class="home">
    <NavBar><span slot="nav-center">首页</span></NavBar>
    <Tab :tab="tab" class="tabFlxed tabIndex" @tabClick="tabClick" ref="tab1" v-show="isTabFixed"></Tab>
    <!-- 第一部分 -->
    <!-- <HomeSwiper v-bind:banners="banners"></HomeSwiper>
    <HomeRecommend v-bind:recommends="recommends"></HomeRecommend>
    <Feature></Feature>
    <Tab :tab="tab" class="tabFlxed" @tabClick="tabClick"></Tab>
    <GoodsList :goods="goods[currentTab].list" ref="home"></GoodsList> -->

    <!-- 2.better-scroll-->
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll" :pullUpLoad="true" @pullingUp="loadMore">
      <HomeSwiper v-bind:banners="banners" @swiperImageLoad="swiperImageLoad"></HomeSwiper>
      <HomeRecommend v-bind:recommends="recommends"></HomeRecommend>
      <Feature></Feature>
      <Tab :tab="tab" class="tabFlxed" @tabClick="tabClick" ref="tab2"></Tab>
      <GoodsList :goods="goods[currentTab].list" ref="home"></GoodsList>
    </scroll>
    <!-- 2 end -->
    
     <!-- 组件不能click，要监听须加native -->
    <BackTop @click.native="backTopClick" v-show="isShow"></BackTop>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import Feature from './childComps/Feature'
import Tab from 'components/common/tab/Tab'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

import {getHomeData, getHomeGoods} from 'network/home'

//2 Scroll组件及
import BScroll from 'better-scroll'
import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    Feature,
    Tab,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      // 2.分开保存数据
      banners: [],
      recommends: [],
      tab:['流行', '新款', '精选'],
      currentTab: 'pop',
      isShow: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      //使用对象保存多个数据请求
      goods:{
        'pop': {page: 0,list:[]},
        'new': {page: 0,list:[]},
        'sell': {page: 0,list:[]},
      }
    }
  },
  //组件创建完成请求网络
  created() {
    // 1.请求多个网络数据
    getHomeData().then( res => {
      //console.log(res);
      //console.log('首页数据请求成功');
      
      //this.result = res;
      // 请求过来的数据比较多，分开保存

      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;

      console.log(this.banners);
      console.log(this.recommends);
    }),

    // 请求商品[流行，最新，热卖]数据
    // getHomeGoods('pop', 1).then( res => {
    //   console.log(res);
    // })
    
    // 解决三次重复调用问题,用methods抽离,this区分调用的getHomeGoods
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

    //监听item中图片加载完成 created不合适，应该是mouted()
    // $bus 为定义，需要在main.js中创建实例
    // this.$bus.$on('itemImageLoad', () => {
    //   // console.log($bus);
    //   this.scroll && this.$refs.scroll.scroll.refresh()
    // })
  },
    
  mounted() {
    this.$bus.$on('itemImageLoad', () => {
    // console.log($bus);
    //避免30次连续刷新，需要使用防抖韩式debounce,了解节流函数
    console.log('----');/* 测试refresh()执行次数 */
    this.scroll && this.$refs.scroll.scroll.refresh()
    })

    // 获取tabOffsetTop
    // $el 获取组件的元素
    // 须监听HomeSwiper里滚动图片是否加载完
    // 正确的使用在methods swiperImageLoad
    this.tabOffsetTop = this.$refs.tab2.$el.offsetTop
    console.log(this.tabOffsetTop);
  },
  
  destroyed() {
    console.log('测试销毁');
  },

  methods: {
    // 网络请求
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then( res => {
        console.log(res);
        console.log(type);
        //push数据到各自的数组，不能赋值操作
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        
        //必须调用方法才能加载下一次，加载下一页
        this.$refs.scroll.scroll.finishPullUp()
        // 封装，参考backTopClick()
        //refresh 图片加载完成后重新计算content高度
      })
    },

    // 事件
    tabClick(index){
      console.log(index)
      switch(index){
        case 0:
          this.currentTab = 'pop'
          break
        case 1:
          this.currentTab = 'news'
          break
        case 2:
          this.currentTab = 'sell'
          break
      }
      this.$refs.tab1.currentIndex = index;
      this.$refs.tab2.currentIndex = index;
    },

    backTopClick(){
      console.log('组件原生事件.native')
      // 1.scroll回到顶部
      // this.$refs.scroll.scroll.scrollTo(0, 0, 500)

      // 2.封装scroll,调用Scroll.vue中的scrollTo()方法
      this.$refs.scroll.scrollTo(0, 0 ,500)
    },

    contentScroll(position){
      // 判断是否显示返回顶部
      // console.log(position);
      this.isShow = -(position.y) > 1000

      // 判断是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
      console.log(this.isTabFixed);
    },

    loadMore(){
      // 获取当前打开的tab加载更多
      this.getHomeGoods(this.currentTab)
      //console.log('222');
      
      //必须调用方法才能加载下一次
    },
    
    // 防抖函数
    debounce(func, delay){
      
    },

    swiperImageLoad(){
      console.log(this.$refs.tab2.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tab2.$el.offsetTop;
      // 监听位置，动态改变吸顶样式
    }

  },
}
</script>

<style scoped>
.tabFlxed{background:#fff;}
/* 2. */
.home{height:100vh;}
.content{height:calc(100% - 93px);overflow: hidden;position:absolute;top:44px;}

/* tab 吸顶 */
.fixed{position:fixed;left:0;right:0;top:44px;}
.tabIndex{position:relative;z-index:9;}
</style>