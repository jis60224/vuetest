<template>
<nav class="tabs">
	<router-link :to="{name: tabItem.name}"
		class="tab" 
		v-for="tabItem in tabData" :key="tabItem.name">
		<em class="iconfont" :class="tabItem.icon"></em>
		<span>{{tabItem.title}}</span>
	</router-link>
</nav>
</template>

<script>
export default {
	data(){
		return {
			tabData: [
				{name: 'home', title: '首页', icon: 'icon-home'},
				{name: 'discover', title: '发现', icon: 'icon-discover'},
				{name: 'order', title: '订单', icon: 'icon-order'},
				{name: 'mine', title: '我的', icon: 'icon-mine'},
			]
		}
	}
}
</script>

<style scoped>
.tabs{
	width: 100%;
	height: 49px;
	display: flex;
	position: absolute;
	left: 0;
	bottom: 0;
	background: #fff;
}
.tabs:before{
	content: '';
	display: block;
	width: 100%;
	height: 1px;
	border-top: 1px solid #999;
	position: absolute;
	top: 0;
	left: 0;
	transform: scaleY(0.5);
	transform-origin: top;
}
.tabs .tab{
	flex: 1;
}
.tabs .tab em, .tabs .tab span{
	display: block;
	width: 100%;
	text-align: center;
	color: #333;
}
.tabs .tab.router-link-active em, .tabs .tab.router-link-active span{
	color: #0089dc;
}
.tabs .tab em{
	padding-top: 4px;
	font-size: 20px;
}
.tabs .tab span{
	padding-top: 2px;
	font-size: 12px;
}
</style>