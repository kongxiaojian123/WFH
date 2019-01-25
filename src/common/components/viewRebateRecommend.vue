<template>
  <div class="view view-rebate-recommend">
    <div class="item-total">
      <p class="total">累计推荐返利 (元) {{showMoney?'60000.00':'*****'}}</p>
      <p class="help">帮助</p>
    </div>
  </div>
</template>

<script>
  export default {
    onUnload(){
    },
    onLoad () {
    },
    components: {
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
  .view-rebate-recommend{
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
