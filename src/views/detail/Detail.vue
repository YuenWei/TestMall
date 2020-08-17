<template>
  <div class="detail">
    <DetailNavBar ref="nav" class="detail-nav" @navClick="navClick"></DetailNavBar>
    <Scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailComment ref="comment" :goodsCommentNum="goodsCommentNum" :goodsComments="goodsComments"></DetailComment>
      <DetailParams ref="params" :params="params"></DetailParams>
      <DetailRecommend ref="recommend"></DetailRecommend><!-- 推荐放到商品详细图片之前，避免图片加载造成的offsetTop定位错误 -->
      <DetailInfo :detailInfo="detailInfo" @imageLoad="imageLoad"></DetailInfo>
    </Scroll>
    <DetailBottomBar @addCart="addToCart"></DetailBottomBar>
     <BackTop @click.native="backTopClick" v-show="isShow"></BackTop>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import Scroll from 'components/common/scroll/Scroll'
import DetailInfo from './childComps/DetailInfo'
import DetailParams from './childComps/DetailParams'
import DetailComment from './childComps/DetailComment'
import DetailRecommend from './childComps/DetailRecommend'
import DetailBottomBar from './childComps/DetailBottomBar'
import BackTop from 'components/content/backTop/BackTop'

import {backTopMixin} from 'common/mixin'
import {BACKTOP_DISTANCE} from 'common/const'

import {getDetail, Goods, Shop, Params, getRecommend} from 'network/detail'

