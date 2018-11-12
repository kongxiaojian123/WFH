Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    menu: {
      type: Array,
      value: [],
    },
    menuIndex: {
      type: Number,
      value: 0,
    }
  },
  data: {
    // 这里是一些组件内部数据
  },
  methods: {
    // 这里是一个自定义方法
    selectMenu: function (event) {
      this.triggerEvent('selectMenu', event.currentTarget.dataset);
    }
  }
})