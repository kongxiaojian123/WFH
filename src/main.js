import Vue from 'vue'
import App from './App'
initConfig();
const app = new Vue(App);
app.$mount();
function initConfig() {
  Vue.prototype.systemInfo = wx.getSystemInfoSync();
  getUserInfo();
  Vue.config.productionTip = false;
  App.mpType = 'app';
}
function getSetting(next) {
  wx.getSetting({
    success(res) {
      Vue.prototype.authSetting = res.authSetting;
      next&&next(res.authSetting);
    }
  });
}
function getUserInfo() {
  getSetting(function (authSetting) {
    if(authSetting['scope.userInfo']){
      _getUserInfo();
    }else{
      wx.authorize({
        scope: 'scope.userInfo',
        success() {
          Vue.prototype.authSetting['scope.userInfo'] = true;
          _getUserInfo();
        }
      })
    }
  });
  function _getUserInfo() {
    wx.getUserInfo({
      success(res) {
        Vue.prototype.userInfo = res.userInfo;
        console.log(res);
      }
    })
  }
}
