<template>
  <div class="item person-portrait">
    <img class="portrait" :src="avatarUrl" />
    <p class="name">{{nickName}}</p>
    <p class="level">V1</p>
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
    computed:{
      nickName(){
        return this.userInfo.nickName;
      },
      avatarUrl(){
        return this.userInfo.avatarUrl;
      }
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .person-portrait{
    position: relative;
    display: flex;
    align-items: center;
    align-self: flex-start;
    color: var(--color-tab-text);
    .portrait{
      width: 80rpx;
      height: 80rpx;
      border-radius:50%;
      /*background:var(--color-foreground);*/
    }
    .name{
      white-space: nowrap;
      flex: none;
      font-size: 30rpx;
      text-align: center;
      margin: 0rpx 0rpx 0rpx 20rpx;
    }
    .level{
      position: relative;
      height: 22rpx;
      line-height: 22rpx;
      padding: 0 8rpx;
      flex: none;
      font-size: 22rpx;
      text-align: center;
      color: var(--color-text);
      margin: 0rpx 0rpx 0rpx 15rpx;
      border-radius:10rpx;
      background:var(--color-text-selected);
    }
  }
</style>
