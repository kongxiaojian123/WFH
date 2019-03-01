<template>
  <div class="container">
    <div class="head">
      <p class="add-btn" @click="pageTo('editAddress')"><span class="icon icon-location"></span>添加新地址</p>
      <p class="wechat-btn" @click="pageTo('wechat')"><span class="icon icon-wechat"></span>微信导入</p>
    </div>
    <div class="address-list">
      <ItemAddress v-for="(item,index) of addressList" :useIndex="useIndex" :key="index" :type="type" :address="item" :index="index" @setDefault="setDefault" @setUseIndex="setUseIndex" @setDelete="setDelete"></ItemAddress>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import ItemAddress from '../../common/components/itemAddress';
export default {
  onHide(){
  },
  onShow() {
    const historyPage = getCurrentPages();
    const search = historyPage[historyPage.length-1].options;
    this.type = search.type||0;
  },
  components: {
    ItemAddress
  },
  computed:{
  },
  data () {
    return {
      type:0,
      useIndex:-1,
      addressList:[
        {
          user_name:'收货地址管理',
          mobile:'收货地址管理',
          address:'收货地址管理收货地址管理收货地址管理收货地址管理收货地址管理收货地址管理收货地址管理收货地址管理收货地址管理收货地址管理收货地址管理',
          default:true,
        }
      ],
    }
  },
  methods: {
    pageTo(id){
      switch (id) {
        case 'wechat':{
          if(this.authSetting['scope.address']===undefined){
            wx.authorize({
              scope: 'scope.address',
              success:()=>{
                this.authSetting['scope.address'] = true;
                this.getWechatAddress();
              }
            })
          }else{
            this.getWechatAddress();
            if(!this.authSetting['scope.address']){
              wx.openSetting({
                success:(res)=>{
                  Vue.prototype.authSetting = res.authSetting;
                  this.getWechatAddress();
                }
              });
            }
          }
          break;
        }
        default:{
          wx.navigateTo({
            url:`/pages/${id}/main`
          });
        }
      }
    },
    setDefault(index){
      if(!this.addressList[index].default){
        this.addressList.forEach((item,i)=>{
          if(i!==index){
            item.default=false;
          }else{
            item.default=true;
          }
        });
      }
    },
    setDelete(index){
      this.useIndex = -1;
      this.addressList.splice(index,1);
    },
    setUseIndex(index){
      this.useIndex = index;
      wx.setStorage({
        key:'useAddress',
        data:JSON.stringify(this.addressList[index]),
        success(){
          setTimeout(()=>{
            wx.navigateBack({
              delta: 1
            })
          },100);
        }
      });
    },
    getWechatAddress(){
      if(this.authSetting['scope.address']){
        wx.chooseAddress({
          success:(res)=>{
            this.checkWechatAddress(res);
          }
        });
      }
    },
    checkWechatAddress(address){
      //检查是否重复
      const detailAddress = ([address.provinceName,address.cityName,address.countyName,address.detailInfo]).join(' ');
      if(this.addressList&&this.addressList.length){
        for(let item of this.addressList){
          if(
            item.user_name === address.userName&&
            item.mobile === address.telNumber&&
            item.address === detailAddress
          ){
            wx.showToast({
              title: '地址已存在',
              icon: 'none',
            });
            return;
          }
        }
      }
      //添加address
      this.addressList.push({
        user_name:address.userName,
        mobile:address.telNumber,
        address:detailAddress,
        default:false,
      });
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 80rpx;
  .head{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80rpx;
    border-top: 1rpx solid var(--color-background);
    background: var(--color-foreground);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25rpx;
    box-sizing: border-box;
    font-size: 28rpx;
    font-weight: bold;
    .icon{
      height: 22rpx;
      width: 30rpx;
      background: no-repeat center;
      background-size: contain;
      margin-right: 10rpx;
      opacity: 0.5;
      &.icon-location{
        width: 16rpx;
      }
    }
    p{
      padding: 10rpx 0;
      display: flex;
      align-items: center;
    }
  }
  .address-list{
    margin: 10rpx 10rpx 0;
    display: flex;
    flex-direction: column;
  }
}
</style>
