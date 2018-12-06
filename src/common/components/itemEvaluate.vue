<template>
  <div class="item item-evaluate">
    <p class="item-title">产品评价({{info.comment_num}})</p>
    <p class="item-data">{{info.goos_evaluation*100}}%好评 ></p>
    <div class="item-tips">
      <span>价格实惠(1800)</span>
      <span>价格实惠(1800)</span>
      <span>价格实asd惠(1800)</span>
      <span>价asd格实asasd惠(1800)</span>
    </div>
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
  .item-evaluate{
    position: relative;
    margin-bottom: 10rpx;
    padding: 30rpx 25rpx 40rpx;
    background: var(--color-foreground);
    .item-title{
      font-size: 28rpx;
      font-weight: bold;
    }
    .item-data{
      position: absolute;
      right: 25rpx;
      top: 30rpx;
      font-size: 24rpx;
      color: var(--color-text-selected);
    }
    .item-tips{
      padding-top: 30rpx;
      padding-bottom: 10rpx;
      display: flex;
      flex-wrap: wrap;
      font-size: 22rpx;
      line-height: 35rpx;
      span{
        white-space: nowrap;
        padding: 0 10rpx;
        margin-bottom: 10rpx;
        margin-right: 15rpx;
        background: var(--color-tips-background-light);
        border-radius: 6rpx;
      }
    }
  }
</style>
