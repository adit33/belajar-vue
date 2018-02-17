<template>
	<div>
		<h1>{{ text }}</h1>
	</div>
</template>

<script type="text/javascript">
	import axios from 'axios'
	export default{
		name:'home',
		data(){
			return{
				text:''
			}
		},
		mounted(){
			this.fetchText()
		},
		methods:{
			fetchText(){
				axios.get('http://localhost:8000/test').then(response=>{
					this.text=response.data;
				})
			}
		}
	}
</script>