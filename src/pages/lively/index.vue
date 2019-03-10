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
            <span v-else>({{item.doneCount}}&nbsp;/&nbsp;{{item.totalCount}})</span>
          </p>
          <progress :percent="item.doneCount/item.totalCount*100" stroke-width="4" activeColor="#ff4b57" border-radius="8"/>
          <!-- <div class="task-process">
            <!-- <p :style="{width: item.doneCount/item.totalCount*100}"></p> -->
          <!-- </div> -->
          <p class="task-val">
            <span class="left">活跃分值：{{item.singleIntegral}}分/次</span>
            <span class="right">累计分值：{{item.totalIntegral}}分</span>
          </p>
        </div>
        <span class="award-status received" v-if="item.receive">
          已领取
        </span>
        <span class="award-status noReceive" v-else>
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
          receive: true,
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
    getWidth(item) {
      console.log(`${item.doneCount/item.totalCount*100}%`);
      return `${item.doneCount/item.totalCount*100}%`
    }
  },
}
</script>

<style>
  .container {
  }
  .mouth-lively {
    display: flex;
    height: 360rpx;
    padding-top: 35rpx;
    background: var(--color-foreground);

    .icon {
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
        position: relative;
        width: 200rpx;
        height: 200rpx;
        background: var(--color-text);
        border-radius: 50%;
        color: var(--color-tab-text);
        font-size: 24rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        &:before{
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 24rpx;
          height: 24rpx;
          margin-left: -12rpx;
          margin-bottom: -10rpx;
          border-radius: 0 0 8rpx 0;
          background: var(--color-text);
          transform:rotateZ(45deg);
        }
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
        font-size: 22rpx;
        border: 1rpx solid var(--color-text);
        height: 30rpx;
        display: flex;
        align-items: center;
        padding: 0 30rpx;
        border-radius: 30rpx;
        margin: 20rpx 0 10rpx;
      }
      .explain {

      }
    }
  }
  .task-list{
    margin-top: 10rpx;
    background: var(--color-foreground);
  }
  .task-item{
    height: 145rpx;
    display:flex;
    align-items:center;
    position: relative;
    padding: 0 30rpx 0 55rpx;
    border-bottom: 1rpx solid var(--color-tab-text);
    .task-detail {
      width: 520rpx;
      float: left;
      font-size: 20rpx;
    }
    .task-ins {
      margin-right: 10rpx;
      margin-bottom: 5rpx;
      span {

      }
    }
    .live-name {
      margin-right: 15rpx;
    }
    .task-val {
      color: var(--color-text-sub);
      margin-top: 5rpx;
      .left {
        float: left;
      }
      .right {
        float: right;
      }
    }
    .award-status {
      width: 90rpx;
      line-height: 30rpx;
      font-size: 22rpx;
      text-align: center;
      border-radius: 8rpx;
      position:absolute;
      right:30rpx;
      border: 1rpx solid var(--color-text);
    }
    .received {
      background: var( --color-text-selected);
      color: var(--color-foreground);
      border: 1rpx solid var(--color-text-selected);
    }

  }
  .task-item:last-child {
    border-bottom: none;
  }

</style>
