<template>
	<div class="content">
		<div class="content-home">
			<h1 class="titulo">BIENVENIDO A INTELIGO</h1>
			<h3 class="subtitulo">Somos una empresa de gestión patrimonial, asesoría financiera, custodia y servicios de corretaje, es un placer para nosotros ayudarte. </h3>
			<v-btn @click="goQuestions()" class="empezar">Empezar</v-btn>
		</div>     
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
	name:'home',
	props: [],
	data(){
		return {}
	},
	mounted(){},
	created(){},
	watch: {},
	computed:{},
	methods:{
		goQuestions(){		
			this.$router.push('/questions')
		}
	},
	components:{}
}
</script>
<style scoped>
.content{
	background: url('https://images.pexels.com/photos/955447/pexels-photo-955447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') no-repeat;
	background-size: cover;
	height: 100%;
}
.content-home{
    width: 100%;
    height: 100%;
    padding: 0em 0em;
    background: rgba(0, 0, 0, 0.576562);
    text-align: left;
    color: #fff;
    display: block;
}
.titulo{
	font-size: 50px;
  letter-spacing: 1px;
  text-align: center;
  border-left: 8px solid rgb(233,214,107);
  display: inline-block;
  margin: 15% 0% 5% 10%;
  padding: 0px 15px;
  font-family: 'Arial Regular'
}
.subtitulo{

	font-size: 25px;
  margin: 0% 0% 5% 10%;
  font-weight: 500;
  font-family: 'Arial Regular'
}
.empezar{
	width: 10%;
	/* height: 10%; */
  margin: 3% 40% 5% 40%;
	background:rgb(233,214,107) !important;
	color:rgb(9,25,91);
	font-family: 'Arial Regular';
	font-weight: bold;
}
</style>