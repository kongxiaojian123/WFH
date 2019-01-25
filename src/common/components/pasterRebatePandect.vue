<template>
  <div class="paster paster-rebate-pandect">
    <ItemPersonPortrait :info="{}" />
    <div class="item-money-main">
      <div class="item-money-total">
        <div class="item-money">
          <p class="money">{{showMoney?'80000.00':'*****'}}</p>
          <span class="icon" :class="{'icon-eye-open':showMoney,'icon-eye-close':!showMoney}" @click="setShowMoney"></span>
        </div>
        <p class="text-explain">可提现余额（元）</p>
      </div>
      <div class="item-money-history">
        <div class="item-money-prev">
          <p class="money">{{showMoney?'30000.00':'*****'}}</p>
          <p class="text-explain">上月返利（元）</p>
        </div>
        <div class="item-money-current">
          <p class="money">{{showMoney?'80000.00':'*****'}}</p>
          <p class="text-explain">本月返利（元）</p>
        </div>
      </div>
    </div>
    <div class="item-btn-main">
      <p class="btn btn-withdrawal">提现</p>
      <p class="btn btn-history">历史明细 </p>
    </div>
  </div>
</template>

<script>
  import ItemPersonPortrait from './itemPersonPortrait';
  export default {
    onUnload(){
    },
    onLoad () {
    },
    components: {
      ItemPersonPortrait
    },
    props: [
      'info',
      'showMoney'
    ],
    data () {
      return {
      }
    },
    methods: {
      setShowMoney() {
        this.$emit('setShowMoney',!this.showMoney);
      }
    }
  }
</script>

<style scoped>
  .paster-rebate-pandect{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 25rpx 25rpx 0;
    box-sizing: border-box;
    background: var(--color-text);
    margin-bottom: 0;
    overflow: hidden;
    .item-money-main{
      position: relative;
      display: flex;
      align-items: center;
      /*justify-content: space-around;*/
      align-self: normal;
      margin: 40rpx 35rpx 0rpx;
      .item-money-total{
        flex:auto;
        width: 60%;
        position: relative;
        display: flex;
        flex-direction: column;
        /*align-items: center;*/
        justify-content: space-between;
        align-self: center;
        padding-right: 60rpx;
        box-sizing: border-box;
        .item-money{
          position: relative;
          align-self: center;
          .money{
            font-size: 50rpx;
            text-align: center;
            white-space: nowrap;
            color: var(--color-tab-text);
          }
          .icon{
            position: absolute;
            top: 25%;
            left: 100%;
            margin-left: 22rpx;
            width: 38rpx;
            height: 22rpx;
            background: no-repeat center;
            background-size: contain;
            &:before{
              content: '';
              position: absolute;
              top: 50%;
              left: 50%;
              width: 60rpx;
              height: 60rpx;
              margin-left: -30rpx;
              margin-top: -30rpx;
            }
          }
        }
        .text-explain{
          margin: 20rpx 0rpx 0rpx 0;
          font-size: 22rpx;
          text-align: center;
          white-space: nowrap;
          color: var(--color-text-sub);
        }
      }
      .item-money-history{
        flex:auto;
        width: 40%;
        position: relative;
        display: flex;
        flex-direction: column;
        /*align-items: center;*/
        justify-content: space-between;
        align-self: normal;
        .item-money-prev{
          margin-bottom: 50rpx;
        }
        .item-money-prev,.item-money-current{
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          .money{
            text-align: center;
            font-size: 30rpx;
            white-space: nowrap;
            color: var(--color-tab-text);
          }
          .text-explain{
            text-align: center;
            margin: 15rpx 0rpx 0rpx;
            font-size: 20rpx;
            white-space: nowrap;
            color: var(--color-text-sub);
          }
        }
      }
    }
    .item-btn-main{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-around;
      align-self: normal;
      margin: 50rpx 0 0;
      .btn{
        position: relative;
        align-items: center;
        width: 320rpx;
        padding: 30rpx 0rpx;
        border-radius: 10rpx 10rpx 0rpx 0rpx;
        background: var(--color-tips-background-dark);
        box-shadow: 0rpx 3rpx 44rpx 2rpx var(--color-text-translucence);
        font-size: 24rpx;
        text-align: center;
        white-space: nowrap;
        color: var(--color-tab-text);
      }
    }
  }
</style>
