<template>
  <div class="shop-info">
    <div class="shop-logo">
      <img :src="shop.logo">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-num">
      <span><h4>{{shop.sells}}</h4><i>销售量</i></span>
      <span><h4>{{shop.goodsCount}}</h4><i>宝贝数</i></span>
    </div>
    <div class="shop-score">
      <ul>
         <li v-for="item in shop.score" :key="item.index">
           <span>{{item.name}}</span>
           <span :class="{'better':item.isBetter}">{{item.score}}</span>
           <span v-if="item.isBetter" :class="{'better': item.isBetter}">高</span>
           <span v-else>低</span>
        </li>
      </ul>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  components: {
  },
  props: {
    shop: {
      type: Object
    }
  },
}
</script>

<style  scoped>
.shop-info{width:calc(100% - 2rem);float:left;padding:1rem;border-top:8px solid #f2f2f2;}
.shop-logo{width:100%;float:left;}
.shop-logo img{width:32px;float:left;}
.shop-logo span{float:left;margin-left:1rem;margin-top:8px;color:#333;font-weight:bold;}
.shop-num,.shop-score{width:50%;float:left;padding:2rem 0;}
.shop-num span{width:50%;display:inline-block;text-align:center;}
.shop-num span h4{font-weight:bold;color:#666;}
.shop-num span i{font-style:normal;}
.shop-score{font-size:12px;}
.shop-score ul li{margin-bottom:.5rem;}
.shop-score span{margin-right:1rem;}
.shop-score span:nth-child(2){width:25px;display:inline-block;color:#f2270c;}
.shop-score span:nth-child(3){background:#f2270c;color:#fff;padding:2px;border-radius:2px;}
.shop-score span.better{color:#22863a}
.shop-score span:nth-child(3).better{background:#22863a;color:#fff;}
</style>