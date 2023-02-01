<template>
  <div class="mt-3">
    <h1>SERVIÇOS</h1>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Lista de Serviços" active>
            <b-table
                :items="servicos"
                :fields="fields"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                responsive="sm"
            >
              <template #cell(name)="data">
                  <b-form-input v-if="data.index == serviceEdit.index && data.item.id == serviceEdit.id" v-model="serviceEdit.name" type="text" required placeholder="Digite o nome do serviço"></b-form-input>
                  <div v-else>
                    {{ data.item.name }}
                  </div>
              </template>

              <template #cell(active)="data">
                <div v-if="data.index == serviceEdit.index && data.item.id == serviceEdit.id">
                  <b-form-checkbox v-model="serviceEdit.active"></b-form-checkbox>
                </div>
                <div v-else>
                  <b-badge v-if="data.item.active" variant="success">Ativo</b-badge>
                  <b-badge v-else variant="danger">Inativo</b-badge>
                </div>
              </template>

              <template #cell(actions)="data">
                <span v-if="data.index == serviceEdit.index && data.item.id == serviceEdit.id" class="mr-2">
                  <b-button variant="success" class="mr-2" @click="saveServiceEdit()" size="sm">Salvar</b-button>
                  <b-button variant="outline-primary" size="sm" @click="cancelEditService()">Cancelar</b-button>
                </span>
                <b-button v-else variant="primary" class="mr-2" size="sm" @click="editService(data.item, data.index)">Editar</b-button>
                <b-button variant="danger" size="sm" @click="removeService(data.item, data.index)">Deletar</b-button>
              </template>
            </b-table>
        </b-tab>


        <b-tab title="Cadastrar Novo Serviço">
          <b-card-text>
            <b-form @submit="onSubmitService">
              <b-form-group label="Nome do Serviço" label-for="input-1">
                <b-form-input id="input-1" v-model="formCreateService.name" type="text" required placeholder="Digite o nome do serviço"></b-form-input>
              </b-form-group>

              <b-form-checkbox class="mb-3" id="input-2" v-model="formCreateService.active">
                Ativo
              </b-form-checkbox>

              <b-button type="submit" variant="primary">Cadastrar</b-button>

            </b-form>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data() {
    return {
      formCreateService: {
        name: '',
        active: false,
      },
      sortBy: 'name',
      sortDesc: false,
      fields: [
        { key: 'id', label: 'ID', sortable: true },
        { key: 'name', label: 'Nome',sortable: true },
        { key: 'active', label: 'Ativo', sortable: true },
        { key: 'actions', label: 'Ações' },
      ],
      serviceEdit: {
        id: '',
        index: '',
        name: '',
        active: false,
      }
    }
  },
  mounted() {
    this.$store.dispatch('getServicos')
  },
  computed: {
    servicos() {
      return this.$store.getters.sortedServicos
    }
  },
  methods: {
    onSubmitService(event) {
      event.preventDefault()

      if(this.formCreateService.name == '') {
        alert('O campo nome é obrigatório!')
        return
      }

      this.$store.dispatch('addServico', this.formCreateService)

      // reset form
      this.formCreateService = {
        name: '',
        active: false,
      }
    },
    editService(item, index) {
      this.serviceEdit = {
        id: item.id,
        index: index,
        name: item.name,
        active: item.active,
      }
    },
    cancelEditService() {
      this.serviceEdit = {
        id: '',
        index: '',
        name: '',
        active: false,
      }
    },
    saveServiceEdit() {
      if(this.serviceEdit.name == '') {
        alert('O campo nome é obrigatório!')
        return
      }

      this.$store.dispatch('editServico', this.serviceEdit)

      this.serviceEdit = {
        id: '',
        index: '',
        name: '',
        active: false,
      }
    },
    removeService(item, index) {
      let dados = {
        item,
        index
      }

      this.$store.dispatch('removeServico', dados)
    }
  }
}
</script>
