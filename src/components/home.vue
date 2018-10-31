<template>

	  <div>
     <v-btn @click="goQuestions()" color="success">Empezar</v-btn>
	 <v-btn @click="GetData()">Administrador</v-btn>
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

</style>