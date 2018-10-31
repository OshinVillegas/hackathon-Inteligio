<template>
  <v-app>
 
  <v-toolbar dark color="colornav">
    <img class="logo" src="https://raw.githubusercontent.com/OshinVillegas/hackathon-Inteligo/develop/src/assets/inteligonav.png" alt="">
    <v-btn @click="GetData()" color="#FFC107" class="admi" >Administrador</v-btn>
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
.admi{
  margin-left: 85%;
  color:rgb(9,25,91);
  font-family: 'Arial Regular';
  font-weight: bold;
}

</style>

