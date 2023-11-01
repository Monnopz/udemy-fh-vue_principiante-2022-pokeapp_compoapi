<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button @click="changeTitle">Cambiar titulo</button>
  </div>
</template>

<script>
// Hook: Funcion propia de Vue que es autoejecutada cuando un componente de Vue llega a un determinado proceso
// router-keep-alive: Guarda de manera temporal el estado de un componente que está dentro de un router-view

import {
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
  onServerPrefetch,
} from 'vue'

export default {
  name: 'AboutView',
  setup() {

    const title = ref('About')

    // Lifecycle Hooks
    console.log('Setup se llamó')

    onMounted(()=>{
      console.log('onMounted');
    })

    onUpdated(()=>{
      console.log('onUpdated');
    })

    onUnmounted(()=>{
      console.log('onUnmounted');
    })

    onBeforeMount(()=>{
      console.log('onBeforeMount');
    })

    onBeforeUpdate(()=>{
      console.log('onBeforeUpdate');
    })

    onBeforeUnmount(()=>{
      console.log('onBeforeUnmount');
    })

    onErrorCaptured(()=>{
      console.log('onErrorCaptured');
    })

    onRenderTracked(()=>{
      console.log('onRenderTracked');
    })

    onRenderTriggered(()=>{
      console.log('onRenderTriggered');
    })

    onActivated(()=>{
      console.log('onActivated');
    })

    onDeactivated(()=>{
      console.log('onDeactivated');
    })

    onServerPrefetch(()=>{
      console.log('onServerPrefetch');
    })
    
    return {
      title,
      changeTitle: () => title.value = 'New About'
    }

  },
}
</script>
