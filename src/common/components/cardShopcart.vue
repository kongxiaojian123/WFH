<template>
  <div class="card card-shopcart" :class="{'close-ani':hide}">
    <div class="card-main">
      <span class="close-btn" @click="clickClose"></span>
      <!--<slot>-->
      <div class="item-preview">
        <span v-if="product_img" class="item-image" :style="{'background-image':'url('+product_img+')'}"></span>
        <div class="item-desc">
          <p class="item-price"><span>￥</span>{{info.price}}</p>
          <p class="item-inventory">库存数量 {{info.inventory}}件</p>
        </div>
      </div>
      <div class="item-taste">
        <p class="title">口味</p>
        <div class="list-taste">
          <span class="selected">啦啦啦</span>
          <span>啦啦啦</span>
          <span>啦啦啦啦啦啦</span>
          <span>啦啦啦</span>
          <span>啦啦啦啦啦啦</span>
          <span>啦啦啦</span>
          <span>啦啦啦</span>
          <span>啦啦啦啦啦啦</span>
        </div>
      </div>
      <div class="item-number">
        <p class="title">下单数量</p>
        <input-number :max="0" @getNum="getNum"/>
      </div>
      <hr/>
      <div class="btn btn-submit">加入购物车</div>
      <!--</slot>-->
    </div>
  </div>
</template>

<script>
  import InputNumber from './inputNumber';
  export default {
    onUnload(){
      this.hide = false;
    },
    onLoad () {
    },
    components: {
      InputNumber
    },
    props: [
      'info'
    ],
    computed:{
      product_img(){
        if (typeof this.info.product_img === 'string'){
          return this.info.product_img;
        }else if(this.info.product_img&&this.info.product_img.length){
          return this.info.product_img[0].type==1?this.info.product_img[0].img:this.info.product_img[0].cover;
        }else{
          return '';
        }
      }
    },
    data () {
      return {
        hide:false,
      }
    },
    methods: {
      clickClose(){
        this.hide = true;
        setTimeout(()=>{
           this.$emit('close');
        },500);
      },
      getNum(num){
        console.log(num);
      }
    }
  }
</script>
<style scoped>
@import "../wxss/card.css";
.card-shopcart{
  .title{
    font-size: 24rpx;
    color: var(--color-text-sub);
  }
  .item-preview{
      display: flex;
      padding-left: 20rpx;
      padding-bottom: 35rpx;
      .item-image{
          flex: none;
          width: 150rpx;
          height: 150rpx;
          border-radius: 8rpx;
          background: var(--color-card-border) no-repeat center;
          background-size: cover;
      }
      .item-desc{
          flex: auto;
          padding-left: 30rpx;
          display: flex;
          flex-direction:column;
          justify-content: flex-end;
          .item-price{
              font-weight: bold;
              font-size: 34rpx;
              color: var(--color-text-selected);
              span{
                  font-size: 20rpx;
              }
          }
          .item-inventory{
              font-size: 22rpx;
              color: var(--color-text-sub);
          }
      }
  }
  .item-taste{
    display: flex;
    flex-direction:column;
    margin-bottom:35rpx;
    .list-taste{
      display: flex;
      flex-wrap: wrap;
      > span{
        font-size: 26rpx;
        flex: none;
        margin: 15rpx 25rpx 5rpx 0;
        border: 1rpx solid var(--color-background);
        background: var(--color-background);
        padding: 5rpx 20rpx;
        border-radius: 40rpx;
        &.selected{
          background: var(--color-tips-background-red);
          border-color: var(--color-text-selected);
          color: var(--color-text-selected);
        }
      }
    }
  }
  .item-number{
    display: flex;
    justify-content:space-between;
    >>> .input-number{
      width: 140rpx;
    }
  }
  .btn-submit{
    line-height: 70rpx;
    font-size: 34rpx;
  }
}
</style>
