<template>
  <div class="card card-phone" :class="{'close-ani':hide}">
    <div class="card-main">
      <span class="close-btn" @click="clickClose"></span>
      <input type="number" v-model.trim="phone" maxlength="11" class="item item-phone" placeholder="请输入手机号"/>
      <div class="item item-validate">
        <input type="text" v-model.trim="validateText" maxlength="6" confirm-type="done" placeholder="点击获取验证码" @confirm="submitValidate"/>
        <span class="btn" v-if="validate>=0" :class="{disable:validate}" @click="getValidate">{{validate?(validate+'s重发'):'获取验证码'}}</span>
        <span class="icon icon-authentication" v-else></span>
      </div>
      <p class="hint-text" v-if="bindPhone">一个月内只能更改一次</p>
      <p class="btn btn-submit" :class="{disable:validate>=0}" @click="submit">确认{{bindPhone?'更换':'绑定'}}手机号</p>
    </div>
  </div>
</template>

<script>
  export default {
    onUnload(){
      this.hide = false;
    },
    onLoad () {
    },
    components: {
    },
    props: ['bindPhone'],
    data () {
      return {
        hide:false,
        validate:0, //-1为验证通过
        validateFlag:false,//请求验证码flag
        validateText:'',//填写得验证码
        phone:this.bindPhone,
      }
    },
    watch:{
      validate(val){
        if(val>0){
          if(this.validate===60){
            this.validateFlag = true;
          }
          setTimeout(()=>{
            this.validate--;
          },1000);
        }else if(val===-1){
          this.validateFlag = false;
        }
      }
    },
    methods: {
      submitValidate(){
        //验证码验证
        if(this.validateText){
          if(this.validateFlag){
            this.validate=-1;
          }
        }
      },
      submit(){
        if(this.phone===this.bindPhone){
          wx.showToast({
            title: '您已经绑定了该手机，请勿重新操作',
            icon: 'none',
          });
          return;
        }
        //绑定成功start
        this.validate=0;
        wx.showToast({
          title: '绑定成功',
          icon: 'success',
        });
        this.clickClose();
        this.$emit('setPhone',this.phone);
        //绑定成功end
      },
      getValidate(){
        if(!this.validate){
          //获取验证码
          this.validate=60;
          this.validateText='';
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
  .item{
    height: 90rpx;
    border-bottom: 1rpx solid var(--color-tab-text);
    &.item-phone{
      position: relative;
      box-sizing: border-box;
      padding-left: 80rpx;
      &:before{
        position: absolute;
        left: 0;
        top: 50%;
        content: "+86";
        transform: translateY(-50%);
      }
    }
    &.item-validate{
      display: flex;
      justify-content: space-between;
      align-items: center;
      input{
        height: 90rpx;
        width: 500rpx;
      }
      .btn{
        width: 170rpx;
        height: 60rpx;
        line-height: 60rpx;
        text-align: center;
        border-radius: 10rpx;
        border: 1rpx solid var(--color-text-selected);
        color: var(--color-text-selected);
        box-sizing: border-box;
        &.disable{
          border-color: var(--color-text-sub);
          color: var(--color-text-sub);
          pointer-events: none;
        }
      }
    }
    .icon-authentication{
      width: 35rpx;
      height: 35rpx;
      background: no-repeat center;
      background-size: contain;
    }
  }
  .hint-text{
    font-size: 24rpx;
    margin-top: 20rpx;
    text-align: center;
  }
  .btn-submit{
    line-height: 70rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    text-align: center;
    color: var(--color-foreground);
    background: var(--color-text-selected);
    &.disable{
      background: var(--color-tab-text);
      pointer-events: none;
    }
  }
}
</style>
