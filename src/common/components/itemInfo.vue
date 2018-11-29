<template>
  <div class="item item-info" :class="['type'+type]">
      <p class="item-name">{{info.title}}</p>
      <p class="item-desc">{{info.abstract}}</p>
      <p class="item-price">{{info.price}}<span v-if="info.rebate_price" class="rebate-price">返利￥{{info.rebate_price}}</span><template v-if="info.rebate&&info.rebate.length"><span v-for="(item,index) of info.rebate" :key="index">{{item.name}}</span></template></p>
      <p class="item-data">{{info.goos_evaluation*100}}%好评</p>
      <slot/>
  </div>
</template>

<script>
  export default {
    components: {
    },
    props: [
      'info','type'
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
  .item-info{
    position: relative;
    width: 100%;
    box-sizing: border-box;
    .item-name{
      font-weight: bold;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      box-orient: vertical;
      display: -webkit-box;
      display: box;
    }
    .item-price{
      position: relative;
      display: inline-block;
      font-weight: bold;
      color: var(--color-text-selected);
      &:before{
        content: '￥';
      }
      span{
        position: relative;
        top: -4rpx;
        /*position: absolute;*/
        /*top: 50%;*/
        /*left: 100%;*/
        white-space: nowrap;
        margin-left: 5rpx;
        /*margin-top: -13rpx;*/
        padding: 0 9rpx;
        border-radius: 10rpx;
        font-weight: normal;
        border: 1rpx solid var(--color-text-selected);
        &.rebate-price{
          background: var(--color-text-selected);
          color: var(--color-foreground);
        }
      }
    }
    .item-desc{
      line-height: 36rpx;
      font-size: 20rpx;
      color: var(--color-text-sub);
    }
    .item-data{
      position: absolute;
      white-space: nowrap;
      color: var(--color-text-sub);
    }
    &.type0{
      height: 100%;
      padding: 30rpx 25rpx 30rpx 225rpx;
      .item-name{
        font-size: 26rpx;
        line-height: 36rpx;
        height: 70rpx;
      }
      .item-desc{
        padding-top: 5rpx;
        padding-bottom: 10rpx;
      }
      .item-price{
        font-size: 36rpx;
        &:before{
          font-size: 20rpx;
        }
        span{
          height: 26rpx;
          font-size: 20rpx;
          line-height: 26rpx;
        }
      }
      .item-data{
        bottom: 30rpx;
        right: 25rpx;
        font-size: 20rpx;
      }
    }
    &.type1{
      height: 100%;
      padding: 320rpx 15rpx 20rpx 15rpx;
      .item-name{
        font-size: 24rpx;
        line-height: 29rpx;
        height: 55rpx;
      }
      .item-desc{
        padding-top: 10rpx;
        padding-bottom: 5rpx;
      }
      .item-price{
        font-size: 30rpx;
        &:before{
          font-size: 18rpx;
        }
        span{
          height: 24rpx;
          font-size: 17rpx;
          line-height: 24rpx;
        }
      }
      .item-data{
        bottom: 20rpx;
        right: 15rpx;
        font-size: 18rpx;
      }
    }
    &.type2{
      padding: 95rpx 25rpx 70rpx;
      margin-bottom: 10rpx;
      background: var(--color-foreground);
      .item-name{
        font-size: 28rpx;
        line-height: 36rpx;
        height: 70rpx;
      }
      .item-price{
        position: absolute;
        top: 35rpx;
        left: 25rpx;
        font-size: 40rpx;
        &:before{
          font-size: 28rpx;
        }
        span{
          height: 30rpx;
          font-size: 20rpx;
          line-height: 30rpx;
        }
      }
      .item-data{
        display: none;
      }
      .item-desc{
        position: absolute;
        bottom: 25rpx;
        left: 25rpx;
        font-size: 22rpx;
        line-height: inherit;
      }
    }
  }
</style>
