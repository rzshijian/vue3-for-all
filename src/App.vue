
<template>
  <div class="page">
    <div class="header">
<!--    <div :style="name === 'todo' ? {background:'red'} :{background:'lightgray'}"  @click="clickTab('todo')" class="tab">Todo</div>-->

<!--    <div :style="name === 'basic' ? {background:'red'} :{background:'lightgray'}"  @click="clickTab('basic')" class="tab">Basic</div>-->
      <router-link v-for="route in routes" :to="route.path" :key="route.name"
                   :style="route.name === activeRoute.name ? {background:'red'} :{background:'lightgray'}"
                   class="tab"
      >{{route.name }}</router-link>
    </div>
    <div class="content">
      <RouterView/>
<!--      <TodoList v-if="name ==='todo'"/>-->
<!--      <Basic v-if="name==='basic'"/>-->
    </div>
  </div>
</template>

<script setup>
import TodoList from "@/components/TodoList.vue";
import Basic from "@/components/Basic.vue";
import {  ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const activeRoute = useRoute()
const router = useRouter()
const routes = router.getRoutes()


console.log(routes)

const  name = ref('todo')
const clickTab = (str) =>{
   name.value = str
  //console.log(name.value)
}

</script>
<style scoped>
.page{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
}
.header {
  background: lightgray;
  border-bottom: gray 1px solid;
  height: 50px;
  display: flex;
  align-items: center;
}
.tab{
  max-width: 70px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
.content {
  flex: 1;
}
</style>






