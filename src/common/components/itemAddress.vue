<template>
    <div class="item item-address" :data-type="type">
      <div class="address-main">
        <div class="address-left" @click="$emit('clickAddress')">
          <div class="address-top">
            <p class="address-name">{{address.user_name}}</p>
            <p class="address-tel">{{address.mobile}}</p>
            <p class="default" v-if="type===1&&address.default">默认</p>
          </div>
          <div class="address-bottom">
            <p class="icon icon-location"></p>
            <p class="address-detail"><span class="default" v-if="type!==1&&address.default">默认</span>{{address.address}}</p>
            <p class="more">></p>
          </div>
        </div>
        <p class="address-select" :class="{selected:useIndex===index}" @click="$emit('setUseIndex',index)">使用{{useIndex===index?'中':''}}</p>
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
      },
      useIndex:{
        type: Number,
        default:0
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
    &[data-type='2']{
      .address-main{
        .address-select{
          display: block;
        }
      }
    }
    &[data-type='1']{
      .address-main{
        padding: 30rpx 30rpx 40rpx;
        .address-left{
          .address-top{
            justify-content: normal;
            p{
              margin-right: 10rpx;
            }
          }
          .address-bottom{
            .icon-location,.more{
              display: block;
            }
          }
        }
      }
      .address-ctr{
        display: none;
      }
    }
    .address-main{
      padding: 20rpx;
      display: flex;
      font-size: 26rpx;
      .default{
        margin-right: 5rpx;
        height: 24rpx;
        line-height: 24rpx;
        padding: 0 8rpx;
        font-size: 18rpx;
        border-radius: 8rpx;
        color: var(--color-foreground);
        background: var(--color-text);
      }
      .address-left{
        flex: auto;
        display: flex;
        flex-direction: column;
        .address-top{
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: bold;
        }
        .address-bottom{
          margin-top: 10rpx;
          display: flex;
          .icon-location{
            display: none;
            flex: none;
            align-self: flex-start;
            width: 16rpx;
            height: 22rpx;
            margin-top: 5rpx;
            margin-right: 15rpx;
            opacity: 0.5;
            background: no-repeat center;
            background-size: contain;
          }
          .address-detail{
            flex: auto;
            font-size: 24rpx;
            .default{
              position: relative;
              top: -2rpx;
            }
          }
          .more{
            display: none;
            position: relative;
            flex:none;
            align-self: flex-start;
            opacity: 0.5;
            padding-left: 5rpx;
            transform: translateY(-10rpx) scaleY(2);
          }
        }
      }
      .address-select{
        display: none;
        flex: none;
        align-self: center;
        width: 100rpx;
        margin-left: 30rpx;
        padding: 5rpx 0rpx;
        border-radius: 17.5rpx;
        font-size: 21rpx;
        text-align: center;
        white-space: nowrap;
        box-sizing: border-box;
        border: 1rpx solid var(--color-text);
        &.selected{
          color: var(--color-foreground);
          background: var(--color-text-selected);
          border: 1rpx solid var(--color-text-selected);
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
