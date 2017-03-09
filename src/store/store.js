import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './action';
import * as getters from './getters';

Vue.use(Vuex);

// 创建一个对象来保存应用启动时的初始状态
const state = {
  'headerTitle': '福利',
  'loadingShow': false,
  'news': 5
}
// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  setTitle(state, title) {
    state.headerTitle = title
  },
  setLoadingState(state, data) {
    state.loadingShow = data
  },
  setNewsNumber(state, number) {
    state.news = number
  }
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
