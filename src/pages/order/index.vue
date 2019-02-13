<template>
  <div class="container">
    <ItemOrderAddress :addsData="addsData"/>
    <div class="good-list">
      <div class="item-good" v-for="(item,index) of shopping_check" :key="index">
        <span class="item-image" :style="{'background-image':'url('+item.product_img+')'}"></span>
        <item-info :type="4" :info="item"/>
        <span class="item-num">x{{item.num}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import ItemOrderAddress from '../../common/components/itemOrderAddress.vue';
  import ItemInfo from '../../common/components/itemInfo.vue';
export default {
  onHide(){
  },
  onShow() {
  },
  components: {
    ItemOrderAddress,
    ItemInfo
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
      }
    }
  },
  methods: {
  },
}
</script>

<style scoped>
  .good-list{
    margin: 12rpx 0 10rpx;
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

</style>
