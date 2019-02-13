<template>
  <div class="container">
    <div class="head">
      <p class="add-btn"><span class="icon icon-location"></span>添加新地址</p>
      <p class="wechat-btn" @click="pageTo('wechat')"><span class="icon icon-wechat"></span>微信导入</p>
    </div>
    <div class="address-list">
      <ItemAddress v-for="(item,index) of addressList" :key="index" :address="item" :index="index" @setDefault="setDefault" @setDelete="setDelete"></ItemAddress>
    </div>
  </div>
</template>

<script>
  import ItemAddress from '../../common/components/itemAddress';
export default {
  onHide(){
  },
  onShow() {
  },
  components: {
    ItemAddress
  },
  computed:{
  },
  data () {
    return {
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
                  this.authSetting = res.authSetting;
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
      this.addressList.splice(index,1);
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
  padding-top: 75rpx;
  .head{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 75rpx;
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
      height: 24rpx;
      width: 35rpx;
      background: no-repeat center;
      background-size: contain;
      margin-right: 10rpx;
      opacity: 0.5;
      &.icon-location{
        width: 20rpx;
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
