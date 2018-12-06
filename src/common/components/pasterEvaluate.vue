<template>
  <div class="paster paster-evaluate" v-if="info.comment_num">
    <p class="item-title">产品评价({{info.comment_num}})</p>
    <p class="item-data">{{info.goos_evaluation*100}}%好评 ></p>
    <div class="item-tips">
      <span>价格实惠(1800)</span>
      <span>价格实惠(1800)</span>
      <span>价格实asd惠(1800)</span>
      <span>价asd格实asasd惠(1800)</span>
    </div>
    <item-evaluate v-if="info.comment_list.length" :evaluate="info.comment_list[0]"/>
  </div>
</template>

<script>
  import ItemEvaluate from './itemEvaluate';
  export default {
    onUnload(){
    },
    onLoad () {
    },
    components: {
      ItemEvaluate,
    },
    props: [
      'info'
    ],
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .paster-evaluate{
    position: relative;
    margin-bottom: 10rpx;
    background: var(--color-foreground);
    .item-title{
      padding: 30rpx 25rpx 0;
      font-size: 28rpx;
      font-weight: bold;
    }
    .item-data{
      position: absolute;
      right: 25rpx;
      top: 30rpx;
      font-size: 24rpx;
      color: var(--color-text-selected);
    }
    .item-tips{
      padding: 25rpx 25rpx 0;
      display: flex;
      flex-wrap: wrap;
      font-size: 22rpx;
      line-height: 35rpx;
      span{
        white-space: nowrap;
        padding: 0 10rpx;
        margin-bottom: 10rpx;
        margin-right: 15rpx;
        background: var(--color-tips-background-light);
        border-radius: 6rpx;
      }
    }
    >>> .item-evaluate{
      padding-top: 15rpx;
      &:before{
        content: none;
      }
    }
  }
</style>
