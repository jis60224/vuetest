<template>
<div class="search" :class="{fixed: isFixed}">
	<span class="text">搜索饿了么商家、商品名称</span>
</div>
</template>

<script>
export default {
	// 子组件接受数据
	props: {
		isFixed: Boolean
	}
}
</script>

<style scoped>
.search{
	width: 100%;
	height: 40px;
	padding: 5px 10px;
	box-sizing: border-box;
	background: linear-gradient(90deg,#0af,#0085ff);
}
.search.fixed{
	position: absolute;
	top: 0;
	left: 0;
}
.search .text{
	display: block;
	font-size: 12px;
	color: #999;
	text-align: center;
	line-height: 30px;
	height: 30px;
	background: #fff;
}
</style>