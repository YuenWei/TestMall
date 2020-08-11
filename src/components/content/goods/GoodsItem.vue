<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.show.img" @load="imageLoad()">
    <p>{{goodsItem.title}}</p>
    <span><b>价格: </b>{{goodsItem.price}}</span>
    <span><b>收藏: </b>{{goodsItem.cfav}}</span>
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  data() {
    return {}
  },
  props: {
    goodsItem:{
      type: Object,
    }
  },
  methods: {
    imageLoad(){
      //$bus 事件总线发射到home
      this.$bus.$emit('itemImageLoad')
    },

    itemClick(){
      console.log('跳转到详情页');
      // 路由传递，动态路由传递
      // .push
      console.log(this.goodsItem.iid);
      this.$router.push('/detail/' + this.goodsItem.iid)
      // .query
      // this.$router.push({
      //   path: '/detail',
      //   query: {

      //   }
      // })
    }
  },
}
</script>

<style scoped>
.goods-item{width:calc(50% - 8px);margin-bottom:1rem;}
.goods-item p{margin-bottom:.5rem;font-size:12px;}
.goods-item span{width:calc(50% - .5rem);display:inline-block;margin-right:.5rem;}
.goods-item span b{color:#9e9e9e;font-weight:normal;}
.goods-item img{width:100%;}
</style>