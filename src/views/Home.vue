<template>
  <div class="home">
    <v-row>
      <ReportsTable />
    </v-row>
  </div>
</template>

<script>
import ReportsTable from '@/components/ReportsTable.vue';

export default {
  name: 'Home',
  components: {
    ReportsTable,
  },
};
</script>
