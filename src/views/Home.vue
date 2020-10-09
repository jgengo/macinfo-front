<template>
  <div class="home">
    <AddReportForm />
    Hello!!
  </div>
</template>

<script>
// @ is an alias to /src
import AddReportForm from '@/components/AddReportForm.vue';

export default {
  name: 'Home',
  components: {
    AddReportForm,
  },
};
</script>
