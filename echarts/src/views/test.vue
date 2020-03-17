<template>
  <div class="test">
    <h1>This is an test page</h1>
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
      keymap: {'enter': this.send},
      file: ''
    };
  },
  methods: {
    change(){
      // console.log("select:", this.select)
      this.select == 1 && (this.keymap = {'enter': this.send})
      this.select == 2 && (this.keymap = {'shift+enter': this.send})
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
.item {
  margin-bottom: 50px;
  white-space: pre;
}
</style>
