<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
}
</script>

<style>
  .tab-bar{width:100%;display:flex;position:fixed;background:#f2f2f2;bottom:0;box-shadow:0 -1px 6px rgba(200,200,200,0.7)}
</style>