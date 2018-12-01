<template>
  <div class="item item-goods" @click="jumpPage(goodsData.info.product_id)">
    <span class="item-image" :style="{'background-image':'url('+goodsData.info.product_img+')'}" :data-index="goodsData.index<=5?goodsData.index:''"></span>
    <item-info :type="1" :info="goodsData.info"/>
  </div>
</template>

<script>
  import ItemInfo from './itemInfo.vue';
  export default {
    onUnload(){
    },
    onLoad () {
    },
    components: {
      ItemInfo,
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
}
</style>
