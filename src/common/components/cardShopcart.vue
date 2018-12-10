<template>
  <div class="card-shopcart">
    <card>
      <span class="item-image" :style="{'background-image':'url('+info.product_img+')'}"></span>
    </card>
  </div>
</template>

<script>
  import Card from './card';
  export default {
    onUnload(){
    },
    onLoad () {
    },
    components: {
      Card,
    },
    props: [
      'info'
    ],
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>
