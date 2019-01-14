<template>
  <div class="paster paster-older">
    <div class="item item-head">
      <span class="title">我的订单</span>
      <span class="more">全部订单 ></span>
    </div>
    <div class="list list-main">
      <div class="item"><span class="icon icon-obligation"></span><span>待付款</span></div>
      <div class="item"><span class="icon icon-delivery"></span><span>待发货</span></div>
      <div class="item"><span class="icon icon-received"></span><span>待收货</span></div>
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
  .paster-older{
    padding: 35rpx 25rpx;
    background: var(--color-foreground);
    box-sizing: border-box;
    .item-head{
      display: flex;
      justify-content: space-between;
      font-size: 28rpx;
      .title{
        font-weight: bold;
      }
      .more{
        color: var(--color-text-sub);
      }
    }
    .list-main{
      display: flex;
      flex-wrap: wrap;
      padding: 0 5rpx;
      font-size: 22rpx;
      .item{
        display: flex;
        flex: none;
        width: 230rpx;
        height: 130rpx;
        margin-top: 20rpx;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        .icon{
          width: 100%;
          height: 40rpx;
          margin-bottom: 20rpx;
          background: no-repeat center;
          background-size: contain;
        }
      }
    }
  }
</style>
