<template>
  <div class="input input-number" @click.stop>
    <span class="btn-sub btn-decrease" @click="num--">-</span>
    <input type="number" class="number" v-model="num">
    <span class="btn-sub btn-increase" @click="num++">+</span>
  </div>
</template>

<script>
  /*
  * props
  *   └ max 数量最大值
  * emit
  *   └ getNum 获取输入的数量
  * */
  export default {
    onUnload(){
    },
    onLoad () {
    },
    components: {
    },
    props: {
      max:{
        type: Number,
        default: 0
      },
      min:{
        type: Number,
        default: 0
      },
      initNum:{
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        num:this.initNum,
      }
    },
    watch:{
      num(val){
        const _val = val?val*1:0;
        const min_val = Math.max(this.min,_val);
        const max_val = Math.min(this.max,_val);
        if(min_val!==_val){
          this.num = min_val;
        }else if(this.max&&max_val!==_val){
          this.num = max_val;
        }else{
          this.num = _val;
        }
        this.$emit('getNum',this.num);
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .input-number{
    display: flex;
    height:40rpx;
    line-height: 40rpx;
    font-size: 24rpx;
    min-width: 140rpx;
    text-align: center;
    border: 1rpx solid var(--color-background);
    background: var(--color-background);
    .number{
      position: relative;
      height: 100%;
      line-height: 40rpx;
      min-height: auto;
      overflow: visible;
      z-index: 0;
      &:before{
        content: '';
        position: absolute;
        top: -10rpx;
        left: 0;
        width: 100%;
        height: 60rpx;
      }
    }
    .btn-sub{
      position: relative;
      flex: none;
      width: 30rpx;
      background: var(--color-foreground);
      &.btn-decrease{
        &:after{
          right: 0;
        }
      }
      &.btn-increase{
        &:after{
          left: 0;
        }
      }
      &:after{
        content: '';
        position: absolute;
        top: -10rpx;
        height: 60rpx;
        width: 60rpx;
      }
    }
  }
</style>
