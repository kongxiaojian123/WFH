<template>
    <div class="adds no-adds" v-if="!addsData.length">
      <i class="icon icon-add"></i>
      <span @click="addAdds">添加收货地址</span>
    </div>
    <div class="adds has-adds" v-else>
      <div class="selected-adds">
        <span class="selected-name"></span>
        <span class="selected-tel"></span>
        <span class="flag"></span>
      </div>
      <div class="detail-add">
        <i class="icon icon-add"></i>
        <span>详细地址：</span>
        <i class="more-adds" @click="showAddsList">></i>
      </div>
    </div>
</template>

<script>
  export default {
    onUnload(){
    },
    onLoad () {
    },
    components: {
    },
    props: ['addsData'],
    data(){
      return{

      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .adds{
    display: flex;
    background: #ffffff;
    color: var(--color-text);
  }
  .no-adds{
    span {
      font-size:26rpx;
    }
  }
</style>
