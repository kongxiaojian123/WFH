<template>
  <div class="item item-recommend">
    <span class="item-image" :style="{'background-image':'url('+goodsData.info.product_img+')'}" :data-index="goodsData.index<=5?goodsData.index:''"></span>
    <div class="item-info">
      <p class="item-name">{{goodsData.info.title}}</p>
      <p class="item-desc">{{goodsData.info.abstract}}</p>
      <p class="item-price">{{goodsData.info.price}}<span v-if="goodsData.info.rebate_price">返利￥{{goodsData.info.rebate_price}}</span></p>
      <p class="item-data">销量{{goodsData.info.sale_volume}}  |  {{goodsData.info.goos_evaluation*100}}%好评</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'listRecommend',
    components: {
    },
    props: [
      'goodsData'
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
.item-recommend{
  position: relative;
  width: 100%;
  height: 220rpx;
  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 1%;
    width: 98%;
    height: 1rpx;
    background: var(--color-card-border);
  }
  .item-image{
    position: absolute;
    top: 20rpx;
    left: 25rpx;
    width: 180rpx;
    height: 180rpx;
    overflow: hidden;
    background: no-repeat center;
    background-size: cover;
    border-radius: 9rpx;
    &[data-index]:not([data-index=""]){
      &:before{
        content: '';
        position: absolute;
        top: -38rpx;
        left: -38rpx;
        width: 76rpx;
        height: 76rpx;
        background: var(--color-text-selected);
        transform:rotateZ(-45deg);
      }
      &:after{
        content: attr(data-index);
        position: absolute;
        font-size: 18rpx;
        width: 34rpx;
        height: 34rpx;
        line-height: 34rpx;
        text-align: center;
        color: var(--color-foreground);
      }
      background: var(--color-card-border);
    }
  }
  .item-info{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 30rpx 25rpx 30rpx 225rpx;
    box-sizing: border-box;
    .item-name{
      font-size: 26rpx;
      line-height: 36rpx;
      min-height: 72rpx;
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
    .item-desc{
      padding-top: 5rpx;
      padding-bottom: 10rpx;
      line-height: 36rpx;
      font-size: 20rpx;
      color: var(--color-text-sub);
    }
    .item-price{
      position: relative;
      display: inline-block;
      font-size: 36rpx;
      font-weight: bold;
      color: var(--color-text-selected);
      &:before{
        content: '￥';
        font-size: 20rpx;
      }
      span{
        position: absolute;
        top: 50%;
        left: 100%;
        height: 26rpx;
        white-space: nowrap;
        margin-left: 5rpx;
        margin-top: -13rpx;
        padding: 0 9rpx;
        border-radius: 9rpx;
        font-size: 20rpx;
        line-height: 26rpx;
        font-weight: normal;
        background: var(--color-text-selected);
        color: var(--color-foreground);
      }
    }
    .item-data{
      position: absolute;
      bottom: 30rpx;
      right: 25rpx;
      font-size: 20rpx;
      white-space: nowrap;
      color: var(--color-text-sub);
    }
  }
}
</style>
