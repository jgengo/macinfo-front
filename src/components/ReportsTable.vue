<template>
    <v-col cols="12" sm="12" md="12">
      <v-card flat>
    <v-card-title>
      Reports
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>

        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            ><v-icon left>mdi-plus-thick</v-icon>
              new report
            </v-btn>
          </template>
          <AddReportForm />
        </v-dialog>

    </v-card-title>
        <v-data-table
        filterable
        :headers="headers"
        :items="reports"
        :search="search"
        class='elevation-1'
        ></v-data-table>
        </v-card>
    </v-col>
</template>


<script>
import {EventBus} from '@/event-bus.js';
import AddReportForm from '@/components/AddReportForm.vue';

export default {
  name: 'ReportTable',
  components: {
    AddReportForm,
  },

  data: () => ({
    dialog: false,
    search: '',
    headers: [
      {text: 'Hostname', align: 'start', sortable: false, value: 'hostname'},
      {text: 'Message', sortable: false, value: 'message'},
    ],
    reports: [],

  }),
  created() {
    this.initialize();
    EventBus.$on('close-report-modal', () => {
      this.close();
    });
  },
  methods: {
    initialize() {
      this.reports = [
        {
          hostname: 'c1r1p1',
          message: 'ISCSi target failed, could you please fix it?',
        },
        {
          hostname: 'c3r2p6',
          message: 'Screen is black, I tried to reboot it but it doesn\'t help',
        },
        {
          hostname: 'c2r5p4',
          message: `
            I froze the iMac while trying to code FdF, can I reboot it pls?
          `,
        },
        {
          hostname: 'c1r1p1',
          message: 'ISCSi target failed, could you please fix it?',
        },
      ];
    },
    close() {
      this.dialog = false;
    },
  },
};
</script>
