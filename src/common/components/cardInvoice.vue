<template>
  <div class="card card-phone" :class="{'close-ani':hide}">
    <div class="card-main">
      <span class="close-btn" @click="clickClose"></span>

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
    props: ['bindPhone'],
    data () {
      return {
        hide:false,
      }
    },
    watch:{
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
.card{

}
</style>
