<template>
  <div class="container">
    <PasterRebatePandect :showMoney="showMoney" @setShowMoney="setShowMoney"/>
    <div class="menu">
      <p class="item" :class="{selected:menuId===0}" @click="menuId=0">代销返利</p>
      <p class="item" :class="{selected:menuId===1}" @click="menuId=1">推荐返利</p>
    </div>
    <ViewRebateConsignment v-if="menuId===0" :showMoney="showMoney"/>
    <ViewRebateRecommend v-if="menuId===1" :showMoney="showMoney"/>
  </div>
</template>

<script>
import PasterRebatePandect from '../../common/components/PasterRebatePandect';
import ViewRebateConsignment from '../../common/components/viewRebateConsignment';
import ViewRebateRecommend from '../../common/components/viewRebateRecommend';
export default {
  onHide(){
  },
  onShow() {
  },
  components: {
    PasterRebatePandect,ViewRebateConsignment,ViewRebateRecommend
  },
  data () {
    return {
      menuId:0,
      showMoney:true,
    }
  },
  methods: {
    setShowMoney(bool){
      this.showMoney = bool;
    },
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
    .menu{
      display: flex;
      justify-content: space-around;
      background: var(--color-foreground);
      padding: 0 30rpx;
      .item{
        position: relative;
        line-height: 85rpx;
        border-bottom: 5rpx solid transparent;
        text-align: center;
        font-weight: bold;
        font-size: 30rpx;
        &.selected{
          color: var(--color-text-selected);
          border-color: var(--color-text-selected);
        }
      }
    }
  }
</style>
