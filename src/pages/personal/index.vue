<template>
  <div class="container">
    <div class="paster paster-personal">
      <ItemPortrait :info="{}" />
      <div class="item-active">
        <p class="active-info">本月活跃值: 89     (返利权重???)</p>
        <p class="active-more">详细评分</p>
      </div>
    </div>
  </div>
</template>

<script>
  import ItemPortrait from '../../common/components/itemPersonPortrait';
export default {
  onHide(){
  },
  onShow() {
  },
  components: {
    ItemPortrait
  },
  data () {
    return {
    }
  },
  methods: {
  },
}
</script>

<style>
  .container{
    .paster-personal{
      .item-active{
        position: relative;
        height: 100rpx;
        margin-top: 50rpx;
        padding: 10rpx;
        display: flex;
        align-items: center;
        flex: auto;
        justify-content: space-between;
        box-sizing: border-box;
        border-radius:10rpx 10rpx 0rpx 0rpx;
        background: var(--color-tips-background-dark);
        box-shadow: 0rpx 3rpx 44rpx 2rpx var(--color-view-shadow);
        font-size: 24rpx;
        text-align: center;
        .active-info{
          flex: auto;
          height: 35rpx;
        }
        .active-more{
          flex: none;
          width: 160rpx;
          height: 35rpx;
          border-left: 1rpx solid var(--color-text-sub);
        }
      }
    }
  }
</style>
