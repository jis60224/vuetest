<template>
    <div>
        <!-- 父组件 -->
        <page ref="page" pageId="home" @scroll="handleScrollAction" @on-loadMore="handleLoadMore">
            <header-com></header-com>
            <activity-com></activity-com>
            <category-com></category-com>
            <hot-com></hot-com>
            <list-com ref="list" flag="home" @list-change="refreshPage()"></list-com> <!-- home(父)  List(子)父子组件传值 父调子时，在子声明变量赋值传过去，子接受props-->
        </page>
        <home-search v-show="showSearch" :isFixed="true"></home-search>
    </div>
    
</template>

<script>
import Header from "../../components/home/Home/Header"
import HomeSearch from "../../components/home/Home/HomeSearch"
import Activity from "../../components/home/Home/Activity"
import Category from "../../components/home/Home/Category"
import Hot from "../../components/home/Home/Hot"
import List from "../../components/home/utils/List"
export default {
    data(){
        return {
            showSearch:false
        }
    },
    components:{
        "header-com":Header,
        "activity-com":Activity,
        "category-com":Category,
        "hot-com":Hot,
        "list-com":List,
        "home-search":HomeSearch
    },
    methods:{
        handleScrollAction(y){
            // console.log(y);
            if(y < -40){
                this.showSearch = true;
            }else{
                this.showSearch = false;
            }
            
            
        },
        handleLoadMore(){
            //页面执行加载更多
			this.$refs.list.getData();
        },
        refreshPage(){
			this.$refs.page.refresh();
		}

    }
}
</script>

