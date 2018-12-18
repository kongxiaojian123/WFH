<template>
  <div class="container">
    <div v-if="shopcartData" class="shopcart-list">
      <div class="shopcart-ctr">
        <div class="btn btn-all" :class="{'btn-all-show':isAll}" @click="clickAll"><span class="icon-unchecked" :class="{'checked':isAll}" ></span><span class="text">全选</span></div>
        <div v-if="!manageFlag" class="shopcart-info">
          <span class="total">总计: {{c_total.price}} {{c_total.num?"("+c_total.num+"件)":""}}</span>
          <span class="freight">运费: {{c_freight}}</span>
        </div>
        <span v-if="manageFlag" class="btn-white btn-delete">删除</span>
        <span v-else class="btn-red btn-complete">结算</span>
      </div>
    </div>
    <div v-else class="shopcart-nothing">您的购物车暂无商品</div>
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
  computed:{
    isAll(){
      return  (this.c_total.num&&this.c_total.num === this.shopcartData.length);
    },
    c_total(){
      let price = 0;
      let num = 0;
      this.shopcartData.forEach(item=>{
        if(item.checked){
          price+=parseFloat(item.price);
          num++;
        }
      });
      return {
        price:price.toFixed(2),
        num:num
      };
    },
    c_freight(){
      //运费
      return (0).toFixed(2);
    }
  },
  data () {
    return {
      manageFlag:true,
      shopcartData:[
        {
          "shopping_id": "购物车产品id",
          "product_id": "产品id",
          "product_img": "产品图片",
          "title": "商品名称",
          "option": "口味:巧克力 规格:7磅",
          "price": "商品价格",
          "num": "购买数量",
          "checked":false
        },
        {
          "shopping_id": "购物车产品id",
          "product_id": "产品id",
          "product_img": "产品图片",
          "title": "商品名称",
          "option": "口味:巧克力 规格:7磅",
          "price": "商品价格",
          "num": "购买数量",
          "checked":false
        },
      ]
    }
  },
  methods: {
    clickAll(){
      if(this.isAll){
        //取消全选
        this.shopcartData.forEach(item=>{
          item.checked = false;
        });
      }else{
        //全选
        this.shopcartData.forEach(item=>{
          item.checked = true;
        });
      }
    }
  }
}
</script>

<style scoped>
.container{
  .shopcart-list{
    .shopcart-ctr{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 25rpx;
      box-sizing: border-box;
      background: var(--color-foreground);
      box-shadow: 0 0 50rpx var(--color-view-shadow);
      display: flex;
      justify-content: space-between;
      .btn-all{
        position: relative;
        flex: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: flex-end;
        color: var(--color-text-sub);
        &.btn-all-show{
          color: var(--color-text-selected);
        }
      }
      .shopcart-info{
        padding: 0 25rpx;
        flex: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        .total{
          font-size: 24rpx;
        }
        .freight{
          font-size: 20rpx;
          color: var(--color-text-sub);
        }
      }
      .btn-delete,.btn-red{
        align-self: flex-end;
        flex: none;
        width: 200rpx;
        line-height: 70rpx;
      }
    }
  }
  .shopcart-nothing{
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
