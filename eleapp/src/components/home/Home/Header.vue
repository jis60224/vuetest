<template>
<header class="header">
	<div class="address">
		{{addressName}}
	</div>
	<home-search></home-search>
</header>
</template>

<script>
import HomeSearch from './HomeSearch.vue'
import {getAddress} from '../../../services/home/homeService.js'
export default {
	components: {
		'home-search': HomeSearch
	},
	data(){
		return {
			addressName: ''
		}
	},
	created(){
		getAddress()
		.then(result=>{
			this.addressName = result.name;
		})
	}
}
</script>

<style scoped>
.header{
	background: linear-gradient(90deg,#0af,#0085ff);
}
.header .address{
	width: 100%;
	height: 40px;
	line-height: 40px;
	padding-left: 10px;
	font-size: 14px;
	font-weight: bold;
	color: #fff;
}
</style>