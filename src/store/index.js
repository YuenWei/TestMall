import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 定义存放购物车商品列表的数组，里面存放product{}
    goodsList:[]
    // detial.vue push 到vuex
  },
  mutations:{
    addCart(state, product){
      // 先判断商品已经添加了
      // for(let item in goodsList){
      //   if
      // }
      state.goodsList.push(product)
    }
  }
})

export default store
// main.js  导入和注册