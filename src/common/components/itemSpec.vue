<template>
  <div class="item item-spec">
    <p class="s-item s-item-select" @click="$emit('popupShopcart',true)"><span class="type">选择</span><span>请选择口味  规格</span><span class="more">></span></p>
    <p class="s-item s-item-params" @click="$emit('setParams',true)"><span class="type">参数</span><span>生产日期  产地…</span><span class="more">></span></p>
    <p class="s-item s-item-sexplain"><span class="type">说明</span><span>药监认证 · 假一赔十 · 极速退款</span></p>
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
  .item-spec{
    position: relative;
    margin-bottom: 10rpx;
    padding: 10rpx 25rpx;
    background: var(--color-foreground);
    font-size:24rpx;
    line-height: 55rpx;
    .s-item{
      > span{
        display: inline-block;
      }
      .type{
        width: 80rpx;
        color: var(--color-text-sub);
      }
      .more{
        float: right;
        color: var(--color-text-sub);
      }
    }
  }
</style>
