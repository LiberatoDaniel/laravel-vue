<template>
  <div>
    <h3 class="mt-4"> CADASTRAR CLIENTE </h3>
    <b-form @submit="onSubmit" @reset="onReset">

      <b-form-group
          id="input-group-1"
          label="Nome"
          label-for="input-name"
          class="mt-3"
      >
        <b-form-input
            id="input-name"
            v-model="form.name"
            type="text"
            placeholder="Ex: Daniel Liberato da Silva"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group
          id="input-group-1"
          label="Email"
          label-for="input-1"
      >
        <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Ex: daniel.bacellar022@gmail.com"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group
          id="input-group-1"
          label="Rua"
          label-for="input-street"
      >
        <b-form-input
            id="input-rua"
            v-model="form.street"
            type="text"
            placeholder="Ex: Raul Pavon"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group
          id="input-group-1"
          label="Número da casa"
          label-for="input-number_home"
      >
        <b-form-input
            id="input-number_home"
            v-model="form.numberHome"
            type="number"
            min="1"
            placeholder="Ex: 412"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group
          id="input-group-1"
          label="Bairro"
          label-for="input-district"
      >
        <b-form-input
            id="input-district"
            v-model="form.district"
            type="text"
            placeholder="Ex: Vila boa"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group
          id="input-group-1"
          label="Cidade"
          label-for="input-city"
      >
        <b-form-input
            id="input-city"
            v-model="form.city"
            type="text"
            placeholder="Ex: São Paulo"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group
          id="input-group-1"
          label="Estado"
          label-for="input-state"
      >
        <b-form-input
            id="input-state"
            v-model="form.state"
            type="text"
            placeholder="Ex: São Paulo"
            required
        ></b-form-input>
      </b-form-group>

      <b-button class="mr-2" type="submit" variant="primary">Cadastrar</b-button>
      <b-button type="reset" variant="danger">Cancelar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'CadastrarCliente',
  data() {
    return {
      form: {
        email: '',
        name: '',
        street: '',
        district: '',
        city: '',
        state: '',
      }
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      // action to be done
      this.$store.dispatch('addCliente', this.form)

       this.form = {
         email: '',
         name: '',
         street: '',
         district: '',
         city: '',
         state: '',
       }
    },
    onReset(event) {
      event.preventDefault()
    }
  }
}
</script>