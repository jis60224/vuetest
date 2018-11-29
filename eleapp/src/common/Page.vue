<template>
<div class="page" :id="pageId" ref="page">
	<div class="wrap">
		<slot></slot>
		<div class="down">
			<img :src="loadMoreImg" :class="{active:canLoadMore}" />
			<span>{{loarMoreInfo}}</span>
		</div>
	</div>
</div>
</template>

<script>
export default {
	data(){
		return {
			canLoadMore:false,
			loarMoreInfo:"上拉加载更多...",
			loadMoreImg:"static/images/arrow.png"
		}
	},
	props: {
		pageId: String
	},
	methods: {
		refresh(){
			this.pageScroll.refresh();
		}
	},
	mounted(){
		let pageDOM = this.$refs.page;
		this.pageScroll = new IScroll(pageDOM, {
			tap: true,
			click: true,
			probeType: 3
		});
		this.pageScroll.on('beforeScrollStart', ()=>{
			this.refresh();
		})
		
		this.pageScroll.on('scroll', ()=>{
			//获得正在滚动的位置
			this.$emit('scroll', this.pageScroll.y);
			//上拉加载更多 方法一
			// let y = this.pageScroll.y;
			// let maxY = this.pageScroll.maxScrollY + 50;
			// if(y < maxY){
			// 	//请求数据
			// }
		})

		//上拉加载更多 方法一
		this.pageScroll.on('scroll', ()=>{
			let y = this.pageScroll.y;
			let maxY = this.pageScroll.maxScrollY;
			//可以看到全部的加载更多的dom
			if(y <= maxY){
				this.canLoadMore = true;
				this.loadMoreInfo = '释放立即加载更多...';
			}else{
				this.canLoadMore = false;
				this.loadMoreInfo = '上拉加载更多...';
			}
			this.loadMoreImg = 'static/images/arrow.png';
		})
		
		this.pageScroll.on('scrollEnd', ()=>{
			let y = this.pageScroll.y;
			let maxY = this.pageScroll.maxScrollY;
			//可以看到一部分的加载更多的dom
			if(y > maxY && y < maxY+50){
				this.pageScroll.scrollTo(0, (maxY+50), 200);
			}
			//可以看到全部的加载更多的dom
			else if(y <= maxY){
				//显示加载更多的动画
				this.loadMoreImg = 'static/images/ajax-loader.gif';
				this.loadMoreInfo = '正在加载中...';
				//请求更多数据
				this.$emit('on-loadMore');
			}
		})

	}
}
</script>

<style scoped>
.page{
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 49px;
	overflow: hidden;
}
.up,.down{
	height: 50px;
	line-height: 50px;
	text-align: center;
	background: #ccc;
}
.down span{
	font-size: 12px;
}
.down img{
	display: inline-block;
	width: 20px;
	position: relative;
	top: 3px;
	transition: 200ms transform;
}
.down img.active{
	transform: rotate(180deg);
}
</style>