<template>
  <clients-data-table />
</template>

<script>
// @ is an alias to /src
import ClientsDataTable from '@/components/models/ClientsDataTable.vue'

export default {
  name: 'clients',
  components: {
    ClientsDataTable
  },
  created() {
    this.$store.dispatch('clients/getAllClients')
  }
}
</script>
