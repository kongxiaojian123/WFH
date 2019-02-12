<template>
  <div class="view-image">
    <img v-for="(item,index) of c_imgList" :key="index" :src="item.img" :style="{height:(item.width&&item.height?750/item.width*item.height:0)+'rpx'}" @load="loadImage(index,$event)" @click="$emit('clickImage',index)">
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
    watch:{
      imgList(){
        const c_imgList = [];
        this.imgList.forEach(item=>{
          c_imgList.push({img:item,width:0,height:0});
        });
        this.c_imgList = c_imgList;
      }
    },
    props: ['imgList'],
    data () {
      const c_imgList = [];
      this.imgList.forEach(item=>{
        c_imgList.push({img:item,width:0,height:0});
      });
      return {
        c_imgList:c_imgList,
      }
    },
    methods: {
      loadImage(index,ev){
        this.c_imgList[index].width = ev.target.width;
        this.c_imgList[index].height = ev.target.height;
      }
    },
  }
</script>

<style>
  .view-image{
    width: 100%;
    display: flex;
    flex-direction: column;
    img{
      width: 100%;
      height: auto;
    }
  }
</style>
