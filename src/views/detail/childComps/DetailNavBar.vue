<template>
  <NavBar>
    <span slot="nav-back" @click="backClick">
      <img src="~assets/images/common/back.svg">
    </span>
    <div slot="nav-center" class="detail-nav">
      <span 
        v-for="(item, index) in titles" 
        :key="item.index" 
        :class="{active: index === currentIndex}"
        @click="titleClick(index)">
      {{item}}</span>
    </div>
  </NavBar>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'

export default {
  name: 'DetailNavBar',
  data() {
    return {
      titles: ['商品', '评论', '参数', '推荐'],
      currentIndex: 0,
    }
  },
  components: {
    NavBar,
  },
  methods: {
    titleClick(index){
      this.currentIndex = index;
      console.log(index);
      this.$emit('navClick', index)
    },
    backClick(){
      this.$router.back()
    }
  },
}
</script>

<style scoped>
span{width:24px;height:24px;display:inline-block;margin-top:10px;}
span img{height:24px;float:left}
.detail-nav{display:flex;}
.detail-nav span{flex:1;line-height:24px;color:#fff;}
.detail-nav span.active{font-weight:bold;font-size:16px}
</style>