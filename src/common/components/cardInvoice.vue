<template>
  <div class="card card-invoice" :class="{'close-ani':hide}">
    <div class="card-main" data-title="发票">
      <span class="close-btn" @click="clickClose"></span>
      <div class="paster paster-type">
        <div class="head">
          <p class="title">发票类型</p>
          <div class="select">
            <p class="option" :class="{checked:invoiceType===0}" @click="invoiceType=0">电子发票</p>
            <p class="option" :class="{checked:invoiceType===1}" @click="invoiceType=1">纸质发票</p>
          </div>
        </div>
        <div class="paster-item e-invoice" v-if="invoiceType===0">
          <p class="item desc">电子发票与纸质发票具有同等法律效力，可支持报销入账</p>
          <input type="text" class="item email" placeholder="请填写邮箱地址" v-model.trim="postData.email"/>
        </div>
        <div class="paster-item paper-invoice" v-else-if="invoiceType===1">
          <p class="item desc">需支付<span class="color-dark">5.00元邮寄费</span>,地址默认与收货地址一致,如需要修改请手动填写</p>
          <input type="text" class="item post-address" placeholder="请填写邮箱地址" v-model.trim="postData.address"/>
          <div class="item item-row">
            <input type="text" maxlength="10" class="post-name" placeholder="收件人姓名" v-model.trim="postData.user_name"/>
            <input type="number" maxlength="11" class="post-phone" placeholder="联系电话" v-model.trim="postData.mobile"/>
          </div>
        </div>
      </div>
      <div class="paster paster-invoice">
        <div class="head">
          <p class="title">发票抬头</p>
          <div class="select">
            <p class="option wchat" @click="getInvoice">微信导入</p>
            <p class="option" :class="{checked:invoiceData.type===0}" @click="invoiceData.type=0">单位</p>
            <p class="option" :class="{checked:invoiceData.type===1}" @click="invoiceData.type=1">个人</p>
          </div>
        </div>
        <div class="paster-item invoice-data">
          <input type="text" class="item invoice-title" :placeholder="invoiceData.type?'请填写姓名':'请填写单位名称'" v-model.trim="invoiceData.title"/>
          <input type="text" class="item invoice-id" placeholder="请在此填写纳税人识别号" v-if="invoiceData.type===0" v-model.trim="invoiceData.taxNumber"/>
        </div>
      </div>
      <div class="paster paster-content">
        <div class="head">
          <p class="title">发票内容</p>
          <div class="select">
            <p class="option checked">商品明细</p>
          </div>
        </div>
        <div class="paster-item invoice-data">
          <p class="item desc">发票内容将显示详细商品名称与价格</p>
        </div>
      </div>
      <p class="item item-remark">{{invoiceType?'发票将于确认收货后开具并邮寄':'发票将于确认收货后开具并发送到指定邮箱'}}</p>
      <div class="btn btn-submit" @click="submit">确&nbsp;&nbsp;认</div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    onUnload(){
      this.hide = false;
    },
    onLoad () {
    },
    components: {
    },
    props: ['postAddress'],
    data () {
      const postData=Object.assign({
        email:'',
        user_name:'',
        mobile:'',
        address:'',
      },this.postAddress);
      return {
        hide:false,
        invoiceType:0,
        postData:postData,
        invoiceData:{
          type:0,
          title:'',
          taxNumber:'',
        },
      }
    },
    watch:{
    },
    methods: {
      checkContent(){
        //校验文字是否空缺
        return new Promise((resolve,reject) => {
          if(this.invoiceType){
            if(!(
              this.postData.user_name&&
              this.postData.mobile&&
              this.postData.address
            )) reject('发票类型');
          }else if(!this.postData.email){
            reject('发票类型');
          }
          if(!this.invoiceData.title) reject('发票抬头');
          if(this.invoiceData.type&&!this.postData.taxNumber){
            reject('发票抬头');
          }
          resolve();
        });
      },
      submit(){
        //提交发票数据
        this.checkContent().then(()=>{
          let invoiceData = '';
          invoiceData+=this.invoiceType?'纸质发票-':'电子发票-';
          invoiceData+=this.invoiceData.type?'个人--':'企业--';
          invoiceData+=this.invoiceData.title;
          this.$emit('getInvoiceData',invoiceData);
          this.clickClose();
        }).catch((msg)=>{
          wx.showToast({
            title: `${msg}未填完整`,
            icon: 'none',
          });
        });
      },
      getInvoice(){
        const _getWechatInvoice=()=>{
          if(this.authSetting['scope.invoiceTitle']){
            wx.chooseInvoiceTitle({
              success:(res)=>{
                this.invoiceData = res;
              }
            });
          }
        };
        if(this.authSetting['scope.invoiceTitle']===undefined){
          wx.authorize({
            scope: 'scope.invoiceTitle',
            success:()=>{
              this.authSetting['scope.invoiceTitle'] = true;
              _getWechatInvoice();
            }
          })
        }else{
          _getWechatInvoice();
          if(!this.authSetting['scope.invoiceTitle']){
            wx.openSetting({
              success:(res)=>{
                Vue.prototype.authSetting = res.authSetting;
                _getWechatInvoice();
              }
            });
          }
        }
      },
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
  .paster{
    display: flex;
    flex-direction: column;
    font-size: 24rpx;
    background: none;
    margin-bottom: 25rpx;
    .head{
      height: 50rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .select{
        display: flex;
        .option{
          height: 40rpx;
          line-height: 40rpx;
          padding: 0 25rpx;
          margin-left: 15rpx;
          box-sizing: border-box;
          border-radius: 20rpx;
          background: var(--color-tips-background-red);
          border: 1rpx solid transparent;
          &.checked{
            color: var(--color-text-selected);
            border-color: var(--color-text-selected);
          }
          &.wchat{
            color: var(--color-foreground);
            background: var(--color-text-selected);
          }
        }
      }
    }
    .paster-item{
      display: flex;
      flex-direction: column;
      > .item{
        margin-top: 10rpx;
        &.item-row{
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
      input{
        font-size: 26rpx;
        color: var(--color-text-sub);
        padding: 0 20rpx;
        height: 70rpx;
        border-radius: 10rpx;
        border: 1rpx solid var(--color-text-sub);
        box-sizing: border-box;
        &.post-name{
          flex: none;
          width: 290rpx;
          margin-right: 10rpx;
        }
        &.post-phone{
          flex: auto;
        }
      }
      .desc{
        padding: 20rpx 0 5rpx;
        font-size: 20rpx;
        color: var(--color-text-sub);
        .color-dark{
          color: var(--color-text);
        }
      }
    }
    &.paster-content{
      border-bottom: 1rpx solid var(--color-text-sub);
      margin-bottom: 100rpx;
      .paster-item{
        .desc{
          padding: 0 0 10rpx;
        }
      }
    }
  }
  .item-remark{
    padding-bottom: 20rpx;
    font-size: 20rpx;
    text-align: center;
    color: var(--color-text-selected);
  }
  .btn-submit{
    font-size: 34rpx;
    text-align: center;
    line-height: 70rpx;
    border-radius: 10rpx;
    background: var(--color-text-selected);
    color: var(--color-foreground);
  }
}
</style>
