import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clientes: [],
  },
  getters: {
  },
  mutations: {
    ADD_CLIENTE(state, cliente) {
        state.clientes.push(cliente);
    }
  },
  actions: {
    addCliente(context, cliente) {
      // ajax call


      context.commit('ADD_CLIENTE', cliente);
    }
  },
  modules: {
  }
})
