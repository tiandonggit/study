//引入模块
const common = require("../../utils/common.js");
const util = require("../../utils/util.js");
import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';

Page({
  data: {
    aboutList: [{
        name: "html"
      },
      {
        name: "css"
      },
      {
        name: "javascript"
      }
    ],
    num: 1,
    motto: '0次点击',
    time: ""
  },
  // 事件传值
  select(event){
    Toast(event.detail.name);
  },
  click() {
    this.setData({
      num: this.data.num + 1,
      motto: this.data.num + "次点击",
    })
  },
  getTime() {
    common.sayHello("东东");
    this.setData({
      time: util.formatTime(new Date())
    })
  },
  // 自定义分享
  onShareAppMessage(options) {
    var that = this;
    // 设置菜单中的转发按钮触发转发事件时的转发内容
    var shareObj = {
      title: "我是东东奥", // 默认是小程序的名称(可以写slogan等)
      path: '', // 默认是当前页面，必须是以‘/’开头的完整路径
      imageUrl: '../../assets/images/logo.jpg', //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入imageUrl 则使用默认截图。显示图片长宽比是 5:4
      success: (res) => {
        // 转发成功之后的回调
        if (res.errMsg == 'shareAppMessage:ok') {}
      },
      fail: () => {
        // 转发失败之后的回调
        if (res.errMsg == 'shareAppMessage:fail cancel') {
          // 用户取消转发
        } else if (res.errMsg == 'shareAppMessage:fail') {
          // 转发失败，其中 detail message 为详细失败信息
        }
      },
      complete: () => {
        // 转发结束之后的回调（转发成不成功都会执行）
      }
    };
    // 来自页面内的按钮的转发
    if (options.from == 'button') {
      var eData = options.target.dataset;
      console.log(eData.id); // shareBtn
      // 此处可以修改 shareObj 中的内容
      shareObj.path = "";
    }
    // 返回shareObj
    return shareObj;
  },
  onLoad() {

  }
})