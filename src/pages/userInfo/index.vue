<template>
  <div class="container">
    <div class="paster paster-info">
      <p class="title">个人信息</p>
      <div class="item">
        <img class="portrait" />
        <p>修改头像 ></p>
      </div>
      <div class="item">
        <p>昵称</p>
        <p>DOL8 ></p>
      </div>
      <div class="item">
        <p>性别</p>
        <p>女 ></p>
      </div>
      <div class="item">
        <p>手机号</p>
        <p>1858501990 ></p>
      </div>
      <div class="item">
        <p>地区</p>
        <p>北京市 北京市 海淀区 ></p>
      </div>
    </div>
    <div class="paster paster-authentication">
      <p class="title">实名认证</p>
      <div class="item">
        <div class="authentication-info">
          <p>真实姓名:许多肉</p>
          <p>绑定手机:18518501990</p>
          <p>身份证号:440509201801010001</p>
        </div>
        <div class="authentication-status">
          <span class="icon icon-authentication"></span>
          <p>已认证</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PasterCoupon from '../../common/components/pasterCoupon';
export default {
  onUnload(){
    this.menuId = 0;
  },
  onLoad () {
  },
  components: {
    PasterCoupon
  },
  data () {
    return {
      menuId:0
    }
  },
  methods: {
    pageTo(id){
    }
  },
}
</script>

<style>
  .container{
    .paster-info{
      margin-top: 1rpx;
    }
    .paster-info,.paster-authentication{
      margin-top: 1rpx;
      padding: 0 15rpx;
      display: flex;
      flex-direction: column;
      background: var(--color-foreground);
      .title{
        padding-left: 10rpx;
        line-height: 95rpx;
        font-weight: bold;
        font-size: 28rpx;
      }
      .item{
        border-top: 1rpx solid var(--color-background);
        padding-left: 10rpx;
        line-height: 90rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
          width: 60rpx;
          height: 60rpx;
          border-radius: 50%;
          background: var(--color-text);
        }
        >p:last-child{
          color: var(--color-text-sub);
        }
      }
    }
    .paster-authentication{
      .item{
        padding: 20rpx 10rpx 30rpx;
        .authentication-info{
          line-height: 50rpx;
          display: flex;
          flex-direction: column;
          color: var(--color-text-sub);
        }
        .authentication-status{
          line-height: normal;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-weight: bold;
          color: var(--color-text-selected);
          .icon{
            width: 35rpx;
            height: 35rpx;
            background: no-repeat center;
            -webkit-background-size: contain;
            background-size: contain;
            margin-bottom: 15rpx;
          }
        }
      }
    }
  }
</style>
