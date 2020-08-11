<template>
  <div class="tab-bar-item" v-on:click="itemClick()">
    <i>
      <slot v-if="!isActive" name="item-icon"></slot>
      <slot v-else name="item-icon-active"></slot>
    </i>
    <div v-bind:class="{active: isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data(){
    return {
      //isActive: true
    }
  },
  props: {
    path: String,
    acticeColor: {
      type: String,
      default: '#0287FF',
    }
  },
  computed: {
    isActive() {
      //判断当前路由是否活跃
      return this.$route.path.indexOf(this.path) !== -1
    },
    //动态绑定color
    // activeStyle() {
    //   return this.isActive ? {color: this.acticeColor}:{}
    // }
  },
  methods: {
    itemClick() {
      //console.log('itemClick');
      this.$router.push(this.path)
    }
  },
}
</script>

<style>
  .tab-bar-item{flex:1;height:49px;line-height:49px;text-align:center;}
  .tab-bar-item i{width:100%;height:24px;line-height:24px;float:left;margin-top:4px;}
  .tab-bar-item img{width:24px;height:24px;}
  .tab-bar-item h4{font-weight:normal;line-height:1;font-size:.875rem;}
</style>