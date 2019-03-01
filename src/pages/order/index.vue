<template>
  <div class="container">
    <ItemOrderAddress :addsData="addsData"/>
    <div class="paster good-list">
      <div class="item-good" v-for="(item,index) of shopping_check" :key="index">
        <span class="item-image" :style="{'background-image':'url('+item.product_img+')'}"></span>
        <item-info :type="4" :info="item"/>
        <span class="item-num">x{{item.num}}</span>
      </div>
    </div>
    <div class="paster paster-config">
      <div class="item item-coupon" @click="clickCoupon">
        <p class="title">优惠券</p>
        <div class="right">
          <p class="tag tag-red">下单返红包￥20</p>
          <span class="more">></span>
        </div>
      </div>
      <div class="item item-invoice" @click="clickInvoice">
        <p class="title">发票</p>
        <div class="right">
          <p class="text">{{invoiceData}}</p>
          <switch @change="switchInvoice" @click.stop color="#ff4b57" :checked="invoiceChecked"/>
        </div>
      </div>
      <div class="item item-transport" @click="clickTransport">
        <p class="title">配送方式</p>
        <div class="right">
          <p class="text">顺丰到付</p>
          <span class="more">></span>
        </div>
      </div>
    </div>
    <PasterPreferential></PasterPreferential>
    <div class="bottom-shopcart">
      <p class="total-money">需要支付金额:1385.00 <span class="freight">(含运费: 0.00)</span></p>
      <span class="btn btn-complete" @click="clickBill">确认</span>
    </div>
    <CardInvoice v-if="ShowCardInvoice" :postAddress="addsData" @getInvoiceData="getInvoiceData" @close="ShowCardInvoice=false"></CardInvoice>
  </div>
</template>

<script>
  import ItemOrderAddress from '../../common/components/itemOrderAddress.vue';
  import ItemInfo from '../../common/components/itemInfo.vue';
  import PasterPreferential from '../../common/components/pasterPreferential.vue';
  import CardInvoice from '../../common/components/cardInvoice.vue';
export default {
  onHide(){
  },
  onShow() {
  },
  components: {
    ItemOrderAddress,
    ItemInfo,
    PasterPreferential,
    CardInvoice
  },
  data () {
    return {
      addsData:{
        "user_name":"陈磊",
        "mobile":"1234566",
        "address":"北京市海淀区西北旺东路10号院中关村软件园二期西区7号楼",
        default:true
      },
      "shopping_check":[
        {
          "product_id": "产品id",
          "product_img": "https://photo.16pic.com/00/04/73/16pic_473516_b.jpg",
          "title": "WILD FIELD HEALTH增肌粉乳清蛋白粉7磅巧克力味",
          "option": "口味:巧克力 规格:7磅",
          "price": "122",
          "num": "5",
        },
        {
          "product_id": "产品id",
          "product_img": "https://photo.16pic.com/00/04/73/16pic_473516_b.jpg",
          "title": "商品名称",
          "option": "口味:巧克力 规格:7磅",
          "price": "134",
          "num": "12",
        },
      ],
      "card_list": {
        'enable':[{    //可用优惠券
          "id":"优惠券id",
          "money":"优惠卷金额",
          "description":"描述",
          "start_time":"开始时间",
          "end_time":"截止时间",
        }],
        'disable':[{ //不可用优惠券
        "id":"优惠券id",
        "money":"优惠卷金额",
        "description":"描述",
        "start_time":"开始时间",
        "end_time":"截止时间",
        }]
      },
      invoiceChecked:false,//swicth invoice state
      ShowCardInvoice:false,
      invoiceData:'回回回回回回',
    }
  },
  watch:{
    ShowCardInvoice(val){
      if(!val){
        if(!this.invoiceData){
          this.invoiceChecked = false;
        }
      }
    }
  },
  methods: {
    getInvoiceData(invoiceData){
      this.invoiceData = invoiceData;
    },
    clickCoupon(){},
    clickInvoice(){
      this.ShowCardInvoice = true;
    },
    switchInvoice(e){
      this.invoiceChecked = e.target.value;
      if(e.target.value&&!this.invoiceData){
        this.clickInvoice();
      }
    },
    clickTransport(){},
  },
}
</script>

<style scoped>
  .container{
    padding-bottom: 110rpx;
    .good-list{
      margin-bottom: 10rpx;
      background:var(--color-foreground);
      .item-good{
        position: relative;
        display: flex;
        align-items: center;
        padding: 30rpx;
        box-sizing: border-box;
        &:first-of-type{
          &:before{
            display: none;
          }
        }
        &:before{
          content: '';
          position: absolute;
          top: 0;
          left: 10rpx;
          right: 10rpx;
          height: 1rpx;
          background: var(--color-card-border);
        }
        .item-image{
          flex: none;
          margin-left: 20rpx;
          margin-right: 25rpx;
          width: 150rpx;
          height: 150rpx;
          border-radius: 10rpx;
          background:var(--color-card-border) no-repeat center;
          background-size: cover;
        }
        .item-num{
          align-self:flex-end;
          color:var(--color-text);
          font-weight: 700;
        }
      }
    }
    .paster-config{
      font-size: 24rpx;
      padding: 0 10rpx;
      margin-bottom: 10rpx;
      background: var(--color-foreground);
      switch{
        position: relative;
        top: -2rpx;
        width:50rpx;
        height:26rpx;
        padding: 15rpx 0 15rpx 10rpx;
      }
      >>> .wx-switch-input{
        width:50rpx;
        height:26rpx;
        &:before{
          width: 46rpx;
          height: 22rpx;
        }
        &:after{
          width: 22rpx;
          height: 22rpx;
        }
        &.wx-switch-input-checked:after{
          transform:translateX(25rpx);
        }
      }
      >.item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 72rpx;
        padding: 0 15rpx;
        &:not(:last-of-type){
          border-bottom: 1rpx solid var(--color-tab-text);
        }
        .right{
          display: flex;
          align-items: center;
          .more{
            padding-left: 10rpx;
            color: var(--color-text-sub);
          }
        }
      }
    }
    .bottom-shopcart{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100rpx;
      padding: 0 25rpx;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: var(--color-foreground);
      box-shadow: 0 0 50rpx var(--color-view-shadow);
      z-index: 100;
      .total-money{
        font-size: 24rpx;
        .freight{
          color: var(--color-text-sub);
        }
      }
      .btn-complete{
        line-height: 70rpx;
        height: 70rpx;
        width: 200rpx;
        text-align: center;
        font-size: 30rpx;
        border-radius: 10rpx;
        background: var(--color-text-selected);
        color: var(--color-foreground);
      }
    }
  }
</style>

