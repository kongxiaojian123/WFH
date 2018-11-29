<template>
  <div v-if="goodData" class="container" @click="">
    <slide-goods/>
    <item-info :type="2" :info="goodData">
      <p class="add-btn">加入购物车</p>
    </item-info>
  </div>
</template>

<script>
import SlideGoods from '../../common/components/SlideGoods.vue';
import ItemInfo from '../../common/components/itemInfo.vue';
export default {
  components: {
    SlideGoods,ItemInfo
  },
  data () {
    return {
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
            "user_name":"昵称",
            "comment_level":"1",    //评论等级
            "comment_msg":"评论内容",
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
  },
  created () {
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
}
</style>
