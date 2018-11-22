<template>
  <div class="list list-recommend" v-if="goodsList&&goodsList.length">
    <item-recommend v-for="(item,index) of goodsList" :key="index" :goodsData="{index:index+1,info:item}"/>
  </div>
</template>

<script>
  import ItemRecommend from './itemRecommend'
  export default {
    name: 'listRecommend',
    components: {
      ItemRecommend,
    },
    props: {
    },
    data () {
      return {
        goodsList:[
          {
            "product_id": "产品id",
            "product_img": "https://photo.16pic.com/00/04/73/16pic_473516_b.jpg",
            "sale_volume": "1000",
            "title": "商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称",
            "abstract": "商品简介",
            "price": "188",
            "rebate_price": "20",
            "goos_evaluation": "0.98", //好评率  等于98%
          },
          {
            "product_id": "产品id",
            "product_img": "https://photo.16pic.com/00/04/73/16pic_473516_b.jpg",
            "sale_volume": "1000",
            "title": "商品名称",
            "abstract": "商品简介",
            "price": "188",
            "rebate_price": "3",
            "goos_evaluation": 0.98, //好评率  等于98%
          },
        ]
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
.list-recommend{
  position: relative;
  width: 100%;
  padding-top: 82rpx;
  margin-bottom: 10rpx;
  background: var(--color-foreground);
  &:before{
    content: '热销推荐';
    position: absolute;
    top: 0;
    left: 25rpx;
    height: 82rpx;
    line-height: 82rpx;
    font-weight: bold;
    font-size: 32rpx;
  }
}
</style>
