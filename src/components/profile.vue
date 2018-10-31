<template>
    <div>
		<h1>{{validate}}</h1>
		<img :src="img1" alt="">
		<div>
     <v-btn @click="register()" color="success">Registrarme</v-btn>
  	</div>
	</div>
</template>
<script>
import firebase from 'firebase'
import {dataProfile} from '@/plugins/dataProfile'
export default {
	name:'profile',
	props: [],
	data(){
		return {
			validate:  this.$route.params.validate,
			img1:  this.$route.params.img1,
		}
	},
	mounted(){},
	created(){},
	watch: {},
	computed:{},
	methods:{
		register(){
			this.$router.push('/login')
		}
	},
	components:{}
}
</script>
<style scoped>

</style>