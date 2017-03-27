import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  text: ''
}

/* mutations */
const mutations = {
  addText: (state, text) => {
    state.text = text
  }
}

/* getters */
const getters = {
  text: state => state.text
}

/* actions */
const actions = {
  addText: (state, text) => {
    store.commit('addText', text)
  }
}

let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
})

global.store = store
export default store
