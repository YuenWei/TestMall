<template>
  <div class="recommends">
    <div class="" v-for="item in recommends" :key="item.index">
      <a :href="item.link">
        <img :src="item.image">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
    }
  }
}
</script>

<style scoped>
.recommends{display:inline-block;margin:.5rem 0;padding:.5rem 0 1rem;border-bottom:.5rem solid #f2f2f2;}
.recommends div{width:25%;float:left;text-align:center;}
.recommends div img{width:80%;margin:0 auto;}
.recommends div  span{display:block;margin-top:.5rem;}
</style>