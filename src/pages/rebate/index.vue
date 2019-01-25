<template>
  <div class="container">
    <PasterRebatePandect></PasterRebatePandect>
  </div>
</template>

<script>
import PasterRebatePandect from '../../common/components/PasterRebatePandect';
export default {
  onHide(){
  },
  onShow() {
  },
  components: {
    PasterRebatePandect
  },
  data () {
    return {
    }
  },
  methods: {
    pageTo(id){
      wx.navigateTo({
        url:`/pages/${id}/main`
      });
    }
  },
}
</script>

<style>
  .container{
  }
</style>
