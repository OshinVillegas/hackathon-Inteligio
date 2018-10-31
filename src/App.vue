<template>
  <v-app>
 
  <v-toolbar dark color="colornav">
    <img class="logo" src="https://raw.githubusercontent.com/OshinVillegas/hackathon-Inteligo/develop/src/assets/inte.png" alt="">
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
    background-color: rgb(9,25,91) !important;
    border-color:rgb(9,25,91) !important;
}
.logo{
  border-radius: 100%;
}

</style>

