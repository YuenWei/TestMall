import Vue from 'vue'
import Vuex from 'vuex'

//抽离getters
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 定义存放购物车商品列表的数组，里面存放product{}
    goodsList:[]
    // detial.vue push 到vuex
  },
  getters,
  mutations:{
    addCart(state, payload){
      // for if 嵌套出问题

      // 1.先判断商品已经存在购物车了
      // let isHaved = null;
      // let index = state.goodsList.indexOf(payload)
      // for(let item of state.goodsList){
      //   console.log(item.id)
      //   console.log(payload.id)
      //   if(item.id === payload.id) {
      //     isHaved+=1;
      //   }
      // }

      // if(isHaved){
      //   console.log('已存在')
      //   state.goodsList[index].count+=1
      // }else{
      //   state.goodsList.push(payload)
      // }

      // 2.
      console.log(payload);
      // const oldProduct = state.goodsList.find(item => item.id === payload.id)
      const oldProduct = state.goodsList.find(item => item.id === payload.id)
      if(oldProduct){
        oldProduct.count +=1
      }else{
        payload.count = 1
        payload.checked = true /* 默认加入购物车的商品在购物车选中 */
        state.goodsList.unshift(payload)
      }

      // 3.重构，抽离actions,mutations
    }
    

    // dispatch 方法
    // addCart(context, payload){
    //   console.log(payload);
    //   // const oldProduct = state.goodsList.find(item => item.id === payload.id)
    //   const oldProduct = state.goodsList.find(item => item.id === payload.id)
    //   if(oldProduct){
    //     oldProduct.count +=1
    //     context.commit()
    //   }else{
    //     payload.count = 1
    //     payload.checked = true /* 默认加入购物车的商品在购物车选中 */
    //     state.goodsList.unshift(payload)
    //   }
    // }
  }
})

export default store
// main.js  导入和注册