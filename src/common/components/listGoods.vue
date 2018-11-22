<template>
  <div class="list list-goods" v-if="goodsList&&goodsList.length">
    <item-goods v-for="(item,index) of goodsList" :key="index" :goodsData="{index:index+1,info:item}"/>
  </div>
</template>

<script>
  import ItemGoods from './itemGoods'
  export default {
    name: 'listRecommend',
    components: {
      ItemGoods,
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
.list-goods{
  width: 100%;
  padding: 0 10rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
}
</style>
