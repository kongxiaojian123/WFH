<template>
  <div class="container">
    <div class="paster paster-personal">
      <ItemPortrait :info="{}" />
      <div class="item-rank">
        <div class="rank-title">
          <span>当前等级</span>
          <span>销售额(元)</span>
        </div>
        <div class="rank-data">
          <div class="my-rank">
            <div class="limit">
              <p class="level" :data-value="5800" :style="{left:(5/5*100)+'%'}">V1</p>
            </div>
          </div>
          <div class="flag-rank">
            <p>v1<br/>2000</p>
            <p>v2<br/>8000</p>
            <p>v3<br/>20000</p>
            <p>v4<br/>50000</p>
            <p>v5<br/>100000</p>
          </div>
        </div>
      </div>
    </div>
    <ViewImage :imgList="imgList"></ViewImage>
  </div>
</template>

<script>
import ItemPortrait from '../../common/components/itemPersonPortrait';
import PasterMyOlder from '../../common/components/pasterMyOlder';
import PasterMyService from '../../common/components/pasterMyService';
import ViewImage from '../../common/components/viewImage'
export default {
  onUnload(){
  },
  onLoad () {
  },
  components: {
    ItemPortrait,PasterMyOlder,PasterMyService,ViewImage
  },
  data () {
    return {
      imgList:['https://photo.16pic.com/00/04/73/16pic_473516_b.jpg']
    }
  },
  methods: {
  },
}
</script>

<style>
  .container{
    .paster-personal{
      margin-bottom: 10rpx;
      .item-rank{
        display: flex;
        font-size: 18rpx;
        margin: 60rpx 35rpx 50rpx 35rpx;
        color: var(--color-text-sub);
        >._div{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          &:first-of-type{
            margin-right: 50rpx;
          }
        }
        .rank-data{
          flex:auto;
          padding-top: 10rpx;
          .my-rank{
            height: 8rpx;
            width: 100%;
            border-radius: 4rpx;
            background: var(--color-text-translucence);
            display: flex;
            .limit{
              position: relative;
              flex:auto;
              margin-right: 40rpx;
            }
            .level{
              position: absolute;
              top: 50%;
              line-height: 22rpx;
              margin-top: -10rpx;
              margin-left: -20rpx;
              width: 40rpx;
              font-size: 22rpx;
              text-align: center;
              color: var(--color-text);
              border-radius:10rpx;
              background:var(--color-text-selected);
              &:before{
                content: attr(data-value);
                position: absolute;
                bottom: 105%;
                left: -50%;
                width: 200%;
                color:var(--color-text-selected);
                white-space: nowrap;
              }
            }
          }
          .flag-rank{
            display: flex;
            flex: auto;
            justify-content: space-around;
            font-size: 14rpx;
            line-height: 16rpx;
            text-align: center;
            padding-top: 20rpx;
          }
        }
      }
    }
  }
</style>
