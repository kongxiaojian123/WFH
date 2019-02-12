<template>
  <div class="container">
    <div class="menu">
      <p class="item" :class="{selected:menuId===0}" @click="menuId=0">活动公告</p>
      <p class="item" :class="{selected:menuId===1}" @click="menuId=1">品牌介绍</p>
      <p class="item" :class="{selected:menuId===2}" @click="menuId=2">新手入门</p>
    </div>
    <div class="main main-activity" v-if="menuId===0">
      <p class="paster paster-activity" data-desc="优惠活动" @click="pageTo('activity')"></p>
      <p class="paster paster-activity" data-desc="优惠活动" @click="pageTo('activity')"></p>
      <p class="paster paster-activity" data-desc="优惠活动" @click="pageTo('activity')"></p>
      <p class="paster paster-activity" data-desc="优惠活动" @click="pageTo('activity')"></p>
      <p class="paster paster-activity" data-desc="优惠活动" @click="pageTo('activity')"></p>
    </div>
    <div class="main main-introduce" v-if="menuId===1">
      <ViewImage :imgList="introduceImage"></ViewImage>
    </div>
    <div class="main main-novice" v-if="menuId===2">
      <ViewImage :imgList="noviceImage"></ViewImage>
    </div>
  </div>
</template>

<script>
import ViewImage from '../../common/components/viewImage'
export default {
  onHide(){
  },
  onShow() {
  },
  components: {
    ViewImage
  },
  data () {
    return {
      menuId:0,
      introduceImage:['https://photo.16pic.com/00/04/73/16pic_473516_b.jpg','https://photo.16pic.com/00/04/73/16pic_473516_b.jpg','https://photo.16pic.com/00/04/73/16pic_473516_b.jpg'],
      noviceImage:['https://photo.16pic.com/00/04/73/16pic_473516_b.jpg'],
    }
  },
  methods: {
    pageTo(id,search=''){
      wx.navigateTo({
        url:`/pages/${id}/main${search}`
      });
    }
  },
}
</script>

<style scoped>
  .container{
    margin-top: 80rpx;
    .menu{
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      width: 100%;
      justify-content: space-around;
      background: var(--color-foreground);
      padding: 0 30rpx;
      box-sizing: border-box;
      z-index: 100;
      .item{
        position: relative;
        line-height: 65rpx;
        border-bottom: 5rpx solid transparent;
        text-align: center;
        font-weight: bold;
        font-size: 34rpx;
        &.selected{
          color: var(--color-text-selected);
          border-color: var(--color-text-selected);
        }
      }
    }
    .main{
      display: flex;
      flex-direction: column;
      .paster-activity{
        position: relative;
        height: 360rpx;
        background: var(--color-text-sub) no-repeat center;
        background-size: cover;
        &:before{
          content: attr(data-desc);
          position: absolute;
          bottom: 0;
          left: 0;
          white-space: nowrap;
          padding: 0 35rpx 0 25rpx;
          font-size: 24rpx;
          line-height: 48rpx;
          background: var(--color-text-selected);
          color: var(--color-foreground);
          border-radius: 0 20rpx 20rpx 0;
        }
      }
    }
  }
</style>
