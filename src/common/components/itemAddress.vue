<template>
    <div class="item item-address" :data-type="type">
      <div class="address-main">
        <div class="address-left">
          <div class="address-top">
            <p class="address-name">{{address.user_name}}</p>
            <p class="address-tel">{{address.mobile}}</p>
          </div>
          <p class="address-detail"><span class="default" v-if="address.default">默认</span>{{address.address}}</p>
        </div>
        <div class="address-right"></div>
      </div>
      <div class="address-ctr">
        <p class="btn default-btn" @click="$emit('setDefault',index)"><span class="icon icon-unchecked" :class="{'checked':address.default}"></span>默认地址</p>
        <p class="btn delete-btn" @click="$emit('setDelete',index)"><span class="icon icon-delete"></span>删除</p>
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
    props: {
      address: {
        type: Object,
      },
      type: {
        type: Number,
        default: 0
      },
      index: {
        type: Number,
        default: 0
      }
    },
    data(){
      return{

      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .item-address{
    margin-bottom: 10rpx;
    background: var(--color-foreground);
    display: flex;
    flex-direction: column;
    &[data-type='0']{
      .address-main{
        .address-right{
          display: none;
        }
      }
    }
    .address-main{
      padding: 20rpx;
      display: flex;
      font-size: 26rpx;
      .address-left{
        flex: auto;
        display: flex;
        flex-direction: column;
        .address-top{
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }
        .address-tel{
          margin-top: 10rpx;
        }
        .address-detail{
          font-size: 24rpx;
          .default{
            position: relative;
            top: -2rpx;
            margin-right: 5rpx;
            height: 24rpx;
            line-height: 24rpx;
            padding: 0 8rpx;
            font-size: 18rpx;
            border-radius: 8rpx;
            color: var(--color-foreground);
            background: var(--color-text);
          }
        }
      }
    }
    .address-ctr{
      padding: 0 20rpx;
      border-top: 1rpx solid var(--color-tab-text);
      height: 64rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .btn{
        display: flex;
        .icon{
          margin-right: 10rpx;
          &.icon-delete{
            flex: none;
            width: 28rpx;
            height: 35rpx;
            background: no-repeat center;
            background-size: contain;
          }
        }
      }
    }
  }
</style>
