<template>
  <h1>Buscar Pokemon: {{ pokemonId }}</h1>
  <form @submit.prevent="onSubmit">
    <input type="number" placeholder="Numero del pokemon" ref="txtSearchId" v-model="pokemonId">
  </form>
  <br>
  <span>Presione enter para buscar</span>
</template>

<script>
import { ref, onActivated } from 'vue'

import { useRouter } from 'vue-router'

export default {
    name: 'SearchPokemon',
    setup() {
        //Aqui no hay acceso al this

        const router = useRouter() //Se utiliza todo el objeto router

        const pokemonId = ref(1)
        const txtSearchId = ref() //Ayuda a mantener la referencia del objeto/input aunque se salga del componente

        onActivated(() => {
            txtSearchId.value.select() //pone el foco en el input y selecciona todo el texto
        })

        return {
            pokemonId,
            txtSearchId,

            onSubmit: () => {
                router.push({ name: 'pokemon-id', params: {id: pokemonId.value} })
            }
        }

    }
}
</script>

<style>

</style>