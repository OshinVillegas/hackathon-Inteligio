<template>
  <v-app>
 
  <v-toolbar  fluid color="colornav">
    <img src="https://raw.githubusercontent.com/OshinVillegas/hackathon-Inteligo/develop/src/assets/Screenshot_3.png" alt="">
<button  @click="GetData()" type="button" class="btn btn-link">Administrador</button>
  </v-toolbar>
  <router-view/>
   
  </v-app>
</template>
<script>
export default {
  name: 'App',
}
</script>
<style>
.colornav {
    background-color: rgb(9,25,91) !important;
    border-color:rgb(9,25,91) !important;
}
.logo{
  border-radius: 100%;
}

.btn{
   font-family: 'Arial Regular';
  font-weight: bold;
 margin-left: 75%;
 color:  #ffc107;
}

</style>

