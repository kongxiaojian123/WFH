<template>
  <scroll-view class="view view-recommend" :scroll-y="true" @scrolltolower="updateData" :style="{height:c_scrollHeight}">
    <slide-banner ref="banner"/>
    <tips-broadcast ref="broadcast"/>
    <list-recommend ref="recommend"/>
  </scroll-view>
</template>

<script>
  import TipsBroadcast from './tipsBroadcast.vue'
  import SlideBanner from './slideBanner'
  import ListRecommend from './listRecommend'
  export default {
    onUnload(){
    },
    onLoad () {
    },
    components: {
      TipsBroadcast,SlideBanner,ListRecommend
    },
    props: [],
    data () {
      return {
      }
    },
    watch:{
    },
    computed:{
      c_scrollHeight(){
        return `${this.systemInfo.windowHeight- 75*this.systemInfo.windowWidth/750}px`;
      }
    },
    mounted(){
      this.initData();
    },
    methods: {
      initData(){
        this.$refs.banner.initData();
        this.$refs.broadcast.initData();
        this.$refs.recommend.initData();
      },
      updateData(){
        console.log(111);
      }
    }
  }
</script>

<style scoped>
.view-recommend{
  flex: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
