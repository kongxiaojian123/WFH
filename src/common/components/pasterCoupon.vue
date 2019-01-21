<template>
  <div class="paster-coupon" :class="{disable:true}">
    <p class="item-money"><span class="currency">￥</span>20</p>
    <div class="item-info">
      <p class="item-title">下单确认收货返现金红包</p>
      <p class="item-desc">即日起额2018.12.30前使用</p>
    </div>
    <p class="btn">立即使用</p>
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
    props: [
      'info'
    ],
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .paster-coupon{
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 15rpx;
    padding: 40rpx 50rpx 40rpx 0rpx;
    border: 1rpx solid var(--color-tab-text-selected);
    border-radius: 15rpx;
    &.disable{
      background: var(--color-tips-background-red);
      border-color: var(--color-text-sub);
      color: var(--color-text-sub);
      .btn{
        display: none;
      }
    }
    .item-money{
      width: 120rpx;
      margin: 10rpx 0rpx 10rpx 29rpx;
      font-size: 50rpx;
      white-space: nowrap;
      .currency{
        font-size: 30rpx;
      }
    }
    .item-info{
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-self: normal;
      width: 360rpx;
      margin-left: 5rpx;
      .item-title{
        font-size: 24rpx;
        white-space: nowrap;
      }
      .item-desc{
        align-self: normal;
        margin: 0rpx 1rpx;
        font-size: 20rpx;
        white-space: nowrap;
        color: var(--color-text-sub);
      }
    }
    .btn{
      position: relative;
      align-items: center;
      padding: 5rpx 18rpx;
      margin: 12rpx 0 12rpx 15rpx;
      border-radius: 17.5rpx;
      background: var(--color-text-selected);
      font-size: 21rpx;
      text-align: center;
      white-space: nowrap;
      color: var(--color-foreground);
    }
  }
</style>
