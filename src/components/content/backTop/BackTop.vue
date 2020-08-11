<template>
  <div class="back-top">
    <img src="~assets/images/common/back-top.svg">
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  methods: {
    // backClick() {
    //   //BackTop组件监听Home/Scroll组件，需要$emit
        //监听组件，不需要内部监听然后发出去，直接在home监听组件
    //   console.log('回到顶部');
    //   this.$emit('backClick')
    // }
  },
}
</script>

<style scoped>
.back-top{width:32px;height:32px;border-radius:50%;background:#fff;box-shadow:0 0 2px 4px #f8f8f8;position:fixed;right:5px;bottom:6rem;}
.back-top img{width:24px;height:24px;padding:4px;}
</style>