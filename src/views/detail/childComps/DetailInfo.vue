<template>
  <div class="detail-info">
    <p>{{detailInfo.desc}}</p>
    <img v-for="item in detailInfo.detailImage[0].list" :src="item" :key="item.index" @load="imagesLoad">
  </div>
</template>

<script>
export default {
  name: 'DetailInfo',
  data() {
    return {
      imageNum: 0,
      imageLenght: 0
    }
  },
  props:{
    detailInfo: {
      type: Object,
      default: {},
    }
  },
  methods: {
    imagesLoad() {
      // 判断所有图片都加载完了，进行回调函数重新计算content高度
      // this.imageNum ++;
      // if(this.imageNum === this.imageLenght){
        this.$emit('imageLoad')
        console.log('详细图片发射次数');
      // }
    }
  },
  watch: {
    detailImageNum(){
      this.imageLenght = this.detailInfo.detailImage[0].list.lenght
    }
  },
}
</script>

<style>
.detail-info{display:inline-block;padding:.5rem;border-top:.5rem solid #f2f2f2;}
.detail-info img{width:100%;float:left;}
</style>