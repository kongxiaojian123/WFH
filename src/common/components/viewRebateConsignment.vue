<template>
  <div class="view view-rebate-consignment">
    <div class="item-total">
      <p class="total">累计代销返利 (元) {{showMoney?'60000.00':'*****'}}</p>
      <p class="help">帮助</p>
    </div>
    <PasterOrderData/>
  </div>
</template>

<script>
  import PasterOrderData from './pasterOrderData';
  export default {
    onUnload(){
    },
    onLoad () {
    },
    components: {
      PasterOrderData,
    },
    props: [
      'showMoney'
    ],
    data () {
      return {
      }
    },
    watch:{
    },
    computed:{
    },
    mounted(){
    },
    methods: {
    }
  }
</script>

<style scoped>
  .view-rebate-consignment{
    .item-total{
      line-height: 80rpx;
      margin-bottom: 10rpx;
      background: var(--color-foreground);
      display: flex;
      justify-content: space-between;
      padding: 0 25rpx;
      &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 10rpx;
        right: 10rpx;
        height: 1rpx;
        background: var(--color-tab-text);
      }
      .help{
        padding-left: 25rpx;
      }
    }
  }
</style>
