import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clientes: [],
    servicos: [],
  },
  getters: {
      sortedServicos: state => {
        let servicos = state.servicos;
        servicos.sort((a, b) => {
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
        });

        servicos.map(servico => {
            servico.active = servico.active == 1 ? true : false;
        })

        return servicos;
      }
  },
  mutations: {
    ADD_CLIENTE(state, cliente) {
        state.clientes.push(cliente);
    },
    ADD_SERVICO(state, servico) {
        state.servicos.push(servico);
    },
    SET_SERVICO(state, servico) {
        let index = state.servicos.findIndex(item => item.id == servico.id);
        state.servicos.splice(index, 1, servico);
    }
  },
  actions: {
    addCliente(context, cliente) {
      axios.post('http://localhost:8080/api/v1/clientes', cliente)
        .then(response => {
            context.commit('ADD_CLIENTE', response.data.data);
            alert('Cliente adicionado com sucesso!')
        })
        .catch(error => {
            let msgError = ''

            if(error.code == "ERR_BAD_REQUEST") {
                Object.keys(error.response.data.errors).forEach(key => {
                    error.response.data.errors[key].forEach(msg => {
                        msgError += '\n' + msg + '\n';
                    });
                });
            } else {
                msgError = 'Ocorreu um erro inesperado !';
            }

            alert(msgError)
        });
    },
    addServico(context, servico) {
        axios.post('http://localhost:8080/api/v1/servicos', servico)
            .then(response => {
                context.commit('ADD_SERVICO', response.data.data);
                alert('Servico adicionado com sucesso!')
            })
            .catch(error => {
                let msgError = ''

                if(error.code == "ERR_BAD_REQUEST") {
                    Object.keys(error.response.data.errors).forEach(key => {
                        error.response.data.errors[key].forEach(msg => {
                            msgError += '\n' + msg + '\n';
                        });
                    });
                } else {
                    msgError = 'Ocorreu um erro inesperado !';
                }

                alert(msgError)
            });
    },
      editServico(context, servico) {
            axios.put('http://localhost:8080/api/v1/servicos/' + servico.id, servico)
                .then(response => {
                    context.commit('SET_SERVICO', response.data.data);
                    alert('Servico editado com sucesso!')
                })
                .catch(error => {
                    let msgError = ''

                    if(error.code == "ERR_BAD_REQUEST") {
                        Object.keys(error.response.data.errors).forEach(key => {
                            error.response.data.errors[key].forEach(msg => {
                                msgError += '\n' + msg + '\n';
                            });
                        });
                    } else {
                        msgError = 'Ocorreu um erro inesperado !';
                    }

                    alert(msgError)
                });
      },
    getServicos() {
        axios.get('http://localhost:8080/api/v1/servicos')
            .then(response => {
                this.state.servicos = response.data.data;
            })
            .catch(error => {
                console.log(error);
            });
    }
  },
  modules: {
  }
})
