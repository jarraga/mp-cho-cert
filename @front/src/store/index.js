import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scrollPosition: null,
    currentProduct: null,
    // t1: 900,
    // t2: 800,
    // t3: 700,
    // t4: 600,
    // t5: 500,
    // t6: 400,
    // t7: 300,
    // t8: 200,
    // t9: 100,
    theme: 'light',
    t1: 100,
    t2: 200,
    t3: 300,
    t4: 400,
    t5: 500,
    t6: 600,
    t7: 700,
    t8: 800,
    t9: 900,
    keyboard: false,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
