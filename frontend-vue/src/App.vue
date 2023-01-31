<template>
  <div id="app">
    <MenuComponent/>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import MenuComponent from "@/components/MenuComponent";

export default {
    name: 'App',
    components: {
      MenuComponent
    }
}
</script>
