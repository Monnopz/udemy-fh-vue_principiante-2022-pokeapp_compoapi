<template>
  <h1>Aprendiendo Slots</h1>
  <button @click="openModal">Abrir Modal</button>

  <!-- @click.self="closeModal" funciona porque el click se ejecuta sobre CustomSlots(rootElement) y no sobre Modal(child del rootElement) -->
  <!-- <Modal v-if="isOpen" @on:close="closeModal"> -->
  <Modal @click.self="closeModal" v-if="isOpen" title="Hola mundo" >
    <!-- <h2>Titulo del modal</h2>
    <p>Cupidatat qui veniam anim sit dolor ipsum pariatur commodo eiusmod minim officia aliqua consequat et.</p>
    <button>Salir</button> -->
    <!-- El template es necesario para utilizar Named Slots -->
    <template v-slot:header>
        <h2>Titulo del modal</h2>
    </template>
    <template v-slot:body>
        <p>In esse do est nisi id laborum sunt occaecat.</p>
    </template>
    <!-- Un named slot tambien se puede abreviar anteponiendo # -->
    <template #footer>
        <!-- Este metodo closeModal funciona porque todo el objeto pasa por referencia al template -->
        <button @click="closeModal">Salir</button> 
    </template>
    <!-- slotProps son las propiedades que está exponiendo el slot del Modal.vue -->
    <!-- <template #exposed="slotProps"></template> -->
    <template #exposed="{ newTitle }">
        <h2>{{ newTitle }}</h2>
    </template>
  </Modal>
</template>

<script>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue'

export default {
    name: 'CustomSlots',
    components: {
        Modal
    },
    setup(){

        const isOpen = ref(false)

        return {
            isOpen,

            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false
        }

    }
}
</script>

<style scoped>

</style>