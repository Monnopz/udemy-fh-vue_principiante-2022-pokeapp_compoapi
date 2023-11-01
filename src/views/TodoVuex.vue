<template>
  <h1>Lista de tareas de Thanos</h1>
  <!-- <h4>Pendientes: {{$store.state.todos.length}}</h4> -->
  <h4>Pendientes: {{ pending.length }}</h4>

  <hr>
  <button @click="currentTab = 'all'" :class="{'active' : currentTab === 'all'}">Todos</button>
  <button @click="currentTab = 'pending'" :class="{'active' : currentTab === 'pending'}">Pendientes</button>
  <button @click="currentTab = 'completed'" :class="{'active' : currentTab === 'completed'}">Completados</button>
  <div>
    <ul>
      <li @dblclick="toggleTodo(todo.id)" v-for="todo in getTodosByTab" :key="todo.id" :class="{'completed' : todo.completed}">
        {{ todo.text }}
      </li>
    </ul>
  </div>

  <button @click="openModal">Crear Todo</button>

  <!-- Modal.vue -->
  <Modal @click.self="closeModal" v-if="isOpen">
    <template v-slot:header>
      <h1>Crear Todo</h1> 
    </template>
    <template v-slot:body>
      <!-- Se pueden encadenar metodos que se ejcutaran uno tras de otro -->
      <form @submit.prevent="createTodo(newTodoText); closeModal()">
        <input type="text" placeholder="Nueva tarea" v-model="newTodoText" />
        <br>
        <br>
        <button type="submit">Crear</button>
      </form> 
    </template>  
  </Modal>

</template>

<script>
import { ref } from 'vue'

import useTodos from '@/composables/useTodos'
import Modal from '@/components/Modal.vue'

export default {
    name: 'TodoVuex',
    components: {
      Modal
    },
    setup(){

      const { currentTab, all, completed, pending, getTodosByTab, toggleTodo, createTodo } =  useTodos() //Uso del composable useTodos

      const isOpen = ref(false)
      const newTodoText = ref('')

      return { // Se expone contenido que se visualizara/usará en los templates de Vue de arriba
        currentTab, 
        all, 
        completed, 
        pending, 
        getTodosByTab, 
        isOpen,
        newTodoText,

        openModal: () => isOpen.value = true,
        closeModal: () => isOpen.value = false,

        // Mutations Composable
        toggleTodo,
        createTodo,
      }

    }
}
</script>

<style scoped>

div{
  display: flex;
  justify-content: center;
  text-align: center;
}

ul{
  width: 300px;
  text-align: left;
}

li{
  cursor: pointer;
}

.active{
  background-color: #2c3e50;
  color: white;
}

.completed{
  text-decoration: line-through;
}

</style>