<template>
    <div class="adds no-adds" v-if="!(addsData && addsData.user_name)">
      <i class="icon icon-adds"></i>
      <span @click="addAdds">添加收货地址</span>
    </div>
    <div class="adds has-adds" v-else>
      <div class="selected-adds">
        <span class="selected-name">{{addsData.user_name}}</span>
        <span class="selected-tel">{{addsData.mobile}}</span>
        <span class="default-flag">默认</span>
      </div>
      <div class="detail-add">
        <i class="icon icon-adds"></i>
        <span>详细地址：{{addsData.address}}</span>
        <i class="more-adds" @click="showAddsList">></i>
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
    props: ['addsData'],
    data(){
      return{

      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .adds{
    background: var(--color-foreground);
    color: var(--color-text);
    padding: 20rpx 0 35rpx 28rpx;
  }
  .icon-adds{
    width: 16rpx;
    height: 22rpx;
    display: inline-block;
    background: var(--icon-location) no-repeat;
    background-size: contain;
  }
  .no-adds{
    span {
      font-size:26rpx;
      padding-left:10rpx;

    }
  }
  .selected-adds{
    display: flex;
    align-items: center;
    font-size: 26rpx;
    margin-bottom:15rpx;
    > span{
      margin-right: 10rpx;
    }
  }
  .default-flag{
    width: 55rpx;
    font-size:18rpx;
    line-height: 25rpx;
    text-align: center;
    border-radius: 25rpx;
    color: var(--color-foreground);
    background: var(--color-text);
  }
  .detail-add{
    font-size:24rpx;
    display:flex;
    >span{
      flex:1;
      margin-left:10rpx;
    }
    .icon-adds{
      margin-top: 6rpx;
    }
    .more-adds{
      width: 15rpx;
      margin-right:25rpx;
      color: var(--color-text-sub);
    }
  }

</style>
