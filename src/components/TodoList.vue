<template>
  <div>
    <h2>Todo List</h2>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add todo" />
    <button @click="addTodo">Add</button>
    <ul>
      <li v-for="(todo, i) in todos" :key="i">
        {{ todo }}
        <button @click="removeTodo(i)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const newTodo = ref('');
const todos = ref([]);

function addTodo() {
  if (newTodo.value.trim()) {
    todos.value.push(newTodo.value.trim());
    newTodo.value = '';
  }
}

function removeTodo(index) {
  todos.value.splice(index, 1);
}
</script>
