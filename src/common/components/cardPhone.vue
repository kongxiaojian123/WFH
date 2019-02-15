<template>
  <div class="card" :class="{'close-ani':hide}">
    <div class="card-main">
      <span class="close-btn" @click="clickClose"></span>
      <!--<slot>-->
        <!--slot mpvue 有bug,所以不用此组件，此组建用作templete用，别无他用-->

      <!--</slot>-->
    </div>
  </div>
</template>

<script>
  export default {
    onUnload(){
      this.hide = false;
    },
    onLoad () {
    },
    components: {
    },
    props: ['type'],
    data () {
      return {
        hide:false,
      }
    },
    methods: {
      clickClose(){
        this.hide = true;
        setTimeout(()=>{
          this.$emit('close');
        },500);
      }
    }
  }
</script>

<style scoped>
@import "../wxss/card.css";
</style>
