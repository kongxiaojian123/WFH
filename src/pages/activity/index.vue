<template>
  <div class="container">
    <ViewImage :imgList="imgList" @clickImage="clickImage"></ViewImage>
  </div>
</template>

<script>
import ViewImage from '../../common/components/viewImage'
export default {
  onHide(){
  },
  onShow() {
  },
  components: {
    ViewImage
  },
  data () {
    return {
      imgList:[
        'https://photo.16pic.com/00/04/73/16pic_473516_b.jpg'
      ],
    }
  },
  methods: {
    clickImage(index){
      console.log(index);
    }
  },
}
</script>

<style>
</style>
