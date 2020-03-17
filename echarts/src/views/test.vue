<template>
  <div class="test">
    <h1>This is an test page</h1>
    <div class="im-box">
      <p class="item" v-for="(item, index) in list" :key="index">{{ item }}</p>
    </div>
    <div class="input-box">
      <textarea
        v-model.trim="text"
        v-hotkey="{
          enter: send
        }"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <button @click.stop="send()">发送</button>
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
      list: []
    };
  },
  methods: {
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
