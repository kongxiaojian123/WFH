<template>
  <div class="container">
    <bar-menu :menuIndex="menuIndex" @selectMenu="selectMenu"/>
    <view-recommend v-if="menuIndex===0"/>
    <view-goods v-else-if="menuIndex===1"/>
  </div>
</template>

<script>
import BarMenu from '../../common/components/barMenu.vue'
import ViewGoods from '../../common/components/viewGoods.vue'
import ViewRecommend from '../../common/components/viewRecommend'
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
