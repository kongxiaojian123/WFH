import Vue from 'vue';
initConfig();
export default Vue;
function initConfig() {
  Vue.prototype.systemInfo = wx.getSystemInfoSync();
  getUserInfo();
  Vue.config.productionTip = false;
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
      lang:'zh_CN',
      success(res) {
        Vue.prototype.userInfo = res.userInfo;
        console.log(res);
      }
    })
  }
}
