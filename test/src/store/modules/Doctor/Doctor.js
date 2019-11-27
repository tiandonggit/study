//其它界面功能
export default {
  namespaced: true,
  state: {
    cab:""
  },
  mutations: {
    //vuex保存数据
    Doctor(state) {
      let data = JSON.parse(window.localStorage.getItem("vuex"));
      state = data.Doctor;
    },
    cab(state, res) {
      state.cab = res;
    },
    cabNum(state, res) {
      state.cabNum = res;
    },
  },
  actions: {},
  getters: {}
};
