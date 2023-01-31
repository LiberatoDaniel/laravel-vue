<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">DanielDEV</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="'/'">Serviços</b-nav-item>
          <b-nav-item :to="'/ordem-servicos'">Ordem de Serviços</b-nav-item>
          <b-nav-item :to="'/cadastrar-cliente'" >Cadastrar Clientes</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
    name: 'MenuComponent',
}
</script>