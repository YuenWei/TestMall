<template>
  <!-- 滚动条 -->
  <Swiper>
    <SwiperItem v-for="item in banners" :key="item.index">
      <a v-bind:herf="item.link">
        <img v-bind:src="item.image" @load="imageLoad">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
// import Swiper from 'components/common/swiper/Swiper'
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  data() {
    return {
      isLoad: false
    }
  },
  props: {
    banners: {
      type: Array
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imageLoad(){
      console.log('imageload')
      //发射到home,只需发一次即可
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true
        console.log('发射次数');
      }
    }
  },
}
</script>