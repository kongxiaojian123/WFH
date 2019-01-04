<template>
  <div class="bar filter-bar">
      <p v-for="(item,index) of filterType" :key="index"
            :class="{
              'selected':index+1===filterIndex,
              'icon-filter':item==='筛选',
              'icon-order':item==='价格',
              'price-show':index+1===priceShow}"
            @click="selectFilter(index+1)"
      >{{item}}</p>
  </div>
</template>

<script>
  export default {
    onUnload(){
    },
    onLoad () {
    },
    props: {
      filterType: {
        type: Array,
        default: ['销量', '价格', '价格', '新品'
          // , '筛选'
        ]
      },
      filterIndex: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        priceShow: 2
      }
    },
    computed: {
    },
    methods: {
      // 这里是一个自定义方法
      selectFilter: function (index) {
        const filterType = this.filterType;
        const filterIndex = this.filterIndex;
        if (filterType[index - 1] === '价格') {
          if (filterType[filterIndex - 1] === '价格') {
            switch (index) {
              case 2:
                index = 3;
                break;
              case 3:
                index = 2;
                break;
            }
          }
          this.priceShow = index;
        } else {
          this.priceShow = 2;
        }
        this.$emit('selectFilter', index);
      }
    }
  }
</script>

<style scoped>
  .filter-bar{
    flex: none;
    width: 100%;
    height: 88rpx;
    line-height: 88rpx;
    text-align: center;
    display: flex;
    margin-bottom: 8rpx;
    background: var(--color-foreground);
    border-top: 5rpx solid var(--color-background);
    font-size: 28rpx;
    font-weight: bold;
    box-shadow: 0 3rpx 7rpx var(--color-view-shadow);
    view{
      flex: auto;
      position: relative;
      &.selected{
        color:var(--color-text-selected);
      }
      &.icon-order:after,&.icon-filter:after{
        content: '';
        display: inline-block;
        margin-left: 7rpx;
        width: 16rpx;
        height: 20rpx;
        background: var(--icon-order) no-repeat left center;
        background-size: cover;
      }
      &.icon-order{
        display: none;
      }
      &.icon-order.price-show{
        display: block;
      }
      &.icon-filter:after{
        background-image: var(--icon-filter);
      }
      &.icon-order.selected:after{
        background-position: center;
      }
      &.icon-order:nth-of-type(3):after{
        background-position: right center;
      }
    }
  }
</style>
