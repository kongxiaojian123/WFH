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
    if(authSetting['scope.userInfo']===undefined){
      wx.authorize({
        scope: 'scope.userInfo',
        success() {
          Vue.prototype.authSetting['scope.userInfo'] = true;
          _getUserInfo();
        }
      })
    }else{
      _getUserInfo();
      if(!authSetting['scope.userInfo']){
        wx.openSetting({
          success(res) {
            Vue.prototype.authSetting = res.authSetting;
            _getUserInfo();
          }
        });
      }
    }
  });
  function _getUserInfo() {
    if(Vue.prototype.authSetting['scope.userInfo']){
      wx.getUserInfo({
        lang:'zh_CN',
        success(res) {
          Vue.prototype.userInfo = res.userInfo;
        }
      })
    }
  }
}
