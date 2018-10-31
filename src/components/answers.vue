<template>    
 <div>
	  <v-container fluid px-0>
    <v-radio-group v-model="radioGroup" @click="send(itemKey,radioGroup)">
      <v-radio
        v-for="data in questions"
        :key="data.value"
        :label="`${data.answer}`"
        :value="data.value"				
				required
      ></v-radio>
    </v-radio-group>
  </v-container>
 </div>
</template>
<script>
import firebase from 'firebase'
import {EventBus} from '@/plugins/bus.js'
export default {
	name:'answers',
	props: ['dataQuestion', 'itemKey'],
	data(){
		return {
			questions:[],
			checkbox: true,
      radioGroup: 1,
      switch1: true
		}
	},
	mounted(){},
	created(){
		this.questionsList(this.dataQuestion)
	},
	watch: {},
	computed:{},
	methods:{
		questionsList(data){
			// resolver array de preguntas
			const temp= []				
			Object.keys(data).map(element => {
				this.questions.push(data[element])
			})
		},
		send(question, value){
			EventBus.$emit('send-answer',{emitQuestion:question, 'emitValue':value})
		}
	},
	components:{}
}
</script>
<style scoped>

</style>
