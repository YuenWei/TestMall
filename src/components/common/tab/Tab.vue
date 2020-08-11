<template>
  <div class="tab">
    <div class="tab-item" 
      v-for="(item, index) in tab" 
      :key="item.index"
      :class="{active: index===currentIndex}"
      @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data() {
    return {
      currentIndex: 0,
      isActive: {
        type:Boolean,
        default: false
      }
    }
  },
  props: {
    tab: {
      type: Array,
    }
  },
  methods: {
    itemClick(index) {
      console.log(index);
      this.currentIndex = index;
      // 传到父组件点击的tab
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
.tab{display:flex;}
.tab .tab-item{flex:1;text-align:center;height:40px;line-height:40px;}
.tab-item span{padding-bottom:4px;text-align:center;}
.active span{color:#0287FF;border-bottom:2px solid #0287FF;}
</style>