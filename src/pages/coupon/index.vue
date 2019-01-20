<template>
  <div class="container">
    <div class="list list-coupon">
      <PasterCoupon></PasterCoupon>
    </div>
  </div>
</template>

<script>
import PasterCoupon from '../../common/components/pasterCoupon';
export default {
  onHide(){
  },
  onShow() {
  },
  components: {
    PasterCoupon
  },
  data () {
    return {
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
    .list-coupon{
      display: flex;
      flex-direction: column;
      padding: 0 25rpx 25rpx;
      background: var(--color-foreground);
    }
  }
</style>
