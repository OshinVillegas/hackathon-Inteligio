<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step v-for="(data, index) in questions" :key="data.question" :complete="e1 > (index+1)" :step="(index+1)">Pregunta {{(index+1)}}</v-stepper-step>
      <v-divider></v-divider>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content  v-for="(data, index) in questions" :key="data.question" :step="index">
        <v-card class="mb-5" color="grey lighten-1" height="300px">
					{{data.question}}
					<answers :dataQuestion="data.answers" :itemKey="data.quetions"/>
				</v-card>
        <v-btn color="primary" @click="e1 = (index+1)"> Continue </v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
	</v-stepper-items>
  </v-stepper>
</template>
<script>
import firebase from 'firebase'
import answers from '@/components/answers'
import {EventBus} from '@/plugins/bus.js'
import {sendDataMandrill} from '@/plugins/mandrill.js'
import {perfilValue} from '@/plugins/validatePerfil'
import {dataProfile} from '@/plugins/dataProfile'
export default {
	name:'webcam',
	props: [],
	data(){
		return {
			e1: 0,
			switch1: true,
			questions: [],
			result: [],
			clickNum: 0,
			valid: false,
			dialog: false,    
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
		}
	},
	mounted(){},
	created(){
		this.questionsList()		
		EventBus.$on('send-answer', value => {
			const profile = this.result
			if(profile.length !== 0){
				let findAnswer = false
				for (let index = 0; index < profile.length; index++) {
					if(profile[index].question === value.emitQuestion){
						profile[index].value = value.emitValue
						index=profile.length
						findAnswer = true
					}					
				}
				if(findAnswer === false){
					this.result.push({question:value.emitQuestion, value:value.emitValue})
				}
			}else{
				this.result.push({question:value.emitQuestion, value:value.emitValue})
			}
		})
	},
	beforeDestroy(){
    EventBus.$off()
  },
	watch: {},
	computed:{},
	methods:{
		questionsList(){
				let dataFirebase = firebase.database().ref().child('questions')
			dataFirebase.on('value', data => {
				// array de preguntas
				const arr = data.val()
				Object.keys(arr).map((element, index) => {
					Object.defineProperty(arr[element],'quetions',{
						value: element,
						writable: true,
						enumerable: true,
						configurable: true
					})
					this.questions.push(arr[element])
				})
			})
		},
		next(){
			console.log(this.result.length)			
		},
		total(){
			let x = 0;
			let y = 0;
			this.result.forEach((element, index) => {
				if(index <= 3){
					x = x + element.value
				}else{
					y = y + element.value
				}
			})
			return {total1: x, total2: y}
		},
		sendEmail(){
			this.dialog = false
			/* if(this.result.length === 8){
				this.$router.push({ name: 'profile', params: { total1: this.total().total1, total2: this.total().total2 }})
			} */
			let img = ""
			const validate = perfilValue(this.total().total1, this.total().total2)
			dataProfile.forEach(element => {
			if(element.perfil === validate){
				img = element.img
			}
			});
			sendDataMandrill(this.email, validate, img)			
			this.$router.push({ name: 'profile', params: { validate: validate, img1: img }})
			this.result = []
		}
	},
	components:{answers}
}
</script>
<style scoped>

</style>
