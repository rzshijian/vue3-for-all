<template>
  <div class="todo-list">
    <h1>My todo list</h1>
    <input v-model="newTodo" placeholder="add new todo" @keyup.enter="addTodo">
    <ul>
      <li v-for="(todo,index) in todos" :key="index" class="todo">
        <input type="checkbox" v-model="todo.completed" >
        <span :class="{completed:todo.completed}">{{todo.text}}</span>
        <button @click="removeTodo(index)" style="margin-left: 10px">x</button>
      </li>
    </ul>
  </div>

</template>
<script setup>

import { ref } from 'vue'

const newTodo = ref('')
const todos = ref([])

const addTodo = () =>{
  if(newTodo.value.trim())
  {
    todos.value.push({
      text: newTodo.value,
      completed: false
    })
    newTodo.value = ''
  }
}

const removeTodo = (index) =>{
  todos.value.splice(index,1)
}

/*
return {
  newTodo,
  todos,
  addTodo,
  removeTodo
}
*/

</script>
<style scoped>
.todo-list{
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.todo{
  display: flex;
  justify-content: left;
  align-content: center;
  margin-bottom: 5px;
}
.completed{
  text-decoration: line-through;
}
</style>
