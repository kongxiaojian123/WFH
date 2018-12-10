<template>
  <div class="item item-evaluate">
    <div class="item-user-info">
      <img class="item" v-if="evaluate.user_img" :src="evaluate.user_img" alt="" />
      <span class="item user-name">{{evaluate.user_name}}</span>
      <span class="item user-level">V{{evaluate.comment_level}}</span>
    </div>
    <div class="item-msg">{{evaluate.comment_msg}}</div>
    <div class="item-img" v-if="evaluate.url_arr&&evaluate.url_arr.length">
      <div v-for="(item,index) of evaluate.url_arr" :key="index">
        <img class="item" v-if="item.type == 1" :src="item.img" alt="">
        <video class="item" v-if="item.type == 2" :src="item.img" :poster="item.cover"></video>
      </div>
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
      'evaluate'
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
  .item-evaluate{
    position: relative;
    padding: 25rpx;
    &:before{
      content: '';
      display: block;
      height: 1rpx;
      background: var(--color-card-border);
    }
    .item-user-info{
      display: flex;
      align-items: center;
      line-height: 50rpx;
      margin-bottom: 15rpx;
      > .item{
        margin-right: 10rpx;
      }
      img{
        width: 50rpx;
        height: 50rpx;
        border-radius: 25rpx;
        background: #000;
      }
      .user-name{
        font-weight: bold;
        font-size: 26rpx;
      }
      .user-level{
        height: 22rpx;
        line-height: 22rpx;
        font-size: 18rpx;
        border-radius: 10rpx;
        padding: 0 10rpx;
        color: var(--color-foreground);
        background: var(--color-tips-background-dark);
      }
    }
    .item-msg{
      font-size: 28rpx;
      line-height: 40rpx;
    }
    .item-img{
      display: flex;
      flex-wrap: wrap;
      .item{
        width: 150rpx;
        height: 150rpx;
        margin-right: 10rpx;
        margin-top: 10rpx;
        background: #000;
      }
    }
  }
</style>
