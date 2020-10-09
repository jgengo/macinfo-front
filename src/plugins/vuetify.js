import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.teal,
        secondary: colors.teal.lighten2,
      },
    },
  },
});

// Vue.use(Vuetify);

// export default new Vuetify({});
