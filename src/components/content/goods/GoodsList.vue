<template>
  <div class="goods-list">
    <GoodsItem v-for="item in goods" :key="item.index" :goodsItem="item"></GoodsItem>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'

export default {
  name: 'GoodsList',
  props: {
    goods:{
      type: Array
    }
  },
  components: {
    GoodsItem
  }
}
</script>

<style scoped>
.goods-list{display:flex;flex-wrap: wrap;justify-content:space-around;padding:0 8px;}
</style>