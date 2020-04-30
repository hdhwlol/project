<template>
  <div class="item">
    <div class="item-item" @click="handel">
      <div v-if="isActive"><slot name="imageActive"></slot></div>
      <div v-else><slot name="image"></slot></div>
      <div class="tltle" :style="{color:isActive?fontcolor:''}"><slot name="title"></slot></div>
    </div>
  </div>
</template>
<script>
export default {
  name:'baritem',
  props:{
    path:{
      type:String
    },
    fontcolor:{
      type:String,
      default:'#FF5777'
    }
  },
  methods:{
    handel(){
      let path = this.path
      this.$router.replace(path)
    }
  },
  computed:{
    isActive(){
      let path = this.path
     return this.$route.path.indexOf(path) == -1 ? false : true
    }
  }
}
</script>
<style scoped>
  .item{
    flex:1;
    display: flex;
    justify-content: center;
    align-items:center
  }
  .item-item {
    display: flex;
    flex-direction: column;
    align-items: center
  }
  img {
    width: 24px;
    height: 24px;
  }
</style>


