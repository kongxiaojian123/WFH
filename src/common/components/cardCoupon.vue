<template>
  <div class="card" :class="{'close-ani':hide}">
    <div class="card-main" data-title="优惠券">
      <span class="close-btn" @click="clickClose"></span>
      <div class="paster-menu">
        <p class="item-menu" :class="{checked:type===0}" @click="type=0">可用优惠券(0)</p>
        <p class="item-menu" :class="{checked:type===1}" @click="type=1">不可用优惠券(1)</p>
      </div>
      <scroll-view :scroll-y="true" :style="{height:c_scrollHeight}">
        <PasterCoupon :type="1"></PasterCoupon>
      </scroll-view>
    </div>
  </div>
</template>

<script>
  import PasterCoupon from './pasterCoupon';
  export default {
    onUnload(){
      this.hide = false;
    },
    onLoad () {
    },
    components: {
      PasterCoupon
    },
    props: [],
    data () {
      return {
        hide:false,
        type:0,
      }
    },
    computed:{
      c_scrollHeight(){
        return `${this.systemInfo.windowHeight*.85 - (120+90+70)*this.systemInfo.windowWidth/750}px`;
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
  .card{
    .card-main{
      padding-top: 120rpx !important;
      font-size: 24rpx;
      .paster-menu{
        display: flex;
        justify-content: space-around;
        height: 70rpx;
        line-height: 70rpx;
        text-align: center;
        .item-menu{
          min-width: 200rpx;
          border-bottom: 5rpx solid transparent;
          &.checked{
            color: var(--color-text-selected);
            border-color: var(--color-text-selected);
          }
        }
      }
    }
  }
</style>
