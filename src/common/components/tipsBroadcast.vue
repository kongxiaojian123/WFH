<template>
  <div class="tips tips-broadcast" :class="{'ani-broadcast':broadcastAnimation}" v-if="broadcastData&&broadcastData.length">
    <div class="tip-border">
      <p @animationend="broadcastAnimationEnd(index)" v-for="(item,index) of showBroadcast" :key="index">{{item.message}}</p>
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
    props: {
    },
    data () {
      return {
        broadcastData: [
          {message: 111},
          {message: 222}
        ],
        broadcastIndex: 0,
        broadcastAnimation: false,
        switchBroadcast: false
      }
    },
    computed: {
      showBroadcast () {
        if (this.broadcastData && this.broadcastData.length > 1) {
          this.broadcastAnimation = true
          if (this.switchBroadcast) {
            return [
              this.broadcastData[this.broadcastIndex],
              this.broadcastData[this.broadcastIndex]
            ]
          } else {
            return [
              this.broadcastData[this.broadcastIndex],
              this.broadcastData[(this.broadcastIndex + 1) % this.broadcastData.length]
            ]
          }
        } else {
          return this.broadcastData || []
        }
      }
    },
    created () {
    },
    methods: {
      broadcastAnimationEnd (index) {
        if (!index) {
          this.switchBroadcast = true
          this.broadcastIndex = (this.broadcastIndex + 1) % this.broadcastData.length
          setTimeout(() => {
            this.broadcastAnimation = false
            setTimeout(() => {
              this.switchBroadcast = false
              this.broadcastAnimation = true
            }, 50)
          }, 50)
        }
      }
    }
  }
</script>

<style scoped>
  .tips-broadcast{
    position: relative;
    width: 660rpx;
    padding: 24rpx 10rpx 24rpx 64rpx;
    height: 40rpx;
    line-height: 40rpx;
    margin: 0 8rpx 9rpx 8rpx;
    border-radius: 8rpx;
    background: var(--color-foreground) var(--icon-broadcast) no-repeat 17rpx center;
    background-size: 30rpx 30rpx;
    overflow: hidden;
    box-shadow: 0 3rpx 7rpx var(--color-view-shadow);
    .tip-border{
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    &.ani-broadcast{
      p{
        animation:aniBroadcast 1.5s 3s ease-in-out forwards;
      }
    }
    p{
      position: relative;
      white-space:nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  @keyframes aniBroadcast {
    100%{
      transform: translateY(-100%);
    }
  }
</style>
