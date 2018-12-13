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
      <!--</slot>-->
    </div>
  </div>
</template>

<script>
  export default {
    onUnload(){
      this.hide = false;
    },
    onLoad () {
    },
    components: {
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
    }
  }
}
</script>
<style scoped>
@import "../wxss/card.css";
.card-shopcart{
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
    .title{
      font-size: 24rpx;
      color: var(--color-text-sub);
    }
    .list-taste{
      display: flex;
      flex-wrap: wrap;
      padding-top: 5rpx;
      > span{
        font-size: 26rpx;
        flex: none;
        margin: 10rpx 25rpx 10rpx 0;
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
}
</style>
