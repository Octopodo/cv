import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curMenu: 'graphics',
    menu: {
      graphics: {
        index: 0,
      },
      coding:{
        index: 1,
      },
      blog: {
        index: 2
      },
    }
  },
  mutations: {
    setMenu(state, wich) {
      state.curMenu = wich
    }
  }
})
