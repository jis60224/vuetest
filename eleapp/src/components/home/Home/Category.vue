<template>
<div class="category" v-if="categoryList.length>0">
	<swiper ref="swiper" v-once>
		<slide v-for="(slideList, i) in categoryList" :key="i">
			<ul class="list">
				<li class="item" v-for="(item,j) in slideList" :key="j">
					<img :src="item.imagePath"/>
					<span>{{item.name}}</span>
				</li>
			</ul>
		</slide>
	</swiper>
</div>
</template>

<script>
import {getCategory} from "../../../services/home/homeService.js"
export default {
	data(){
		return {
			categoryList: []
		}
	},
	created(){
		//请求数据
		getCategory().then(result=>{
			//赋值
			// console.log(result);
			this.categoryList = result;
			//监听Dom更新数据
			this.$nextTick(()=>{
				//更新轮播图
				this.$refs.swiper.updateDOM();
			})
		})
	}
}
</script>

<style scoped>

.category ul{
	overflow: hidden;
}
.category li{
	width: 20%;
	float: left;
	padding: 5px 0;
	box-sizing: border-box;
}
.category li img{
	width: 60%;
	margin: 0 auto;
}
.category li span{
	display: block;
	text-align: center;
	font-size: 12px;
	color: #666;
}
</style>