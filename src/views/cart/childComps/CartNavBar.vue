<template>
  <div class="cart-nav-bar">
    <NavBar>
      <span slot="nav-back">
        <img src="~assets/images/common/home.svg">
      </span>
      <span slot="nav-center">购物车<b v-if="length">({{length}})</b></span>
     </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'

import {mapGetters} from 'vuex'

export default {
  name: 'CartNavBar',
  components: {
    NavBar
  },
  computed: {
    // cartLength(){
    //   return this.$store.getters.cartLength
    // }
    // 以上方法代码过长

    // 2.getters转计算属性 使用mapGetters([])直接获取getters里cartLength
    // 语法1
    // ...mapGetters(['cartLength'])
    // 语法2
    ...mapGetters({
      length: 'cartLength'  /* 别名映射 */
    })

  },
}
</script>

<style scoped>
span{display:inline-block;}
.nav-bar-left  span{margin-top:10px;}
.nav-bar-left img{height:24px;float:left}
</style>