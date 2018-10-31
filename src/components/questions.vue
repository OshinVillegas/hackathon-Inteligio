<template>    
 <div>
	<v-container fluid px-0>
		<v-card-text v-for="data in questions" :key="data.question">
			{{data.question}}
			<answers :dataQuestion="data.answers" :itemKey="data.quetions"/>
			<div>
     		<v-btn @click="next()" color="success">SIGUIENTE</v-btn>
  		</div>
    </v-card-text>
  </v-container>
 </div>
</template>
<script>
import firebase from 'firebase'
import answers from '@/components/answers'
import {EventBus} from '@/plugins/bus.js'
export default {
	name:'questions',
	props: [],
	data(){
		return {
			switch1: true,
			questions: [],
			result: [],
			clickNum: 0
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
			/* if(this.result.length === 8){
				this.$router.push({ name: 'profile', params: { total1: this.total().total1, total2: this.total().total2 }})
			} */
			if(this.result.length === 1){
				this.$router.push({ name: 'profile', params: { total1: 24, total2: 21 }})
			}
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
		}
	},
	components:{answers}
}
</script>
<style scoped>

</style>
