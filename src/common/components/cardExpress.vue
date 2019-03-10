<template>
  <div class="card" :class="{'close-ani':hide}">
    <div class="card-main" data-title="配送方式">
      <span class="close-btn" @click="clickClose"></span>
      <div class="item">
        <p class="title">物流选择</p>
        <div class="select">
          <p class="option" :class="{checked:type===0}" @click="$emit('setType',0)">顺丰到付</p>
          <p class="option" :class="{checked:type===1}" @click="$emit('setType',1)">普通快递</p>
        </div>
      </div>
      <p class="item item-p">默认申通快递或韵达快递，如遇无法配送至所在地区，需更换物流，请联系客服补运费差价。</p>
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
    props: ['type'],
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
  .card{
    .item{
      display: flex;
      justify-content: space-between;
      align-content: center;
      margin: 15rpx 0;
      font-size: 24rpx;
      .select{
        display: flex;
        .option{
          height: 40rpx;
          line-height: 40rpx;
          padding: 0 25rpx;
          margin-left: 15rpx;
          box-sizing: border-box;
          border-radius: 20rpx;
          background: var(--color-tips-background-red);
          border: 1rpx solid transparent;
          &.checked{
            color: var(--color-text-selected);
            border-color: var(--color-text-selected);
          }
        }
      }
      &:first-of-type{
        margin-top: 0;
      }
      &.item-p{
        color: var(--color-text-sub);
        font-size: 20rpx;
      }
    }
  }
</style>
