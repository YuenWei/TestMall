<template>
  <div class="nav-bar">
    <div class="nav-bar-left">
      <slot name="nav-back"></slot>
    </div>
    <div class="nav-bar-center">
      <slot name="nav-center"></slot>
    </div>
    <div class="nav-bar-right">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.nav-bar{background:#0287FF;display:flex;height:44px;line-height:44px;color:#fff;text-align:center;box-shadow:0 2px 5px rgba(100, 100, 100, 0.1);/* position:fixed;top:0;left:0;right:0;z-index:9; */}
.nav-bar-left,.nav-bar-right{width:60px;text-align:center;}
.nav-bar-center{flex:1;}
</style>
