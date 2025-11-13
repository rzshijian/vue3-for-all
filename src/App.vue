
<template>
  <div class="page">
    <div class="header">
    <div :style="name === 'todo' ? {background:'red'} :{background:'lightgray'}"  @click="clickTab('todo')" class="tab">Todo</div>

    <div :style="name === 'basic' ? {background:'red'} :{background:'lightgray'}"  @click="clickTab('basic')" class="tab">Basic</div>
    </div>
    <div class="content">
      <TodoList v-if="name ==='todo'"/>
      <Basic v-if="name==='basic'"/>
    </div>
  </div>
</template>

<script setup>
import TodoList from "@/components/TodoList.vue";
import Basic from "@/components/Basic.vue";
import { createApp, ref } from 'vue'

const app = createApp()

app.mount('#app')
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
}
.content {
  flex: 1;
}
</style>






