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
              <template #cell(active)="data">
                <b-form-checkbox v-model="data.item.active" disabled></b-form-checkbox>
              </template>

              <template #cell(actions)="data">
                <b-button variant="primary" class="mr-2" size="sm" @click="editTask(data.item, data.index)">Editar</b-button>
                <b-button variant="danger" size="sm" @click="removeTask(data.item, data.index)">Deletar</b-button>
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
        { key: 'id', sortable: true },
        { key: 'name', sortable: true },
        { key: 'active', label: 'Ativo', sortable: true },
        { key: 'actions', label: 'Ações' },
      ],
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
    }
  }
}
</script>
