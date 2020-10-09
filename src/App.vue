<template>
  <v-app id="app">

    <v-app-bar id="nav" app dense color="#FFF">
      <div class="d-flex align-center">
        <v-img alt="Hive Logo" :src="logo" width="84px" />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="#" target="_blank" text>
        <span class="mr-2">Login</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="mt-5">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
#app {
  font-family: 'Quicksand', sans-serif;
}
</style>

<script>
export default {
  name: 'App',

  data: () => ({
    logo: require('./assets/image.svg'),
  }),
};
</script>
