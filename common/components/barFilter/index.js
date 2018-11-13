Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    filterType: {
      type: Array,
      value: ['销量', '价格', '新品', '筛选'],
    },
    filterIndex: {
      type: Number,
      value: 0,
    }
  },
  data: {
    // 这里是一些组件内部数据
  },
  methods: {
    // 这里是一个自定义方法
    selectFilter: function (event) {
      const dataset = event.currentTarget.dataset;
      const filterType = this.data.filterType;
      const filterIndex = this.data.filterIndex;
      if (filterType[dataset.index] === '价格' && filterType[Math.floor(filterIndex)] ==='价格'){
        if (filterIndex === Math.floor(filterIndex)){
          dataset.index +=0.5;
        } else {
          dataset.index = Math.floor(dataset.index);
        }
      }
      this.triggerEvent('selectFilter', dataset);
    }
  }
})