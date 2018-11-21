<template>
  <swiper v-if="slide&&slide.length" class="slide slide-banner" :indicator-dots="true" :autoplay="true" indicator-color="#ffffff" indicator-active-color="#ff4b57">
      <swiper-item class="slider-item" v-for="(item,index) of slide" :key="index" :style="{'background-image':'url('+item.pic_url+')'}" @click="jumpPage(item.jump_url)"></swiper-item>
  </swiper>
</template>

<script>
  export default {
    name: 'slideBanner',
    components: {
    },
    props: {
    },
    data () {
      return {
        slide:[
          {
            "pic_url": "//photo.16pic.com/00/04/73/16pic_473516_b.jpg",
            "jump_url": "/pages/index/main",
          },
          {
            "pic_url": "//photo.16pic.com/00/04/73/16pic_473516_b.jpg",
            "jump_url": "/pages/index/main",
          }
        ]
      }
    },
    methods: {
      jumpPage(url){
        wx.navigateTo({
          url:url
        });
      }
    }
  }
</script>

<style scoped>
.slide-banner{
  width: 100%;
  height: 360rpx;
  margin-bottom: 10rpx;
  .slider-item{
    background: var(--color-card-border) no-repeat center;
    background-size: cover;
  }
}
</style>
