<template>
  <div class="paster paster-shopcart" v-if="info">
    <span class="icon-unchecked" :class="{'checked':info.checked}" @click="$emit('checkGood',index)"></span>
    <span class="item-image" :style="{'background-image':'url('+info.product_img+')'}"></span>
    <item-info :type="3" :info="info"/>
    <input-number :initNum="info.num" @getNum="getNum"/>
  </div>
</template>

<script>
  import ItemInfo from './itemInfo.vue';
  import InputNumber from './inputNumber.vue';
  export default {
    onUnload(){
    },
    onLoad () {
    },
    components: {
      ItemInfo,InputNumber
    },
    props: [
      'info','index'
    ],
    data () {
      return {
      }
    },
    methods: {
      getNum(num){
        this.$emit('setNum',{
          index:this.index,
          num:num
        });
      }
    }
  }
</script>

<style scoped>
  .paster-shopcart{
    position: relative;
    display: flex;
    align-items: center;
    padding: 30rpx;
    box-sizing: border-box;
    &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 10rpx;
      right: 10rpx;
      height: 1rpx;
      background: var(--color-card-border);
    }
    .item-image{
      flex: none;
      margin-left: 20rpx;
      margin-right: 25rpx;
      width: 150rpx;
      height: 150rpx;
      border-radius: 10rpx;
      background:var(--color-card-border) no-repeat center;
      background-size: cover;
    }
    >>> .input-number{
      position: absolute;
      right: 30rpx;
      bottom: 30rpx;
      width: 140rpx;
    }
  }
</style>
