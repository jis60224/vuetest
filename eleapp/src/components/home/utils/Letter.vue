<template>
    <!-- 父子组件传值 List(父) letter(子)  -->
    <span class="leeter" :style="{background:'#'+color}">{{name}}</span>
</template>

<script>
export default {
    props:{
        color:String,
        name:String
    }
}
</script>

<style>
.letter{
    padding: 1px;
    color: #fff;
    border-radius: 4px;
}
</style>

