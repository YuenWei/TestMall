<template>
  <div class="cart-item">
     <div class="cart-item-check" @click="goodsSelect">
        <i v-if="itemInfo.checked" ><img src="~assets/images/common/checkbox-fill.svg"></i>
        <i v-else><img src="~assets/images/common/checkbox.svg"></i>
     </div>
     <div class="cart-item-info">
        <div class="cart-item-info-img">
          <img :src="itemInfo.image">
        </div>
         <div class="cart-item-info-text">
          <h3>{{itemInfo.title}}</h3>
          <p>{{itemInfo.desc}}</p>
          <h4>
            <b><small>¥</small>{{itemInfo.price}}</b>
            <div class="num-wrap">
              <!-- <span class="minus">-</span> -->
              <div class="input-wrap">
                <input type="number" :value="itemInfo.count">
              </div>
              <!-- <span class="plus">+</span> -->
            </div>
          </h4>
         </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Cartitem',
  data() {
    return {
      isCheck: true,
    }
  },
  props: {
    itemInfo: {
      type: Object
    },
    isChecked:{
      type: Boolean,
      // default: false
    }
  },
  computed: {
    // isCheck(){
    //   return this.itemInfo.checked
    // }
  },
  methods: {
    goodsSelect(){
      this.isCheck = !this.isCheck
      // console.log(this.$store.state.goodsList.checked);
      // 修改商品状态一定在模型中，也就是vuex
      this.itemInfo.checked = this.isCheck
      console.log(this.itemInfo.checked);
    }
  },
}
</script>

<style>
.cart-item{width:calc(100% - 1rem);padding:1.25rem .5rem;background:#fff;border-top:.5rem solid #f2f2f2;float:left}
.cart-item:last-child{border-bottom:.5rem solid #f2f2f2;}
.cart-item-check,.cart-item-check i,.cart-item-check i img{width:20px;height:20px;}
.cart-item-check{margin:35px 5px 0;float:left;text-align:center;}
.cart-item-info{width:calc(100% - 30px);float:left}
.cart-item-info-img{width:64px;height:90px;border-radius:3px;float:left}
.cart-item-info-img img{width:64px;height:90px;}
.cart-item-info-text{width:calc(100% - 104px);height:90px;position:relative;float:left;margin-left:10px;}
.cart-item-info-text p{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.cart-item-info-text h3{color:#000;word-break:break-all;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient: vertical;overflow:hidden;text-overflow:ellipsis;}
.cart-item-info-text p{font-size:12px;margin-top:.5rem;}
.cart-item-info-text h4{position:absolute;bottom:0;width:100%;}
.cart-item-info-text h4 b{color:#f2270c}
.cart-item-info-text h4 b small{margin-right:2px;}
.num-wrap{float:right;}
.num-wrap span,.num-wrap .input-wrap{float:left;}
.num-wrap span,.input-wrap input{color:#000;font-size:13px;font-weight:bold;}
.num-wrap span{line-height:16px;margin:0 4px;}
.input-wrap input{width:26px;height:14px;line-height:14px;padding:0px 5px;background:#f2f2f2;text-align:center;}
</style>