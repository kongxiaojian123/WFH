<template>
  <div v-if="!shopcartData" class="container">

  </div>
  <div v-else class="container nothing">您的购物车暂无商品</div>
</template>

<script>
export default {
  onUnload(){
  },
  onLoad () {
  },
  components: {
  },
  data () {
    return {
      shopcartData:[
        {
          "shopping_id": "购物车产品id",
          "product_id": "产品id",
          "product_img": "产品图片",
          "title": "商品名称",
          "option": "口味:巧克力 规格:7磅",
          "price": "商品价格",
          "num": "购买数量",
        },
        {
          "shopping_id": "购物车产品id",
          "product_id": "产品id",
          "product_img": "产品图片",
          "title": "商品名称",
          "option": "口味:巧克力 规格:7磅",
          "price": "商品价格",
          "num": "购买数量",
        },
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.container{
  &.nothing{
    position: relative;
    width: 100%;
    background: var(--icon-shopcart-nothing) no-repeat center 145rpx;
    background-size: 162rpx 154rpx;
    text-align: center;
    font-size: 24rpx;
    color: var(--color-text-sub);
    padding: 320rpx 100rpx 140rpx;
    box-sizing: border-box;
  }
}
</style>
