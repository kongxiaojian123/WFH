<template>
  <div class="paster paster-order-data">
    <div class="head">
      <p class="title">下单数据</p>
      <p class="time">月</p>
    </div>
    <canvas class="view-data" canvas-id="view-data"/>
  </div>
</template>

<script>
  import echarts from '../js/echarts.min';
  import WxCanvas from '../js/WxCanvas';
  let chart,canvasBounds;
  export default {
    onUnload(){
    },
    onLoad () {
    },
    mounted(){
      this.initChart();
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
      getCanvasBounds(next){
        const query = wx.createSelectorQuery();
        query.select('.view-data').boundingClientRect(res => {
          if(res){
            canvasBounds = {
              width:res.width,
              height:res.height
            };
          }
          next&&next();
        }).exec();
      },
      initChart(){
        const context = wx.createCanvasContext('view-data');
        const canvas = new WxCanvas(context,'view-data');
        echarts.setCanvasCreator(() => {
          return canvas;
        });
        this.getCanvasBounds(()=>{
          chart = echarts.init(canvas,null,{
            width:canvasBounds.width,
            height:canvasBounds.height,
          });
          canvas.setChart(chart);
          this.setData();
        });
      },
      setData(){
        var option = {
          grid:{
            left:0,
            top:0,
            right:0,
            bottom:0,
          },
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
            show:false
          },
          yAxis: {
            show:false
          },
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        };
        chart.setOption(option);
      }
    }
  }
</script>

<style scoped>
  .paster-order-data{
    padding: 25rpx;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .head{
      display: flex;
      justify-content: space-between;
      margin-bottom: 25rpx;
      font-size: 24rpx;
      .time{
        position: relative;
        padding-right: 35rpx;
        &:before{
          content: '>';
          position: absolute;
          right: 0;
          top: 50%;
          width: 60rpx;
          height: 60rpx;
          line-height: 60rpx;
          margin-top: -30rpx;
          margin-right: -25rpx;
          padding-bottom: 20rpx;
          text-align: center;
          transform:rotateZ(90deg) scaleY(1.5);
          transform-origin: 30rpx 30rpx;
          color: var(--color-text-sub);
        }
      }
    }
    .view-data{
      height: 230rpx;
      width: 700rpx;
    }
  }
</style>
