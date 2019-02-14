<template>
  <div class="container">
    <div class="address-form">
      <p class="title">地址信息</p>
      <input type="text" name="name" class="name" v-model="user_name" placeholder-class="input-placeholder" placeholder="收货人姓名"/>
      <input type="number" name="tel" class="tel" v-model="mobile" maxlength="11" placeholder-class="input-placeholder" placeholder="手机号码"/>
      <picker mode="region" @change="regionChange" :value="region">
        <input type="text" name="area" class="area" :value="c_region" disabled="true" placeholder-class="input-placeholder" placeholder="所在地区"/>
      </picker>
      <input type="text" name="detail" class="detail" v-model="detail" placeholder-class="input-placeholder" placeholder="详细地址"/>
      <div class="address-ctr">
        <p class="btn default-btn" @click="isDefault = !isDefault"><span class="icon icon-unchecked" :class="{'checked':isDefault}"></span>默认地址</p>
        <p class="btn delete-btn" @click="deleteClick"><span class="icon icon-delete"></span>清空当前信息</p>
      </div>
    </div>
    <div class="address-parse">
      <p class="title">智能填写地址</p>
      <textarea name="parse-text" class="parse-text" @confirm="parseStart" @blur="parseStart" v-model="textareaText" placeholder-class="input-placeholder" placeholder="请在这里直接粘贴地址信息,可自动识别拆分"></textarea>
    </div>
    <p class="btn btn-submit">保存</p>
  </div>
</template>

<script>
import areaList from '../../common/js/area-list.js'
import addressParse,{parseArea} from '../../common/js/address-parse.js'
parseArea(areaList);
export default {
  onHide(){
  },
  onShow() {
  },
  components: {
  },
  computed:{
    c_region(){
      return this.region.join(' ');
    }
  },
  data () {
    return {
      region:[],
      user_name:'',
      mobile:'',
      detail:'',
      isDefault:false,
      textareaText:'',
    }
  },
  methods: {
    deleteClick(){
        this.region=[];
        this.user_name='';
        this.mobile='';
        this.detail='';
        this.textareaText='';
        this.isDefault=false;
    },
    regionChange(ev){
      this.region = ev.target.value;
    },
    parseStart(){
      const parseAddress = addressParse(this.textareaText);
      this.user_name = parseAddress.name;
      this.mobile = parseAddress.phone||parseAddress.mobile;
      this.detail = parseAddress.addr;
      if(parseAddress.province+parseAddress.city+parseAddress.area){
        this.region = [parseAddress.province,parseAddress.city,parseAddress.area];
      }else{
        this.region = [];
      }
    }
  }
}
</script>

<style>
page{
  background: var(--color-foreground);
}
.container{
  input,textarea{
    font-size: 24rpx;
    color: var(--color-text-sub);
  }
  .input-placeholder{
    color: var(--color-text-sub);
  }
  .address-form{
    border-top: 5rpx solid var(--color-background);
    padding: 30rpx 10rpx 0;
    display: flex;
    flex-direction: column;
    .title{
      padding: 0 15rpx 25rpx;
      font-weight: bold;
      font-size: 28rpx;
    }
    .name,.tel,.area,.detail{
      position: relative;
      padding: 20rpx 15rpx;
      border-bottom: 1rpx solid var(--color-tab-text);
      &.area:after{
        content: '>';
        position: absolute;
        right: 20rpx;
        top: 50%;
        transform:translateY(-50%) scaleY(1.5);
      }
    }
    .address-ctr{
      padding: 0 20rpx;
      height: 84rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .btn{
        display: flex;
        .icon{
          margin-right: 10rpx;
          &.icon-delete{
            flex: none;
            width: 28rpx;
            height: 35rpx;
            background: no-repeat center;
            background-size: contain;
          }
        }
      }
    }
  }
  .address-parse{
    display: flex;
    flex-direction: column;
    padding: 25rpx;
    border-top: 10rpx solid var(--color-background);
    .title{
      padding-bottom: 30rpx;
      font-weight: bold;
      font-size: 28rpx;
    }
    .parse-text{
      width: 100%;
      height: 205rpx;
      padding: 20rpx;
      line-height: 1.5;
      border: 1rpx solid var(--color-tab-text);
      box-sizing: border-box;

    }
  }
  .btn-submit{
    position: fixed;
    bottom: 55rpx;
    left: 25rpx;
    right: 25rpx;
    text-align: center;
    line-height: 70rpx;
    border-radius: 15rpx;
    background: var(--color-text-selected);
    color: var(--color-foreground);
  }
}
</style>
