<template>
   <h1>Главная страница админки</h1>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  components: {

  },
  created() {
    this.$store.dispatch('clients/getAllClients')
  }
}
</script>
