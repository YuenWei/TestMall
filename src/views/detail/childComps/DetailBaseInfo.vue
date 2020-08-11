<template>
  <div class="goods-info">
    <div class="goods-price">
      <strong>{{goods.price}}</strong>
      <span><del>{{goods.oldPrice}}</del></span>
      <i :style="{background:goods.discountBgColor}">{{goods.discount}}</i>
    </div>
    <div class="goods-title">{{goods.title}}</div>
    <div class="goods-columns">
      <span v-for="item in goods.columns" :key="item.index">{{item}}</span>
    </div>
    <div class="goods-services">
      <span v-for="item in goods.services" :key="item.index">
        <img :src="item.icon">
        <b>{{item.name}}</b>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object
    }
  }
}
</script>

<style scoped>
.goods-info{margin:.5rem;}
.goods-price strong{font-weight:bold;font-size:30px;color:#f2270c;}
.goods-price  span{margin-left:.5rem;}
.goods-price i{font-style:normal;font-size:12px;padding:2px 5px;color:#fff;margin-left:.5rem;border-radius:4px;}
.goods-title{color:#333;font-size:16px;font-weight:bold;}
.goods-columns{display:flex;margin:1rem 0;padding:1rem 0;border-top:1px solid #f2f2f2;border-bottom:1px solid #f2f2f2;}
.goods-columns span{flex:1;}
.goods-columns span:nth-child(2){text-align:center;}
.goods-columns span:nth-child(3){text-align:right;}
.goods-services{font-size:12px;display:inline-block;}
.goods-services span{margin-right:1rem;float:left;}
.goods-services img{height:11px;float:left;margin-top:3px;margin-right:2px;}
.goods-services b{float:left;font-weight:normal;}
</style>