<template>
  <div class="test">
    <h1>输入框测试</h1>
    <div class="im-box">
      <p class="item" v-for="(item, index) in list" :key="index">{{ item }}</p>
    </div>
    <div class="input-box">
      <textarea
        v-model.trim="text"
        v-hotkey="keymap"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <select v-model="select" @change="change" name="" id="">
      <option value="1">enter 发送</option>
      <option value="2">shift+enter 发送</option>
    </select>
    <button @click.stop="send($event)">发送</button>

    <h1>调用原生技巧测试</h1>
    <div class="c1">
      <div>
        <p>普通键盘</p>
        <input type="text" />
      </div>

      <div>
        <p>有"#" "*"符号输入</p>
        <input type="tel" />
      </div>

      <div>
        <p>纯数字</p>
        <input pattern="\d*" />
      </div>

      <div>
        <!-- 拨号 -->
        <a href="tel:10086">打电话给: 10086</a>
      </div>

      <div>
        <!-- 发送短信 -->
        <a href="sms:10086">发短信给: 10086</a>
      </div>

      <div>
        <!-- 发送邮件 -->
        <a href="mailto:18513520334@163.com">发邮件给：18513520334@163.com</a>
      </div>
      <div>
        <!-- 选择照片或者拍摄照片 -->
        <input type="file" accept="image/*" />
      </div>
      <div>
        <!-- 选择视频或者拍摄视频 -->
        <input type="file" accept="video/*" />
      </div>
      <div>
        <!-- 多选 -->
        <input type="file" multiple />
      </div>
      <div>
        <a href="weixin://">打开微信</a>
      </div>
      <div>
        <a href="alipays://">打开支付宝</a>
      </div>
      <div>
        <a href="alipays://platformapi/startapp?saId=10000007"
          >打开支付宝的扫一扫功能</a
        >
      </div>
      <div>
        <a href="alipays://platformapi/startapp?appId=60000002"
          >打开支付宝的蚂蚁森林</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueHotkey from "v-hotkey";
Vue.use(VueHotkey);

export default {
  name: "test",
  data() {
    return {
      text: "",
      list: [],
      select: "1",
      keymap: { enter: this.send },
      file: ""
    };
  },
  methods: {
    change() {
      // console.log("select:", this.select)
      this.select == 1 && (this.keymap = { enter: this.send });
      this.select == 2 && (this.keymap = { "shift+enter": this.send });
    },
    send(e) {
      e.preventDefault();
      if (!this.text) return;

      this.list.push(this.text);
      this.text = "";
    }
  }
};
</script>

<style lang="less" scope>
* {
  // 屏幕旋转为横屏时，字体大小会变
  -webkit-text-size-adjust: 100%;
}

h1 {
  font-size: 2.5rem;
  margin-top: 35px;
  background-image: -webkit-linear-gradient(top, #ff8b1f, #ff2c2c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.item {
  margin-bottom: 50px;
  white-space: pre;
}

.c1 {
  div {
    margin-bottom: 15px;
  }
}
</style>
