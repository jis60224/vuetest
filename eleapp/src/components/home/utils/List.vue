<template>
	
		<!-- 第一个循环 -->
		<ul class="list">
			<li class="item one-px-bottom" v-for="(item,i) in dataSource" :key="i">
				<div class="item-img"><img :src="item.imagePath"></div>
				<div class="item-content">
					<div class="top one-px-bottom">
						<h3>{{item.name}}</h3>
					</div>
					<!-- 第二个循环 -->
					<ul class="activity">
						<li class="activity-item"
							v-for="(act,j) in item.activities" :key="j"
							v-if="j<2 || item.isActive">  <!-- 短路操作-->
								<!-- 父子传值 -->
							<letter :color="act.color" :name="act.icon"></letter>
							{{act.name}}
						</li>
						<!-- 判断显示 -->
						<span class="handle" v-if="item.activities.length>0"  @click="activityClick(i)">
							{{item.activities.length}}个活动<em class="arrow" :class="{active: item.isActive}"></em> <!-- 是否显示三角符-->
						</span>
					</ul>
				</div>
			</li>
		</ul>
		


</template>

<script>
/**
 * 1.逻辑
 * 		数据请求 处理
 * 2.结构
 * 
 * 3.样式
 */
import {getSellerData} from "../../../services/home/homeService.js"
import letter from "./Letter.vue";
export default{
	props:{
		flag:String
	},
	components:{
		letter
	},
	data(){
		return {
			dataSource: [],
			limit:15
			
		}
	},
	computed:{
		offset(){
			return this.dataSource.length;
		}
	},
	methods:{
		//点击展开/收起活动列表
		activityClick(index){
		this.dataSource[index].isActive = !this.dataSource[index].isActive
		//更新滚动视图
		this.$nextTick(()=>{
			this.$emit("list-change");
		})
		},
		//请求数据
		getData(){
			if(this.flag == 'home'){
			getSellerData(this.offset,this.limit).then(result=>{
				// console.log(result);
				this.dataSource = this.dataSource.concat(result);
			})
		}
		}
	},
	created(){
		this.getData();
	}
}
</script>

<style scoped>
.item{
	display: flex;
	padding: 10px;
}
.item .item-img{
	width: 60px;
	height: 60px;
	border: 1px solid #eee;
}
.item .item-img img{
	width: 100%;
}
.item .item-content{
	flex: 1;
}
.item .item-content h3{
	font-size: 14px;
	color: #333;
}

.one-px-bottom{
	position: relative;
}
.one-px-bottom:after{
	content: '';
	display: block;
	width: 100%;
	height: 1px;
	border-bottom: 1px solid #999;
	transform: scaleY(0.5);
	transform-origin: bottom;
	position: absolute;
	bottom: 0;
	left: 0;
}
.activity .activity-item{
	font-size: 12px;
	color: #666;
	line-height: 22px;
	height: 22px;
}
.activity{
	position: relative;
}
.activity .handle{
	position: absolute;
	font-size: 12px;
	color: #999;
	top: 5px;
	right: 5px;
}
.activity .handle .arrow{
	width: 0;
	height: 0;
	border-top: 5px solid #999;
	border-bottom: 5px solid transparent;
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
	transition: 100ms transform;
	position: absolute;
}
.activity .handle .arrow.active{
	transform: rotate(180deg);
	
}
</style>