<template>
  <div class="item item-recommend" @click="jumpPage(goodsData.info.product_id)">
    <span class="item-image" :style="{'background-image':'url('+goodsData.info.product_img+')'}" :data-index="goodsData.index<=5?goodsData.index:''"></span>
    <item-info :type="0" :info="goodsData.info"/>
  </div>
</template>

<script>
  import ItemInfo from './itemInfo.vue';
  export default {
    components: {
      ItemInfo
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
    background:var(--color-card-border) no-repeat center;
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
    }
  }
}
</style>
