<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{ name: 'counter' }">Counter</router-link> |
    <router-link :to="{ name: 'users' }">Usuarios</router-link> |
    <router-link :to="{ name: 'pokemon-search' }">Buscar</router-link> |
    <router-link :to="{ name: 'todo' }">Todo</router-link> |
    <router-link :to="{ name: 'slots' }">Slots</router-link>
  </nav>

  <!-- router-keep-alive: Guarda de manera temporal el estado de un componente que está dentro de un router-view -->
  <router-view v-slot="{ Component, route }">
      <!-- Este componente es el componente que se incrusta basado en la ruta -->
      <keep-alive>
        <component :is="Component" :key="route.name" />
      </keep-alive>
  </router-view>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
