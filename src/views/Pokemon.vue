<template>
    <h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
    <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>

    <template v-else>
        <h3>{{ pokemon.name }}</h3>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
        <br>
        <router-link :to="{ name: 'pokemon-search' }">Regresar</router-link>
    </template>

</template>

<script>
import { watch } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import usePokemon from '../composables/usePokemon'

export default {
    name: 'Pokemon',
    setup() {
        //Debido a la implementacion de un keep-alive, entonces el setup no se ejecuta hasta que el componente se destruya o se desmonte
        const route = useRoute()

        const { errorMessage, isLoading, pokemon, searchPokemon } = usePokemon(route.params.id) //Se pasa el id de pokemon a la funcion composable

        //Se debe utilizar un watch para "espiar" el cambio de rutas
        //El watch observa cambios que presente cualquier variable reactiva
        //El watchEffect no se necesita pasar la variable reactiva, es decir, lee las variables reactivas de vue de manera automatica
        watch(() => route.params.id, () => searchPokemon(route.params.id))

        // Es un hook, es decir, un hook del ciclo de vida del router
        onBeforeRouteLeave(() => {

            const answer = window.confirm('¿Está seguro que desea salir?')

            if(!answer) return false // false bloquea la salida

        })

        return {
            errorMessage,
            isLoading,
            pokemon
        }
    }
}
</script>

<style>

</style>