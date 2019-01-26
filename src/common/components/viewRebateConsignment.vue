<template>
  <div class="view view-rebate-consignment">
    <div class="item-total">
      <p class="total">累计代销返利 (元) {{showMoney?'60000.00':'*****'}}</p>
      <p class="help">帮助</p>
    </div>
    <PasterOrderData/>
    <div class="paster pastrer-order-goods">
      <div class="head">
        <p class="title">下单详情</p>
        <div class="right">
          <InputSearch @search="searchOrderGoods" />
          <p class="time">时间</p>
        </div>
      </div>
      <div class="main">
        <ItemOrderGoods/>
        <ItemOrderGoods/>
      </div>
    </div>
  </div>
</template>

<script>
  import PasterOrderData from './pasterOrderData';
  import ItemOrderGoods from './ItemOrderGoods';
  import InputSearch from './inputSearch';
  export default {
    onUnload(){
    },
    onLoad () {
    },
    components: {
      PasterOrderData,ItemOrderGoods,InputSearch
    },
    props: [
      'showMoney'
    ],
    data () {
      return {
      }
    },
    watch:{
    },
    computed:{
    },
    mounted(){
    },
    methods: {
      searchOrderGoods(search){
        console.log(search);
      }
    }
  }
</script>

<style scoped>
  .view-rebate-consignment{
    .item-total{
      line-height: 80rpx;
      margin-bottom: 10rpx;
      background: var(--color-foreground);
      display: flex;
      justify-content: space-between;
      padding: 0 25rpx;
      &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 10rpx;
        right: 10rpx;
        height: 1rpx;
        background: var(--color-tab-text);
      }
      .help{
        padding-left: 25rpx;
      }
    }

    .pastrer-order-goods{
      padding: 25rpx 10rpx 0;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      .head{
        margin: 0 15rpx 25rpx;
        display: flex;
        justify-content: space-between;
        font-size: 24rpx;
        .right{
          display: flex;
          align-items: center;
        }
        .time{
          position: relative;
          padding-right: 35rpx;
          &:before{
            content: '>';
            position: absolute;
            right: 0;
            top: 50%;
            width: 60rpx;
            height: 60rpx;
            line-height: 60rpx;
            margin-top: -30rpx;
            margin-right: -25rpx;
            padding-bottom: 20rpx;
            text-align: center;
            transform:rotateZ(90deg) scaleY(1.5);
            transform-origin: 30rpx 30rpx;
            color: var(--color-text-sub);
          }
        }
      }
      .main{
      }
    }
  }
</style>
