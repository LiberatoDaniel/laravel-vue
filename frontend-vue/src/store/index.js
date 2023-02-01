import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        clientes: [],
        servicos: [],
        ordemServicos: []
    },
    getters: {
        sortedServicos: state => {
            let servicos = state.servicos;
            if (servicos.length == 0) {
                return [];
            }
            servicos.sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            });

            servicos.map(servico => {
                servico.active = servico.active == 1 ? true : false;
            })

            return servicos;
        },
        sortedServicosSelect: state => {
            let servicos = state.servicos;
            if (servicos.length == 0) {
                return [{
                    value: -1,
                    text: 'Nenhum serviço cadastrado'
                }];
            }
            let options = [];

            servicos.sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            });

            servicos.map(servico => {
                options.push({
                    value: servico.id,
                    text:  servico.name
                });
            });

            return options;
        },
        sortedClientesSelect: state => {
            let clientes = state.clientes;
            if (clientes.length == 0) {
                return [{
                    value: -1,
                    text: 'Nenhum cliente cadastrado'
                }];
            }
            let options = [];

            clientes.sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            });

            clientes.map(cliente => {
                options.push({
                    value: cliente.id,
                    text:  cliente.name + ' - ' + cliente.email
                });
            });

            return options;
        },
        sortedOrdemServicos: state => {
            let ordemServicos = state.ordemServicos;
            if (ordemServicos.length == 0) {
                return [];
            }
            ordemServicos.sort((a, b) => {
                if (a.customer_name < b.customer_name) return -1;
                if (a.customer_name > b.customer_name) return 1;
                return 0;
            });

            return ordemServicos;
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
        },
        DELETE_SERVICO(state, servico) {
            let index = state.servicos.findIndex(item => item.id == servico.id);
            state.servicos.splice(index, 1);
        },
        ADD_ORDEM_SERVICO(state, ordemServico) {
            state.ordemServicos.push(ordemServico);
        },
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

                    if (error.code == "ERR_BAD_REQUEST") {
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

                    if (error.code == "ERR_BAD_REQUEST") {
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
                })
                .catch(error => {
                    let msgError = ''

                    if (error.code == "ERR_BAD_REQUEST") {
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
        removeServico(context, servico) {
            axios.delete('http://localhost:8080/api/v1/servicos/' + servico.id)
                .then(response => {
                    context.commit('DELETE_SERVICO', response.data.data)
                })
                .catch(error => {
                    let msgError = ''

                    if (error.code == "ERR_BAD_REQUEST") {
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
        addOrdemServico(context, ordemServico) {
            axios.post('http://localhost:8080/api/v1/ordem-servicos', ordemServico)
                .then(response => {
                    context.commit('ADD_ORDEM_SERVICO', response.data.data);
                    alert('Ordem de Serviço adicionada com sucesso!')
                })
                .catch(error => {
                    let msgError = ''

                    if (error.code == "ERR_BAD_REQUEST") {
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
                    if(response.data.data.length > 0) {
                        this.state.servicos = response.data.data;
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getClientes() {
            axios.get('http://localhost:8080/api/v1/clientes')
                .then(response => {
                    this.state.clientes = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getOrdemServicos() {
            axios.get('http://localhost:8080/api/v1/ordem-servicos')
                .then(response => {
                    this.state.ordemServicos = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    modules: {}
})
