<template>
  <div class="container">
    <div class="paster paster-info">
      <p class="title">个人信息</p>
      <div class="item">
        <img class="portrait" :src="avatarUrl"/>
        <p style="opacity: 0;">修改头像 ></p>
      </div>
      <div class="item">
        <p>昵称</p>
        <p>{{nickName}}&nbsp;&nbsp;</p>
      </div>
      <div class="item">
        <p>性别</p>
        <p>{{sex}}&nbsp;&nbsp;</p>
      </div>
      <div class="item" @click="showCardPhone=true">
        <p>手机号</p>
        <p><span class="red">{{bindPhone}}</span> ></p>
      </div>
      <div class="item">
        <p>地区</p>
        <p>{{area}}&nbsp;&nbsp;</p>
      </div>
    </div>
    <div class="paster paster-authentication">
      <div class="title">
        <p>实名认证</p>
        <p><span class="red">去认证</span> ></p>
      </div>
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
    <CardPhone v-if="showCardPhone" :bindPhone="bindPhone" @setPhone="setPhone" @close="showCardPhone=false"></CardPhone>
  </div>
</template>

<script>
import PasterCoupon from '../../common/components/pasterCoupon';
import CardPhone from '../../common/components/cardPhone';
export default {
  onUnload(){
    this.menuId = 0;
  },
  onLoad () {
  },
  components: {
    PasterCoupon,CardPhone
  },
  computed:{
    nickName(){
      return this.userInfo.nickName;
    },
    avatarUrl(){
      return this.userInfo.avatarUrl;
    },
    sex(){
      switch(this.userInfo.gender){
        case 0:return '';
        case 1:return '男';
        case 2:return '女';
      }
    },
    area(){
      return `${this.userInfo.province}${this.userInfo.city?(' '+this.userInfo.city):''}`;
    }
  },
  data () {
    return {
      showCardPhone:false,
      menuId:0,
      bindPhone:'13683681334',
    }
  },
  methods: {
    setPhone(phone){
      this.bindPhone = phone;
    },
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
        }
        >p:last-child{
          color: var(--color-text-sub);
          .red{
            color: var(--color-text-selected);
          }
        }
      }
    }
    .paster-authentication{
      .title{
        display: flex;
        justify-content: space-between;
        >p:last-child{
          color: var(--color-text-sub);
          .red{
            color: var(--color-text-selected);
          }
        }
      }
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
