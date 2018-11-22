<template>
  <div class="item item-goods" @click="jumpPage(goodsData.info.product_id)">
    <span class="item-image" :style="{'background-image':'url('+goodsData.info.product_img+')'}" :data-index="goodsData.index<=5?goodsData.index:''"></span>
    <div class="item-info">
      <p class="item-name">{{goodsData.info.title}}</p>
      <p class="item-desc">{{goodsData.info.abstract}}</p>
      <p class="item-price">{{goodsData.info.price}}<span v-if="goodsData.info.rebate_price">返利￥{{goodsData.info.rebate_price}}</span></p>
      <p class="item-data">{{goodsData.info.goos_evaluation*100}}%好评</p>
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
      jumpPage(product_id){
        wx.navigateTo({
          url:`/pages/goods/main?product_id=${product_id}`
        });
      }
    }
  }
</script>

<style scoped>
.item-goods{
  position: relative;
  width: 360rpx;
  height: 480rpx;
  border-radius: 7rpx;
  background: var(--color-foreground);
  margin-bottom: 10rpx;
  &:before{
    content: '';
    position: absolute;
    top: 310rpx;
    left: 0;
    width: 100%;
    height: 1rpx;
    background: var(--color-card-border);
    border-bottom: 1rpx solid var(--color-foreground);
  }
  .item-image{
    position: absolute;
    top: 43rpx;
    left: 50%;
    width: 220rpx;
    height: 235rpx;
    margin-left: -110rpx;
    overflow: hidden;
    background:var(--color-card-border) no-repeat center;
    background-size: cover;
    border-radius: 9rpx;
    &[data-index]:not([data-index=""]){
      &:before{
        /*content: '';*/
        position: absolute;
        top: -38rpx;
        left: -38rpx;
        width: 76rpx;
        height: 76rpx;
        background: var(--color-text-selected);
        transform:rotateZ(-45deg);
      }
      &:after{
        /*content: attr(data-index);*/
        position: absolute;
        font-size: 18rpx;
        width: 34rpx;
        height: 34rpx;
        line-height: 34rpx;
        text-align: center;
        color: var(--color-foreground);
      }
    }
  }
  .item-info{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 320rpx 15rpx 20rpx 15rpx;
    box-sizing: border-box;
    .item-name{
      font-size: 24rpx;
      line-height: 29rpx;
      height: 55rpx;
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
      padding-top: 10rpx;
      padding-bottom: 5rpx;
      line-height: 36rpx;
      font-size: 20rpx;
      color: var(--color-text-sub);
    }
    .item-price{
      position: relative;
      display: inline-block;
      font-size: 30rpx;
      font-weight: bold;
      color: var(--color-text-selected);
      &:before{
        content: '￥';
        font-size: 18rpx;
      }
      span{
        position: absolute;
        top: 50%;
        left: 100%;
        height: 24rpx;
        white-space: nowrap;
        margin-left: 5rpx;
        margin-top: -13rpx;
        padding: 0 9rpx;
        border-radius: 9rpx;
        font-size: 17rpx;
        line-height: 24rpx;
        font-weight: normal;
        background: var(--color-text-selected);
        color: var(--color-foreground);
      }
    }
    .item-data{
      position: absolute;
      bottom: 20rpx;
      right: 15rpx;
      font-size: 18rpx;
      white-space: nowrap;
      color: var(--color-text-sub);
    }
  }
}
</style>
