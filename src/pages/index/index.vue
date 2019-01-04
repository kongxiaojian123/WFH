<template>
  <div class="container" @click="">
    <bar-menu :menuIndex="menuIndex" @selectMenu="selectMenu"/>
    <view-recommend v-if="menuIndex===0" :systemInfo="systemInfo"/>
    <view-goods v-else-if="menuIndex===1" :systemInfo="systemInfo"/>
  </div>
</template>

<script>
import BarMenu from '../../common/components/barMenu.vue'
import ViewGoods from '../../common/components/viewGoods.vue'
import ViewRecommend from '../../common/components/viewRecommend'
let systemInfo = wx.getSystemInfoSync();
export default {
  onHide(){
  },
  onShow() {
  },
  components: {
    BarMenu, ViewGoods,ViewRecommend
  },
  data () {
    return {
      menuIndex: 0,
      systemInfo:systemInfo,
    }
  },
  methods: {
    selectMenu (index) {
      this.menuIndex = index
    }
  },
}
</script>

<style>
  page{
    height: 100%;
  }
  .container{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    overflow: hidden;
  }
</style>
