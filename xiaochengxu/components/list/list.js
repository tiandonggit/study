// components/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // list: [
    //   {name: "微信"},
    //   {name: "小程序"},
    //   {name: "公众号"}
    // ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    select(event) {
      var myEventDetail = {
        // 传参
        name: event.currentTarget.dataset.name
      }
      // 触发事件的选项
      var myEventOption = {}
      // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
      this.triggerEvent('select', myEventDetail, myEventOption)
    }
  }
})