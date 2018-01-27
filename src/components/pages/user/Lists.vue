<template>
	<div>
	<button class="button is-link" @click="">Add</button>
	<hr>

		<table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
			<thead>
				<tr>
					<th>Nama</th>
					<th>Alamat</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="user in users">
					<td>{{ user.name }}</td>
					<td></td>
				</tr>
			</tbody>
		</table>
		<hr>
		<create></create>
	</div>
</template>

<script type="text/javascript">
	import Create from './Create'
	export default{
		name:'lists',
		components :{ Create },
		data(){
			return{
				users:[{
					name:'Aditya'
				},
				{
					name:'Adi'
				}]
			}
		}
	}
</script>