<template>
  <div v-if="$store.state.goodsList.length" class="cart-list">
    <CartItem v-for="item in cartList" :itemInfo="item" :isChecked="item.checked"></CartItem>
  </div>
  <div v-else class="cart-none">
    <img src="~assets/images/common/cart-none.svg">
    <h3>购物车为空</h3>
  </div>
</template>

<script>
import CartItem from './CartItem'

export default {
  name: 'CartList',
  props: {
    cartList:{
      type: Array
    }
  },
  components: {
    CartItem
  },
}
</script>

<style>
.cart-list{width:100%;float:left;}
.cart-none{text-align:center;padding-top:2rem;}
.cart-none img{width:80%;margin:0 auto;}
</style>