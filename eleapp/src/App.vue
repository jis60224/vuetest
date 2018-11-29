<template>
  <div id="app">
    <router-view></router-view>

    <Tabs></Tabs>

  </div>
</template>

<script>
import Tabs from "./common/Tabs.vue";

export default {
 components:{
   Tabs
   
 }
}
</script>

<style>

</style>
