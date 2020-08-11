<template>
  <div class="detail-swiper">
    <Swiper class="detail-focus">
      <SwiperItem v-for="item in topImages" :key="item.index">
        <img :src="item">
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: 'DetailSwiper',
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
    };
  },
  components: {
    Swiper, 
    SwiperItem
  },

  computed: {},

  methods: {}
}
</script>

<style  scoped>
.detail-focus{height:300px;overflow:hidden;}
</style>