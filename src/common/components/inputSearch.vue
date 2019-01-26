<template>
  <div class="search">
    <input type="text" v-model="search">
    <icon type="search" size="24rpx" @click="$emit('search',search)"/>
  </div>
</template>

<script>
  export default {
    onUnload(){
    },
    onLoad () {
    },
    components: {
    },
    props: [],
    data () {
      return {
        search:''
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .search{
    height: 40rpx;
    line-height: 40rpx;
    width: 200rpx;
    border-radius: 20rpx;
    margin-right: 20rpx;
    border: 1rpx solid var(--color-tab-text);
    display: flex;
    align-items: center;
    input{
      height: 100%;
      width: 155rpx;
      padding-left: 10rpx;
    }
    icon{
      height: 100%;
      flex: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
