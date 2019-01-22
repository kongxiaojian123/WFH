<template>
  <div class="paster paster-service">
    <div class="item item-head">
      <span class="title">我的服务</span>
    </div>
    <div class="list list-main">
      <div class="item" @click="pageTo('rank')"><span class="icon icon-vip"></span><span>会员等级</span></div>
      <div class="item"><span class="icon icon-code"></span><span>我的邀请码</span></div>
      <div class="item"><span class="icon icon-location"></span><span>地址管理</span></div>
      <div class="item" @click="pageTo('coupon')"><span class="icon icon-coupon"></span><span>优惠劵</span></div>
      <div class="item"><span class="icon icon-help"></span><span>帮助与客服</span></div>
      <div class="item" @click="pageTo('userInfo')"><span class="icon icon-info"></span><span>账户信息</span></div>
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
      pageTo(id){
        wx.navigateTo({
          url:`/pages/${id}/main`
        });
      }
    }
  }
</script>

<style scoped>
  .paster-service{
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
