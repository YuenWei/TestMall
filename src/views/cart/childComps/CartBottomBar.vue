<template>
  <div class="cart-bottom-bar" v-if="length">
    <!-- {{list}} getters方式获取商品信息 -->
    <div class="cart-item-check" @click="checkAllClick">
      <i v-if="isAllChecked" ><img src="~assets/images/common/checkbox-fill.svg"></i>
      <i v-else><img src="~assets/images/common/checkbox.svg"></i>
    </div>
    <div class="total-price">
        <span>合计：¥ <b>{{totalPrice}}</b></span>
        <span class="goCalc">去结算(<strong>{{goCalc}}</strong>)</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartBottomBar',
  data() {
    return {
      
    }
  },
  computed: {
    length(){
      return this.$store.getters.cartLength
    },
    totalPrice(){
      // 计算选中的商品总价
      // console.log(this.$store.state.goodsList)
      const cartList = this.$store.state.goodsList
      return cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0)
      
      // 教程示例getters
      // const cartList = this.$store.getters.cartList;
      //   return cartList.filter(item => {
      //     return item.checked
      //   }).reduce((preValue, item) => {
      //     return preValue + item.count * item.newPrice
      //   }, 0).toFixed(2)
    },

    // 全选，将多有商品列表vuex的checked设置为ture
    // 1.默认加入后全选状态
    isAllChecked(){
      // 1.获取cheeked==false的长度
      // console.log(this.$store.state.goodsList.filter(item => !item.checked).length);
      // return !(this.$store.state.goodsList.filter(item => !item.checked).length)
      // filter过滤数组所有，存在重复问

      // find找到一个就停止
      return !(this.$store.state.goodsList.find(item => !item.checked))
    },


    // 去结算，选中商品数量结算
    goCalc(){
      return this.$store.state.goodsList.filter(item => item.checked).length
    }

  },
  methods: {
    checkAllClick(){
      if(this.isAllChecked){
        console.log('已全选，将checked设为false')
        this.$store.state.goodsList.forEach(item => item.checked = false)
        console.log(this.$store.state.goodsList);
      }else{
        console.log('没有全选，将checked设为true')
        this.$store.state.goodsList.forEach(item => item.checked = true)
        console.log(this.$store.state.goodsList);
      }
    }
  },
}
</script>

<style scoped>
.cart-bottom-bar{width:100%;height:50px;background:#fff;position:absolute;bottom:49px;}
.cart-item-check{margin:12px 7px;width:auto;}
.cart-item-check i{font-style:normal;width:auto;float:left}
.cart-item-check i::after{content:'全选';float:left;line-height:20px;margin-left:4px;}
.cart-item-check i img{float:left;}
.total-price{float:right;margin:6px 10px;font-weight:bold;}
.total-price span b{color:#FF2D2E;}
.goCalc{background:#FF2D2E;color:#fff;display:inline-block;height:38px;line-height:38px;margin-left:15px;padding:0px 15px;border-radius:19px;}
</style>