<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMessage">{{errorMessage}}</h5>

  <div v-if="users.length > 0">
    <!-- <UserList :users="users"/> -->
    <UserList :users="users" v-slot="{ user }">
        <h5>{{ user.first_name }} {{ user.last_name }}</h5>
        <span>{{ user.email }}</span>
    </UserList>
  </div>

  <button @click="prevPage">Atras</button>
  <button @click="nextPage">Siguiente</button>
  <span>Pagina {{ currentPage }}</span>

</template>

<script>
// import { ref } from 'vue'
// import axios from 'axios'
import useUsers from '@/composables/useUsers'
import UserList from '@/components/UserList.vue'

export default {
    name: 'Users',
    components: {
        UserList
    },
    // setup(){

    //     const users = ref([])
    //     const isLoading = ref(true)
    //     const currentPage = ref(1)
    //     const errorMessage = ref()

    //     const getUsers = async( page = 1 ) => {

    //         if( page <= 0 ) page = 1

    //         isLoading.value = true

    //         // QueryParams = ?page
    //         const { data } = await axios.get('https://reqres.in/api/users', {
    //             params: {
    //                 page
    //             }
    //         })

    //         if(data.data.length > 0){
    //             users.value = data.data
    //             currentPage.value = page
    //             errorMessage.value = null
    //         }
    //         else if(currentPage.value > 0){
    //             errorMessage.value = 'No hay mas usuarios'
    //         }
    //         isLoading.value = false
    //     }

    //     getUsers(1) //Esta funcion puede ser llamada una vez fue definida. Este comportamiento es así por que implicitamente setup() ejecuta por defecto hooks

    //     return {
    //         currentPage,
    //         currentPage,
    //         errorMessage,
    //         isLoading,
    //         users,

    //         nextPage: () => getUsers( currentPage.value + 1 ),
    //         prevPage: () => getUsers( currentPage.value - 1 )
    //     }

    // }

    setup() {

        //Composable
        const { isLoading, errorMessage, users, currentPage, prevPage, nextPage } = useUsers()
        
        return {
            isLoading, 
            errorMessage, 
            users, 
            currentPage, 
            prevPage, 
            nextPage
        }
    }
}
</script>

<style scoped>

h2{
    text-align: center;
    width: 100;
}

div{
    display: flex;
    justify-content: center;
    text-align: center;
}

ul{
    width: 250px;
}

</style>