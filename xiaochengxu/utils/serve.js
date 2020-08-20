import HttpUtils from "fly";
import {serviceHost, globalServiceHost} from "httpConfig";

const urls = {
  "GETMAILLIST": serviceHost + "ImUserController/selectUserList", // 获取通讯录接口
};

let serve = {
  getMailList: function (params) {
    return HttpUtils.get(urls.GETMAILLIST, params);
  },
  selectProject: function (params) {
    return HttpUtils.post(urls.GETMAILLIST, params);
  }
};

export {serve};
