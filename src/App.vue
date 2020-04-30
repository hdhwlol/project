<template>
  <div id="app">
    <div>
      <router-view></router-view>
      <mainbar></mainbar>
    </div>
  </div>
</template>
<script>
import mainbar from 'components/content/mainbar'
export default {
  name:'App',
  components:{
    mainbar
  },
  data(){
    return {
      num:5
    }
  }
}
</script>

<style>
  @import './assets/css/base.css';
</style>
