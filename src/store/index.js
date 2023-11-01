import { createStore } from 'vuex'

import { v4 as uuidv4 } from 'uuid'

export default createStore({
  state: {
    todos: [
      { id: '1', text: 'Recolectar las gemas del infinito', completed: false },
      { id: '2', text: 'Gema de alma', completed: true },
      { id: '3', text: 'Gema del poder', completed: true },
      { id: '4', text: 'Gema realidad', completed: false },
      { id: '5', text: 'Conseguir nuevos secuaces competentes', completed: false }
    ]
  },
  getters: {
    pendingTodos( state, getters, /*rootState*/ ){
      return state.todos.filter( todo => !todo.completed )
    },
    allTodos( state, getters, /*rootState*/ ){
      return [...state.todos] //Asi evitamos mutaciones indeseadas
    },
    completedTodos( state, getters, /*rootState*/ ){
      return state.todos.filter( todo => todo.completed )
    },
    getTodosByTab( _, getters ){ //Este es un getter como funcion (retorna una funcion)
      return (tab) => {
        switch (tab) {
          case 'all' : return getters.allTodos
          case 'pending' : return getters.pendingTodos
          case 'completed' : return getters.completedTodos
        }
      }
    }
  },
  mutations: {
    toggleTodo( state, id ){
      const todoIdx = state.todos.findIndex( todo => todo.id === id )
      if( todoIdx >= 0) {
        state.todos[todoIdx].completed = !state.todos[todoIdx].completed
      }
    },
    createTodo( state, text = '' ){

      if(text.length <= 1) return

      state.todos.push({
        id: uuidv4(),
        completed: false,
        text
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
