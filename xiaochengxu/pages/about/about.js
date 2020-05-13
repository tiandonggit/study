//引入模块
const common = require("../../utils/common.js");
const util = require("../../utils/util.js");

Page({
  data: {
    aboutList: [
      { name: "html" },
      { name: "css" },
      { name: "javascript" }
    ],
    num: 1,
    motto: '第 0 次点击'
  },
  click: function () {
    this.setData({
      num: this.data.num + 1,
      motto: "第 " + this.data.num + " 次点击",
    })
  },
  getTime: function(){
    common.sayHello("东东");
    this.setData({
      motto: util.formatTime(new Date())
    })

  },
  onShareAppMessage: function() {
    
  },
  onLoad: function () {
    
  }
})
