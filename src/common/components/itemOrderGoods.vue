<template>
  <div class="item item-order-goods">
    <div class="head">
      <p class="time">2018-09-09 00:00:00</p>
      <div class="right">
        <p class="trade-id">交易编号：2018090910000</p>
        <p class="trade-state">待收货</p>
      </div>
    </div>
    <div class="goods-list">
      <div class="goods">
        <p class="name">WILD FIELD HEALTH增肌粉乳清蛋白粉7磅巧克力克力克力克力克力克力</p>
        <p class="num">x5</p>
      </div>
      <div class="goods">
        <p class="name">WILD FIELD HEALTH增肌粉乳清蛋白粉7磅巧克力克力克力克力克力克力</p>
        <p class="num">x5</p>
      </div>
    </div>
    <div class="goods-total">
      <p class="sum">实付金额 1380.00</p>
      <p class="rebate"><span class="type">待收返利</span>￥200</p>
    </div>
    <div class="item-address">
      <div class="top">
        <p class="name">丁磊</p>
        <p class="phone">18518501990</p>
      </div>
      <p class="address">北京市海淀区西北旺东路10号院中关村软件园二期西区7号楼北京研发中心</p>
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
      jumpPage(product_id){
        wx.navigateTo({
          url:`/pages/goods/main?product_id=${product_id}`
        });
      }
    }
  }
</script>

<style scoped>
  .item-order-goods{
    display: flex;
    flex-direction: column;
    padding: 15rpx;
    border-top: 1rpx solid var(--color-tab-text);
    .head{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20rpx 0;
      font-size: 20rpx;
      color: var(--color-text-sub);
      border-bottom: 1rpx solid var(--color-background);
      .right{
        display: flex;
        .trade-id{
          margin-right: 30rpx;
        }
        .trade-state{
          line-height: 30rpx;
          padding: 0 15rpx;
          border: 1rpx solid var(--color-text-sub);
          border-radius: 15rpx;
        }
      }
    }
    .goods-list{
      display: flex;
      flex-direction: column;
      padding: 10rpx 20rpx;
      line-height: 50rpx;
      font-size: 24rpx;
      border-bottom: 1rpx solid var(--color-background);
      .goods{
        display: flex;
        justify-content: space-between;
        .name{
          width: 580rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .goods-total{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20rpx;
      font-size: 22rpx;
      border-bottom: 1rpx solid var(--color-background);
      .rebate{
        font-size: 20rpx;
        color: var(--color-text-selected);
        .type{
          line-height: 28rpx;
          padding: 0 10rpx;
          border-radius: 10rpx;
          margin-right: 15rpx;
          background: var(--color-text-selected);
          color: var(--color-foreground);
        }
      }
    }
    .item-address{
      display: flex;
      flex-direction: column;
      padding: 20rpx;
      font-size: 24rpx;
      color: var(--color-text-sub);
      .top{
        display: flex;
        justify-content: space-between;
        margin-right: 140rpx;
        margin-bottom: 10rpx;
      }
      .name{
      }
    }
  }
</style>
