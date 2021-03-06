import Vue from 'vue'
import Vuex from 'vuex'
import goods from './modules/goods'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
  goods
  },
  getters
});

export default store;

