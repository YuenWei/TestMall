<template>
  <!-- 封装better-scroll -->
  <div class="wrapper" ref="wrapper">
     <div class="content">
       <slot></slot>
     </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number
    },
    pullUpLoad: {
      type: Boolean
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      pullUpLoad: this.pullUpLoad,
      // probeType: 3,
      probeType: this.probeType, //home/scroll组件传过来的的值
      click: true  /* click默认false,不能点击,需要此设置 */
    })

    // 2.监听滚动位置
    this.scroll.on('scroll', (position) =>{
      // console.log(position);
      // console.log(this.probeType);
      // 将position传到父组件，监听滚动位置，判断backTop是否显示
      this.$emit('scroll', position)
    })

    // 监听上拉加载更多
    this.scroll.on('pullingUp', () => {
      console.log('上拉加载更多');
      // 发送到home scroll
      this.$emit('pullingUp')
    })

    //refresh 图片加载完成后重新计算content高度
    // this.scroll.refresh()
  },
  methods: {
    scrollTo(x, y, time=500){
      this.scroll && this.scroll.scrollTo(x, y, time)
    }
  },
}
</script>

<style scoped>
.content{float:left;}
</style>