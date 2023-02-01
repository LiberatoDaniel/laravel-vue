<template>
  <div class="mt-3">
    <h1>ORDEM DE SERVIÇO</h1>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Lista de Ordem de Serviços" active>
          <b-table
              :items="ordemServicos"
              :fields="fields"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              responsive="sm"
          ></b-table>
        </b-tab>


        <b-tab title="Cadastrar Nova Ordem Serviço">
          <b-card-text>
            <b-form @submit="onSubmitService">

              <b-form-group label="Cliente" label-for="input-1">
                <b-form-select
                  id="input-1"
                  v-model="formCreateOrdemService.customer_id"
                  :options="this.customerSelect()"
                  required
                ></b-form-select>
              </b-form-group>

              <b-form-group label="Serviço" label-for="input-2">
                <b-form-select
                  id="input-2"
                  v-model="formCreateOrdemService.service_id"
                  :options="this.serviceSelect()"
                  required
                ></b-form-select>
              </b-form-group>

              <b-form-group label="Data Abertura" label-for="input-3">
                <b-form-datepicker
                  id="input-3"
                  v-model="formCreateOrdemService.date_opened"
                  required
                ></b-form-datepicker>
              </b-form-group>

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
  name: 'OrdemServicosView',
  data() {
    return {
      formCreateOrdemService: {
        service_id: '',
        customer_id: '',
        date_opened: '',
      },
      sortBy: 'customer_name',
      sortDesc: false,
      fields: [
        { key: 'id', label: 'ID', sortable: true },
        { key: 'customer_name', label: 'Cliente',sortable: true },
        { key: 'service_name', label: 'Serviço', sortable: true },
        { key: 'date_opened_formatted', label: 'Data abertura', sortable: true },
      ],
      serviceSelect() {
        return this.$store.getters.sortedServicosSelect
      },
      customerSelect() {
        return this.$store.getters.sortedClientesSelect
      },
    }
  },
  mounted() {
    this.$store.dispatch('getOrdemServicos')
    this.$store.dispatch('getClientes')
    this.$store.dispatch('getServicos')
  },
  computed: {
    ordemServicos() {
      return this.$store.getters.sortedOrdemServicos
    },
  },
  methods: {
    onSubmitService(event) {
      event.preventDefault()

      if(!this.validateForm()) {
        alert('Preencha todos os campos com dados validos!')
        return
      }

      this.$store.dispatch('addOrdemServico', this.formCreateOrdemService)

      // reset form
      this.formCreateOrdemService =  {
        service_id: '',
        customer_id: '',
        date_opened: '',
      }
    },
    validateForm() {
      return this.formCreateOrdemService.customer_id != ''
          && this.formCreateOrdemService.service_id != ''
          && this.formCreateOrdemService.date_opened != ''
          && this.formCreateOrdemService.customer_id != -1
          && this.formCreateOrdemService.service_id != -1
    },
  }
}
</script>
