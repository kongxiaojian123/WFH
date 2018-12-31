<template>
  <div class="container">
    <my-address :addsData="addsData"/>
  </div>
</template>

<script>
  import MyAddress from '../../common/components/address.vue';
export default {
  onHide(){
  },
  onShow() {
  },
  components: {
    MyAddress
  },
  data () {
    return {
      addsData:[]
    }
  },
  methods: {
  },
}
</script>

<style scoped>
</style>
