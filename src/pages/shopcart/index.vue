<template>
  <div class="container">
    <div v-if="shopcartData" class="view-shopcart">
      <div class="head-shopcart">
        <span v-if="c_total.price>=freePost" class="tip">{{manageFlag?'':'已满'+freePost+'元,免邮费'}}</span>
        <span class="btn btn-manage" @click="manageFlag = !manageFlag">{{manageFlag?'完成':'管理'}}</span>
      </div>
      <div class="paster paster-shopcart">
        <item-shopcart v-for="(item,index) of shopcartData" :key="index" :index="index" :info="item" @checkGood="checkGood" @setNum="setNum"/>
      </div>
      <paster-preferential :info="shopcartData"/>
      <div class="bottom-shopcart">
        <div class="btn btn-all" :class="{'btn-all-show':isAll}" @click="clickAll"><span class="icon-unchecked" :class="{'checked':isAll}" ></span><span class="text">全选</span></div>
        <div v-if="!manageFlag" class="shopcart-info">
          <span class="total">总计: {{c_total.price}} {{c_total.num?"("+c_total.num+"件)":""}}</span>
          <span class="freight">运费: {{c_freight}}</span>
        </div>
        <span v-if="manageFlag" class="btn-delete" :class="[c_total.num>0?'btn-black':'btn-white']" @click="clickDelete">删除</span>
        <span v-else class="btn-complete" :class="[c_total.num>0?'btn-red':'btn-white']" @click="clickBill">结算</span>
      </div>
    </div>
    <div v-else class="shopcart-nothing">您的购物车暂无商品</div>
  </div>
</template>

<script>
import ItemShopcart from '../../common/components/itemShopcart';
import PasterPreferential from '../../common/components/pasterPreferential';
export default {
  onHide(){
    this.manageFlag = false;
  },
  onShow() {
  },
  components: {
    ItemShopcart,PasterPreferential
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
          let _price = parseFloat(item.price);
          if(isNaN(_price)) _price = 0;
          price+=_price;
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
      manageFlag:false,//管理flag
      freePost:0,//400免邮
      shopcartData:[
        {
          "shopping_id": "购物车产品id",
          "product_id": "产品id",
          "product_img": "产品图片",
          "title": "商品名称",
          "option": "口味:巧克力 规格:7磅",
          "price": "商品价格",
          "num": 12,
          "checked":false,
        }, {
          "shopping_id": "购物车产品id",
          "product_id": "产品id",
          "product_img": "产品图片",
          "title": "商品名称",
          "option": "口味:巧克力 规格:7磅",
          "price": "商品价格",
          "num": 12,
          "checked":false
        }, {
          "shopping_id": "购物车产品id",
          "product_id": "产品id",
          "product_img": "产品图片",
          "title": "商品名称",
          "option": "口味:巧克力 规格:7磅",
          "price": "商品价格",
          "num": 12,
          "checked":false
        }
      ]
    }
  },
  methods: {
    checkGood(index){
      this.shopcartData[index].checked = !this.shopcartData[index].checked;
    },
    setNum(data){
      this.shopcartData[data.index].num = data.num;
    },
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
    },
    clickDelete(){
      if(this.c_total.num>0){
        for(let i = 0;i<this.shopcartData.length;i++){
          const item = this.shopcartData[i];
          if(item.checked){
            this.shopcartData.splice(i,1);
            i--;
          }
        }
      }
    },
    clickBill(){
      if(this.c_total.num>0){
        console.log(123123);
      }
    }
  }
}
</script>

<style scoped>
.container{
  .view-shopcart{
    padding-top: 65rpx;
    padding-bottom: 130rpx;
    .head-shopcart{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 65rpx;
      line-height: 65rpx;
      padding: 0 25rpx;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 24rpx;
      background: var(--color-foreground);
      z-index: 100;
      .btn{
        justify-self: flex-end;
        height: 100%;
        padding: 0 5rpx;
        font-size: 30rpx;
      }
      &:before{
        content: '';
        position: absolute;
        top: 100%;
        left: 10rpx;
        right: 10rpx;
        height: 1rpx;
        background: var(--color-card-border);
      }
    }
    .paster-shopcart{
      :first-child{
        &:before{
          display: none;
        }
      }
    }
    .bottom-shopcart{
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
      z-index: 100;
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
      .btn-delete,.btn-complete{
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
