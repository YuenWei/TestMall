<template>
  <div class="bottom-bar">
    <div class="bottom-bar-left">
      <span><img src="~assets/images/common/customer.svg"><h3>客服</h3></span>
      <span><img src="~assets/images/common/store.svg"><h3>店铺</h3></span>
      <span><img src="~assets/images/common/favorite.svg"><h3>收藏</h3></span>
    </div>
    <div class="bottom-bar-right">
      <span class="cart" @click="addToCart">加入购物车</span>
      <span class="buy">立即购买</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addToCart(){
      this.$emit('addCart')
    }
  },
}
</script>

<style>
.bottom-bar{width:100%;height:49px;background:#fff;position:fixed;bottom:0;box-shadow:0 -1px 1px #f2f2f2;}
.bottom-bar img{width:24px;height:24px;margin-top:6px;}
.bottom-bar-left{width:42%;display:flex;float:left;}
.bottom-bar-left span,.bottom-bar-right span{flex:1;text-align:center}
.bottom-bar-left span h3,.bottom-bar-right span h3{font-size:12px;color:#000;margin-top:-4px;}
.bottom-bar-right{width:58%;display:flex;float:left;}
.bottom-bar-right span{height:38px;line-height:38px;width:calc(50% - 1rem);border-radius:20px;margin:5.5px .5rem;font-size:13px;color:#fff;font-weight:bold;}
.bottom-bar-right span.cart{background:#f2140c;}
.bottom-bar-right span.buy{background:#ffba0d;}
</style>