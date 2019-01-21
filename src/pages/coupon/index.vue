<template>
  <div class="container">
    <div class="paster paster-menu">
      <p class="item" :class="{selected:menuId===0}" @click="menuId=0">未使用</p>
      <p class="item" :class="{selected:menuId===1}" @click="menuId=1">已使用</p>
      <p class="item" :class="{selected:menuId===2}" @click="menuId=2">已过期</p>
    </div>
    <div class="list list-coupon">
      <PasterCoupon></PasterCoupon>
    </div>
  </div>
</template>

<script>
import PasterCoupon from '../../common/components/pasterCoupon';
export default {
  onUnload(){
    this.menuId = 0;
  },
  onLoad () {
  },
  components: {
    PasterCoupon
  },
  data () {
    return {
      menuId:0
    }
  },
  methods: {
    pageTo(id){
    }
  },
}
</script>

<style>
  .container{
    .paster-menu{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: space-around;
      .item{
        position: relative;
        line-height: 60rpx;
        font-weight: bold;
        border-bottom: 5rpx solid transparent;
        &.selected{
          border-color: var(--color-text-selected);
        }
      }
    }
    .list-coupon{
      margin-top: 75rpx;
      display: flex;
      flex-direction: column;
      padding: 0 25rpx 25rpx;
      background: var(--color-foreground);
    }
  }
</style>
