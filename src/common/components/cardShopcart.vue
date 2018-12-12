<template>
  <div class="card card-shopcart" :class="{'close-ani':hide}">
    <div class="card-main">
      <span class="close-btn" @click="clickClose"></span>
      <!--<slot>-->
        <div class="item-preview">
          <span v-if="product_img" class="item-image" :style="{'background-image':'url('+product_img+')'}"></span>
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
      .item-image{
        width: 150rpx;
        height: 150rpx;
      }
    }
  }
</style>
