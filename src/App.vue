<template>
  <v-app>
  <v-toolbar dark color="colornav">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Inteligo</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon router-link to='questions'>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
  <router-view/>
  </v-app>
</template>
<script>
export default {
  name: 'App',
}
</script>
<style scoped>
.colornav {
    background-color: #18459c !important;
    border-color: #18459c !important;
}

</style>

