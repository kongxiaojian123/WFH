<template>
    <div class="no-address" v-if="!addsData" @click="manageAddress">
      <span class="icon icon-location"></span>
      <p>添加收货地址</p>
    </div>
    <ItemAddress :address="addsData" :type="1" @clickAddress="manageAddress" v-else></ItemAddress>
</template>

<script>
  import ItemAddress from './itemAddress'
  export default {
    onUnload(){
    },
    onLoad () {
    },
    components: {
      ItemAddress
    },
    props: ['addsData'],
    data(){
      return{

      }
    },
    methods: {
      manageAddress(){
        wx.navigateTo({
          url:`/pages/address/main?type=2`
        });
      }
    }
  }
</script>

<style scoped>
  .no-address{
    display: flex;
    align-items: center;
    font-size:26rpx;
    background: var(--color-foreground);
    color: var(--color-text);
    padding: 30rpx 30rpx 40rpx;
    font-weight: bold;
    .icon{
      width: 16rpx;
      height: 22rpx;
      margin-right: 10rpx;
      background: no-repeat center;
      background-size: contain;
      opacity: 0.5;
    }
  }
</style>
