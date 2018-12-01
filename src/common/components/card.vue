<template>
  <div class="card" :class="{'close-ani':hide}">
    <div class="card-main">
      <span class="close-btn" @click="clickClose"></span>
      <slot/>
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
    props: [],
    data () {
      return {
        hide:false,
      }
    },
    methods: {
      clickClose(){
        this.hide = true;
        setTimeout(()=>{
          this.$parent.$emit('close');
        },500);
      }
    }
  }
</script>

<style scoped>
  .card{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-card-background);
    transition:background-color .5s;
    z-index: 100;
    animation:fadeIn 0.5s ease-in-out forwards;
    &.close-ani{
       animation:fadeOut 0.5s ease-in-out forwards;
      .card-main{
        animation:popOut 0.5s ease-in-out forwards;
        pointer-events: none;
      }
    }
  .card-main{
    position: absolute;
    bottom: -20rpx;
    left: 0;
    width: 100%;
    padding: 60rpx 20rpx 80rpx;
    max-height: 85%;
    min-height: 310rpx;
    box-sizing: border-box;
    background: var(--color-foreground);
    border-radius: 8rpx 8rpx 0 0;
    animation:popIn 0.5s ease-in-out forwards;
    .close-btn{
      position: absolute;
      top: 10rpx;
      right: 20rpx;
      width: 60rpx;
      height: 60rpx;
      background: var(--icon-close) no-repeat center;
      background-size: 30rpx 30rpx;
    }
  }
}
  @keyframes fadeIn {
    0%,30%{
      background-color: transparent;
    }
  }
  @keyframes fadeOut {
    70%,100%{
      background-color: transparent;
    }
  }
  @keyframes popIn {
    0%{
      opacity: 0;
      transform: translateY(300rpx);
    }
    50%{
      opacity: 1;
    }
    80%{
      transform:translateY(-20rpx);
    }
  }
  @keyframes popOut {
    20%{
      transform:translateY(-20rpx);
    }
    50%{
      opacity: 1;
    }
    100%{
      opacity: 0;
      transform: translateY(300rpx);
    }
  }
</style>
