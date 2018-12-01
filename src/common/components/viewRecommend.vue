<template>
  <div class="view view-recommend">
    <slide-banner/>
    <tips-broadcast/>
    <list-recommend/>
  </div>
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
    props: {
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
.view-recommend{
}
</style>
