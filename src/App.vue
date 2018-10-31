<template>
  <v-app>
 
  <v-toolbar  fluid color="colornav">
    <img src="https://raw.githubusercontent.com/OshinVillegas/hackathon-Inteligo/develop/src/assets/Screenshot_3.png" alt="">
<button  @click="GetData()" type="button" class="btn btn-link">Link</button>
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
.admi{
  margin-left: 70%;
  color:rgb(9,25,91);
  font-family: 'Arial Regular';
  font-weight: bold;
}

</style>