export default {
  name: 'Detail',
  mixins: [backTopMixin],
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      // goodsParams: {},
      params: {},
      goodsCommentNum: 0,
      goodsComments:[],
      scrollY: [],
      getScrollY: null,
      positionY: 0, //监听scroll内滚动位置
      currentScrollIndex: null,
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailParams,
    Scroll,
    DetailInfo,
    DetailComment,
    DetailRecommend,
    DetailBottomBar,
    BackTop
  },
  created() {
    // 1.保存传入的商品ID
    this.id = this.$route.params.id

    // 2.根据ID请求商品详细数据
    getDetail(this.id).then( res => {
      console.log(res);
      // 3.数据分离
      // 3.1滚动图片
      this.topImages = res.result.itemInfo.topImages

      // 3.2构造器获取商品描述3类不同的数据
      this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
      console.log(this.goods);

      // 3.3构造器获取店铺信息
      this.shop = new Shop(res.result.shopInfo)
      console.log(this.shop);

      // 3.4直接获取详细数据，desc,images
      this.detailInfo = res.result.detailInfo
      // 导致问题，图片未加载完，影响betterScroll高度监听

      // 3.5获取商品参数数据（尺码）
      // 3.5.1直接获取itemParams对象
      // this.goodsParams = res.result.itemParams
      // 3.5.2构造器方式
      this.params =  new Params(res.result.itemParams)
      console.log(this.params);

      // 3.6获取评论信息，有些商品没有评论，需要做判断
      if(res.result.rate.cRate) {
        this.goodsCommentNum = res.result.rate.cRate
        this.goodsComments = res.result.rate.list
        console.log(this.goodsComments);
      }
      
      // 防抖处理导航offsetTop[]
      // this.getScrollY = debouce(() =>{
      //   this.scrollY = []
      //   this.scrollY.push(0);
      //   this.scrollY.push(this.$refs.params.$el.offsetTop);
      //   this.scrollY.push(this.$refs.comment.$el.offsetTop);
      //   this.scrollY.push(this.$refs.recommend.$el.offsetTop);
      //   console.log(this.scrollY)
      // })

    // 4.获取推荐数据
    // getRecommend().then(res => {
    //   console.log(res);
    // })

    // 5.导航栏滚动
    // this.$nextTick( () => {
    // })
    
    })
  },
  mounted() {
  },
  updated() {
    // 为保证在图片加载完获取到正确高度
      // this.scrollY.push(0);
      // this.scrollY.push(this.$refs.comment.$el.offsetTop);
      // this.scrollY.push(this.$refs.params.$el.offsetTop);
      // this.scrollY.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.scrollY)
  },
  methods: {
    //获取顶部导航的offSetTop,push到scrollY数组
    navClick(index){
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.scrollY[index], 500)
    },
    
    imageLoad(){
      this.$refs.scroll.scroll.refresh()

      // 在created(),mounted(),update()都不合适
      // // 为保证在图片加载完获取到正确高度
      this.scrollY = []
      this.scrollY.push(0);
      this.scrollY.push(this.$refs.comment.$el.offsetTop);
      this.scrollY.push(this.$refs.params.$el.offsetTop);
      this.scrollY.push(this.$refs.recommend.$el.offsetTop);
      console.log(this.scrollY)

      // 此处调用频繁，加入防抖函数getScrollY()
      // this.getScrollY();
    },

    // 6.根据内容滚动切换导航栏
    contentScroll(position) {
      this.positionY = -(position.y)
      console.log(this.positionY);

      // 判断显示返回顶部
      this.isShow = -(position.y) > BACKTOP_DISTANCE

      // 导航offsetTop[0, a, b, c]
      // 0 < positionY < a 在 index[0]
      // a < positionY < b 在 index[1]
      // b < positionY < c 在 index[2]
      // c < positionY  在 index[3]
      
      // for循环到index[3]是，无法判断
      let lenght = this.scrollY.length
      for (let i = 0; i < lenght; i++) {
        //case1
        // if(this.positionY >= this.scrollY[i] && this.positionY < this.scrollY[i+1]){
        //   this.currentScrollIndex = i;
        //   console.log(this.currentScrollIndex);
        //   // 将此处的i传到DetailNavBar
        //   this.$refs.nav.currentIndex = this.currentScrollIndex
        // }  

        // if i=3是判断错误，须改进if条件判断
        //  if((i < lenght-1 && this.positionY >= this.scrollY[i] && this.positionY < this.scrollY[i+1]) || (i === lenght-1 && this.positionY >= this.scrollY[i]))
        // 为了方式频繁判断，当 当前值！=i时，在设置index[i]
        // case2
        if(this.currentScrollIndex !== i && ((i < lenght-1 && this.positionY >= this.scrollY[i] && this.positionY < this.scrollY[i+1]) || (i === lenght-1 && this.positionY >= this.scrollY[i]))){
          this.currentScrollIndex = i;
          console.log(this.currentScrollIndex);
          // 将此处的i传到DetailNavBar
          this.$refs.nav.currentIndex = this.currentScrollIndex
        }

        // case3
        // scrollY[].push(Number.MAX_VALUE)
      }

    },
    
    // home里存在返回顶部，复制到此处重复代码太多
    // 使用混入减少代码重新
    // backTopClick(){
    //   console.log('组件原生事件.native')
    //   // 1.scroll回到顶部
    //   // this.$refs.scroll.scroll.scrollTo(0, 0, 500)

    //   // 2.封装scroll,调用Scroll.vue中的scrollTo()方法
    //   this.$refs.scroll.scrollTo(0, 0 ,500)
    // },
    // contentScroll(position){
    //   // 判断是否显示返回顶部
    //   // console.log(position);
    //   this.isShow = -(position.y) > BACKTOP_DISTANCE
    // },

    addToCart(){
      // 1.从当前data获取购物车需要展示的信息(缩略图，名称，描述，价格，件数=购物车按钮点击次数)
      const product = {};
      product.id = this.id;
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.count = 0
      console.log(product);

      // 2.使用Vuex在多个界面共享购物车商品信息
      // 修改state>goodsList 须在mutations:{}
      this.$store.commit('addCart', product)
    }

  },
}
</script>

<style  scoped>
.detail{height:100vh;position:relative;z-index:9;background:#fff;overflow:hidden;}
.content{height:calc(100% - 94px);position:absolute;top:44px;}
.detail-nav{position:relative;z-index:9;;}
</style>