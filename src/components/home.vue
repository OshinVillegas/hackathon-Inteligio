<template>
	<div class="content">
		<div class="content-home">
			<h1 class="titulo">Somos Inteligo una empresa de gestión patrimonial, asesoría financiera, custodia y servicios de corretaje.
				<br>
             Nuestra misión es asesorar a nuestros clientes y sus familias en la gestión de sus patrimonios a lo largo de sus vidas,con visión en lograr que nuestros clientes sean los mejor asesorados de Latinoamérica, poniendo siempre
			 en practica nuestros valores: Excelencia, enfoque en el cliente, trabajo en equipo, integridad, sentido del humor e innovación.
			 <br>
			  Es un placer para nosotros ayudarte.
			 <br>
			</h1>
			<v-btn round @click="goQuestions()" class="empezar">Empezar</v-btn>
			
		</div>     
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "home",
  props: [],
  data() {
    return {};
  },
  mounted() {},
  created() {},
  watch: {},
  computed: {},
  methods: {
    goQuestions() {
      this.$router.push("/questions");
    }
  },
  components: {}
};
</script>
<style scoped>
.content {
  background: url("https://raw.githubusercontent.com/OshinVillegas/hackathon-Inteligo/develop/src/assets/fondo.png")
    no-repeat;
  background-size: cover;
  height: 100%;
}
.content-home {
  width: 100%;
  height: 100%;
  padding: 0em 0em;
  background: rgba(0, 0, 0, 0.576562);
  text-align: left;
  color: #fff;
  display: block;
}
.titulo {
  font-size: 25px;
  letter-spacing: 1px;
  text-align: center;
  border-left: 8px solid rgb(255, 193, 7);
  display: inline-block;
  margin: 15% 0% 5% 10%;
  padding: 0px 15px;
  font-family: "Arial Regular";
  text-align: center;
  margin-top: 6%;
  margin-right: 10%;
}

.empezar {
  width: 20%;
  height: 10%;
  
  background: #ffc107 !important;
  color: rgb(9, 25, 91);
  font-family: "Arial Regular";
  font-weight: bold;
  margin-left: 40%;
}
</style>