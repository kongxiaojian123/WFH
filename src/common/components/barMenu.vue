<template>
  <div class="bar bar-menu">
    <span class='menu-span'></span>
    <div class="menu">
      <p v-for="(item,index) of menuType" :key="index" :class="{'selected':index===menuIndex}" @click="selectMenu(index)">{{item}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    onUnload(){
    },
    onLoad () {
    },
    props: {
      menuType: {
        type: Array,
        default: ['推荐', '商品']
      },
      menuIndex: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
      }
    },
    methods: {
      selectMenu: function (index) {
        this.$emit('selectMenu', index)
      }
    }
  }
</script>

<style scoped>
  .bar-menu{
    .menu, .menu-span{
      width: 100%;
      height: 70rpx;
      line-height: 70rpx;
      text-align: center;
    }
    .menu-span{
      display: block;
      padding-bottom: 5rpx;
    }
    .menu {
      display: flex;
      position: fixed;
      left: 0;
      top: 0;
      font-size: 34rpx;
      font-weight: bold;
      background: var(--color-foreground);
      box-shadow: 0 0 5rpx var(--color-view-shadow);
      z-index: 1000;
      p{
        flex: auto;
        position: relative;
        &.selected{
          color:var(--color-text-selected);
          &:before{
            content: '';
            position: absolute;
            left: 24%;
            bottom: 0;
            height: 5rpx;
            width: 52%;
            background: var(--color-text-selected);
          }
        }
      }
    }
  }
</style>
