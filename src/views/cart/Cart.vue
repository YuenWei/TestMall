<template>
  <div class="cart">
    <CartNavBar></CartNavBar>
    <Scroll class="content">
      <CartList ref="cartList" class="detail-nav" :cartList="cartList"></CartList>
    </Scroll>
  </div>
</template>

<script>
import CartNavBar from './childComps/CartNavBar'
import CartList from './childComps/CartList'

import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'Cart',
  components: {
    CartNavBar,
    CartList,
    Scroll
  },
  computed: {
    cartList() {
      return this.$store.state.goodsList
    }
  },
}
</script>

<style scoped>
.cart{width:100%;height:100vh;background:#f2f2f2;}
.wrapper .content{width:100%;}
.content{width:100%;height:calc(100% - 94px);position:absolute;top:44px;overflow:hidden;z-index:1;}
</style>