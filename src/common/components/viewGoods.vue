<template>
  <div class="view view-goods">
    <bar-filter :filterIndex="filterIndex" @selectFilter="selectFilter"/>
    <tips-broadcast/>
  </div>
</template>

<script>
  import BarFilter from './barFilter.vue'
  import TipsBroadcast from './tipsBroadcast.vue'
  export default {
    name: 'viewGoods',
    components: {
      BarFilter, TipsBroadcast
    },
    props: {
    },
    data () {
      return {
        //  排序类型 1-销量 2-高价格 3-低价格 4-新品
        filterIndex: 1
      }
    },
    methods: {
      selectFilter: function (index) {
        this.filterIndex = index
      }
    }
  }
</script>

<style scoped>
.view-goods{
}
</style>
