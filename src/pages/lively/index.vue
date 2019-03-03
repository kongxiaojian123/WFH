<template>
  <div class="container">
    <div class="mouth-lively">
      <i class="icon icon-left">l</i>
      <div class="mouth-ins">
        <div class="live-val-bg">
          <div class="live-val">
            <p class="val" :class="{top: top}">30000 <i></i></p>
            <p>本月活跃度</p>
          </div>
        </div>
        <p class="time">{{startTime}}-{{endTime}}</p>
        <div class="explain">活跃值说明 <span>&gt;</span></div>
      </div>
      <i class="icon icon-right">&gt;</i>
    </div>
    <div class="task-list">
      <div class="task-item" v-for="(item, index) in taskList" :key="index">
        <div class="task-detail">
          <p class="task-ins">
            <span class="live-name">{{item.name}}</span>
            <span v-if="item.forever">(永久{{item.totalCount}}次)</span>
            <span v-else>({{item.doneCount/item.totalCount}})</span>
          </p>
          <p class="task-process"></p>
          <p class="task-val">
            <span>活跃分值：{{item.singleIntegral}}分/次</span>
            <span>累计分值：{{item.totalIntegral}}分</span>
          </p>
        </div>
        <span class="received" v-if="item.receive">
          已领取
        </span>
        <span class="noReceive" v-else>
          未领取
        </span>
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
  data () {
    return {
      top: true,
      mouth: 10,
      startTime: '2018.10.1',
      endTime: '2018.10.31',
      taskList: [
        {
          name: '实名认证',
          singleIntegral: '50',
          totalIntegral: '100',
          totalCount: 5,
          doneCount: 3,
          forever: true,
          receive: false,
        },
          {
          name: '实名认证',
          singleIntegral: '100',
          totalIntegral: '100',
          totalCount: 5,
          doneCount: 3,
          forever: false,
          receive: false,
        }
      ]
    }
  },
  computed: {
    
  },
  methods: {
  },
}
</script>

<style>
  .container {
  }
  .mouth-lively {
    display: flex;
    margin-top: 35rpx;

    .icon {
      color: var(--color-grey);
      font-size: 20.28rpx;
      display: flex;
      justify-content: center;
      /* align-items: center; */
      flex-grow: 1;
      padding-top: 50rpx;
      &.icon-left {

      }
      &.icon-right {

      }

    }
    .mouth-ins {
      flex-grow: 2;
      display:flex;
      flex-direction:column;
      align-items:center;

      .live-val-bg {
        width: 200rpx;
        height: 200rpx;
        background: var(--color-grey);
        border-radius: 50%;
        color: var(--color-light-grey);
        font-size: 24rpx;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .live-val {
        
      } 
      .val {
        font-size: 36rpx;

      }
      .top {
        & i {
          width: 15rpx;   
          height: 26rpx;
          display: inline-block;
          background: var(--icon-up) no-repeat;
          background-position: center center;
          background-size: contain;
        }    
      }

      .time{
        color: var(--color-grey);
        font-size: 22rpx;
        border: 1rpx solid var(--color-grey);
        height: 30rpx;
        display: flex;
        align-items: center;
        padding: 0 30rpx;
        border-radius: 30rpx;
        margin: 5rpx 0 10rpx;
      }
      .explain {

      }
    }
  }

</style>
