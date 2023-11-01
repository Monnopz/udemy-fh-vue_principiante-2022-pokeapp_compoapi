import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {

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
      toggleTodo: ( id ) => store.commit('toggleTodo', id),
      createTodo: ( text ) => store.commit('createTodo', text)
    }

}

export default useTodos