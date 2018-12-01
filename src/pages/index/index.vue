<template>
  <div class="container" @click="">
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
  onUnload(){
  },
  onLoad () {
  },
  components: {
    BarMenu, ViewGoods,ViewRecommend
  },
  data () {
    return {
      menuIndex: 0
    }
  },
  methods: {
    selectMenu (index) {
      this.menuIndex = index
    }
  },
}
</script>

<style scoped>
</style>
