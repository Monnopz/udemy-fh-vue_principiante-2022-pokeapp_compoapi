import { ref } from 'vue'

import axios from 'axios'


const usePokemon = (pokemonId = '1') => {

    const pokemon = ref() //por defecto null
    const isLoading = ref(false)
    const errorMessage = ref()

    const searchPokemon = async ( id ) => {

        if( !id ) return

        isLoading.value = true
        pokemon.value = null // si existiera un valor, se purga

        try {
            
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            pokemon.value = data
            errorMessage.value = null

        } catch (error) {
            errorMessage.value = 'No se pudo cargar el pokemon'
        }

        isLoading.value = false

    }

    searchPokemon(pokemonId) // Se define y se ejecuta cuando está llamado en el setup() del componente

    return{
        pokemon,
        isLoading,
        errorMessage,
        searchPokemon
    }

}

export default usePokemon