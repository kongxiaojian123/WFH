<template>
  <div class="paster paster-preferential">
    <div class="list-preferential">
      <p>[ 红包活动 ] 下单满1000元,完成订单获50元现金红包</p>
    </div>
    <div class="list-summarize">
      <p>返利总计（元）250 = 代销返利20x10 + 红包50</p>
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
  .paster-preferential{
    display: flex;
    flex-direction: column;
    font-size: 24rpx;
    line-height: 24rpx;
    > div{
      display: flex;
      flex-direction: column;
      padding: 25rpx;
    }
    .list-preferential{
      padding-bottom: 20rpx;
      > p{
        padding-top: 20rpx;
        color: var(--color-text-sub);
      }
      &:before{
        content: '已参与活动';
        font-weight: bold;
        font-size: 28rpx;
        line-height: 28rpx;
        padding-bottom: 10rpx;
      }
    }
    .list-summarize{
      position: relative;
      padding-bottom: 30rpx;
      &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 10rpx;
        right: 10rpx;
        height: 1rpx;
        background: var(--color-card-border);
      }
    }
  }
</style>
