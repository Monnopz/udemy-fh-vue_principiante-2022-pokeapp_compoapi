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
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'TodoVuex',
    setup(){
      //Dentro del setup() no se pueden acceder a methods, computed como se haría en OptionAPI debido al this

      const store = useStore() // Se utiliza el composable del Store

      const currentTab = ref('all')

      // const all = computed(() => store.getters['allTodos']) //así se utiliza una propiedad computada
      // const completed = computed(() => store.getters['completedTodos'])

      return {
        currentTab,

        all: computed(() => store.getters['allTodos']),
        completed: computed(() => store.getters['completedTodos']),
        pending: computed(() => store.getters['pendingTodos']),

        // Este getter se actualiza si su valor original en el state cambia o si el currentTab cambia
        getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)), //Es una funcion getter, por eso se ponen los parentesis

        // Este es un method
        toggleTodo: ( id ) => store.commit('toggleTodo', id)
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