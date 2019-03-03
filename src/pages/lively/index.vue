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
    border-bottom: 1rpx solid var(--color-light-grey);
    .task-detail {
      width: 520rpx;
      float: left;
      font-size: 20rpx;
    }
    .task-ins {
      color: var(--color-grey);
      margin-right: 10rpx;
      margin-bottom: 5rpx;
      span {

      }
    }
    .live-name {
      margin-right: 15rpx;
    }
    /* .task-process {
      width: 100%;
      height: 8rpx;
      position: relative;
      border-radius: 4rpx;
      background: var(--color-light-grey); */
      /* p {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 4rpx;
        background: var(--color-text-selected);
      } */
    /* } */
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
      height: 29rpx;
      border: 1rpx solid var(--color-grey);
      color: var(--color-grey);
      background: #ffffff;
      font-size: 22rpx;
      text-align: center;
      line-height: 29rpx;
      border-radius: 29rpx;
      position:absolute;
      right:30rpx;
    }
    .received {
      background: var( --color-text-selected);
      color: #ffffff;
      border: 1rpx solid var(--color-text-selected);
    }

  }
  .task-item:last-child {
    border-bottom: none;
  }

</style>
