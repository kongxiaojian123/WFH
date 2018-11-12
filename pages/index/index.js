const app = getApp();
Page({
  data: {
    menu: ['推荐','商品'],
    menuIndex:0,
  },
  selectMenu(event){
    this.setData({ menuIndex: event.detail.index });
  }
})
