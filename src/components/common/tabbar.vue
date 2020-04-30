<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 49px;
    background-color: #f3f3f3;
    display: flex;
    font-size: 14px;
  }
</style>


