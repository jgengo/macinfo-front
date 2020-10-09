<template>
            <v-card>
            <v-card-title>
              <span class="headline">Add a new report</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
        <v-text-field
          v-model='hostname'
          :rules='hostRules'
          label='Hostname'
          @keyup='cleanHostname'
          placeholder='c1r1p1'
          class='mt-3'
          focus
          required
        >
        </v-text-field>

        <v-textarea
          v-model='message'
          :rules='messageRules'
          :counter=200
          label='Message'
          @keyup='cleanHostname'
          placeholder='Describe here the problem as much as possible'
          class='mt-3'
          required
          auto-grow
          @keyup.enter="validate"
        >
        </v-textarea>
                  </v-col>

                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="submit"
              >
                Submit
              </v-btn>
            </v-card-actions>
          </v-card>
</template>

<style scoped>
h2 {
  text-transform: uppercase;
  font-weight: 600;
}
</style>
<script>
import {EventBus} from '@/event-bus.js';

export default {
  data: () => ({
    valid: true,
    hostname: '',
    message: '',
    hostRules: [
      (v) => !!v || 'Hostname is required',
      (v) => (v && v.length <= 10) || 'Hostname is too long',
    ],
    messageRules: [
      (v) => !!v || 'Message is required',
      (v) => (v && v.length <= 200) || 'Message is too long',
    ],
  }),

  methods: {
    cleanHostname() {
      this.hostname = this.hostname.trim();
      this.hostname = this.hostname.replace('.hive.fi', '');
    },
    validate() {
      this.$refs.form.validate();
    },
    close() {
      EventBus.$emit('close-report-modal');
    },
    submit() {
      // this.reports.push({hostname: 'c1r1p2', message: 'test'});
      this.reports = [{hostname: 'c1r1p1', message: 'test'}];
      this.close();
    },
  },


};
</script>
