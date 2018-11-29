<template>
<div class="activity" v-if="activityList.length>0"> 
<swiper class="swiper" ref="swiper" v-once :pagination="false">
	<slide v-for="(item, index) in activityList" :key="index">
		<img :src="item"/>
	</slide>
</swiper>
</div>
</template>

<script>
//引入请求方法
import {getActivity} from "../../../services/home/homeService.js"
export default {
	data(){
		return {
			activityList: []
		}
	},
	created(){
		//请求数据
		getActivity().then(result=>{
			//赋值
			this.activityList = result;
			//监听dom渲染数据
			this.$nextTick(()=>{
				this.$refs.swiper.updateDOM();
			})
		})
	}
}
</script>

<style scoped>
.swiper img{
	width: 100%;
}
</style>