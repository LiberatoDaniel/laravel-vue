import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
      axios.post('http://localhost:8080/api/v1/clientes', cliente)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
          console.log('Finalizado');
        });


      context.commit('ADD_CLIENTE', cliente);
    }
  },
  modules: {
  }
})
