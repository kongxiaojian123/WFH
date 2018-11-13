const app = getApp();
Page({
  data: {
    menuIndex:0,
  },
  selectMenu(event){
    this.setData({ menuIndex: event.detail.index });
  }
})
