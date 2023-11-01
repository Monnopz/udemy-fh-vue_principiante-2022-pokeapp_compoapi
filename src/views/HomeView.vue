<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h3>{{ironman}}</h3>
    <h3>{{hulk}}</h3>

    <button @click="changeIronman">Cambiar Ironman</button>
    <button @click="changeHulk">Cambiar Hulk</button>

  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'HomeView',
  setup() {

    // Reactive vs Ref
    // Reactive solo funciona con objetos, no funciona con primitivos[no son un objeto, no tienen metodos y los proporciona el lenguaje] (String, por ejemplo)

    const ironman = ref({ name: 'Tony', age: 50 })
    const hulk = reactive({ name: 'Bruce', age: 50 })

    return{
      ironman,
      hulk,

      changeIronman: () => {
        ironman.value.name = 'Tony Stark'
        ironman.value.age = 55
      },
      changeHulk: () => {
        hulk.name = 'Bruce Banner'
        hulk.age = 55
      }
    }

  }
}
</script>
