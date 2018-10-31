<template>
  <v-app>
 
  <v-toolbar  fluid color="colornav">
<img class="logo" src="https://raw.githubusercontent.com/OshinVillegas/hackathon-Inteligo/develop/src/assets/inteligonav.png" alt="">
<v-btn round @click="GetData()" color="rgb(255, 193, 7)" class="admi" >Administrador</v-btn>
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

