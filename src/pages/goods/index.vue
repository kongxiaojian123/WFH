<template>
  <div v-if="goodData" class="container" @click="">
    <slide-goods/>
    <item-info :type="2" :info="goodData">
      <p class="add-btn" @click="popupShopcart(true)">加入购物车</p>
    </item-info>
    <paster-spec :info="goodData" @popupShopcart="popupShopcart" @setParams="setParams"></paster-spec>
    <paster-evaluate :info="goodData"/>
    <span class="icon icon-shopcart" @click="popupShopcart(true)"></span>
    <card-shopcart v-if="shopcart" :info="goodData" @close="popupShopcart"></card-shopcart>
    <ViewImage :imgList="c_goodsImage"></ViewImage>
  </div>
</template>

<script>
import SlideGoods from '../../common/components/SlideGoods.vue';
import ItemInfo from '../../common/components/itemInfo.vue';
import pasterSpec from '../../common/components/pasterSpec.vue';
import pasterEvaluate from '../../common/components/pasterEvaluate.vue';
import CardShopcart from '../../common/components/cardShopcart.vue';
import ViewImage from '../../common/components/viewImage'
export default {
  onUnload(){
    this.popupShopcart(false);
    this.setParams(false);
  },
  onLoad () {
  },
  components: {
    SlideGoods,ItemInfo,pasterSpec,pasterEvaluate,CardShopcart,ViewImage
  },
  computed:{
    c_goodsImage(){
      return ['https://photo.16pic.com/00/04/73/16pic_473516_b.jpg']
    }
  },
  data () {
    return {
      shopcart:false,
      goodData:{
        "product_id": "产品id",
        "product_img": [
          {
            "img":"图片/视频 地址",
            "type": 1, //类型  1-图片  2-视频
            "cover":"封面地址", //视频封面  type=2时才用到
          },
        ],
        "rebate":[
          {
            "name": "返利标题名称"
          },
        ],
        "item_specific":[//规格
          {
            "category": "口味", //类别
            "category_id": "类别id",
            "tag_arr":[
              {
                "tag_id":"标签id",
                "tag":"巧克力味",
              },
              {
                "tag_id":"标签id",
                "tag":"香草味",
              },
            ]
          },
        ],
        "inventory": "库存",
        "sale_volume": "销量",
        "title": "商品名称",
        "abstract": "商品简介",
        "price": "商品原价",
        "rebate_price": "返利价",
        "goos_evaluation": "0.98", //好评率  等于98%
        "comment_num":"评价数量",
        "comment_list":[//评价列表
          {
            "user_id":"用户id",
            "user_img":"昵称",
            "user_name":"昵称",
            "comment_level":"1",    //评论等级
            "comment_msg":"宝贝收到了,价格很便宜,和其他品牌比较,性价比高.下完单发货很快,会员试过这款蛋白粉之后都觉得不错.",
            "create_time":"评论时间戳",
            "item_specific":"产品名称规格",
            "url_arr":[
              {
                "img":"图片/视频 地址",
                "type": 1, //类型  1-图片  2-视频
                "cover":"封面地址", //视频封面  type=2时才用到
              },
            ],
          }
        ]
      },
    }
  },
  methods: {
    popupShopcart(val=false){
      // 打开购物车面板
      this.shopcart = val;
    },
    setParams(val=false){
      // 打开参数面板
      console.log(22);
    }
  }
}
</script>

<style scoped>
.container{
  .add-btn{
    position: absolute;
    right: 25rpx;
    bottom: 25rpx;
    padding: 15rpx;
    font-size: 22rpx;
    color: var(--color-foreground);
    background: var(--color-text-selected);
    border-radius: 13rpx;
  }
  .icon-shopcart{
    position: fixed;
    top: 80%;
    right: 25rpx;
    width: 60rpx;
    height: 60rpx;
    margin-top: -30rpx;
    border-radius: 50%;
    background: var(--color-tab-text-selected) var(--icon-shopcart) no-repeat 45% 45%;
    background-size: 33rpx 35rpx;
  }
}
</style>
