<template>
  <div class="view view-goods">
    <bar-filter :filterIndex="filterIndex" @selectFilter="selectFilter"/>
    <scroll-view :scroll-y="true" @scrolltolower="updateData" :style="{height:c_scrollHeight}">
      <tips-broadcast ref="broadcast"/>
      <list-goods ref="goods" :filterIndex="filterIndex"/>
    </scroll-view>
  </div>
</template>

<script>
  import BarFilter from './barFilter.vue'
  import TipsBroadcast from './tipsBroadcast.vue'
  import ListGoods from './listGoods'
  export default {
    onUnload(){
    },
    onLoad () {
    },
    components: {
      BarFilter, TipsBroadcast,ListGoods
    },
    props: [],
    data () {
      return {
        //  排序类型 1-销量 2-高价格 3-低价格 4-新品
        filterIndex: 1,
      }
    },
    watch:{
    },
    computed:{
      c_scrollHeight(){
        return `${this.systemInfo.windowHeight- (75+96)*this.systemInfo.windowWidth/750}px`;
      }
    },
    mounted(){
      this.initData();
    },
    methods: {
      initData(){
        this.$refs.broadcast.initData();
        this.$refs.goods.initData();
      },
      updateData(){
        this.$refs.goods.updateData();
      },
      selectFilter: function (index) {
        this.filterIndex = index
      }
    }
  }
</script>

<style scoped>
.view-goods{
  flex: auto;
  display: flex;
  flex-direction: column;
  scroll-view{
    flex:auto;
    overflow: hidden;
  }
}
</style>
