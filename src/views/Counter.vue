<template>
  <h1>Couter Vue</h1>
  <h2>{{ counter }}</h2>

  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
</template>

<script>
import useCounter from '@/composables/useCounter'

export default {
    name: 'Counter',
    props: { },
    emits: { },
    setup() { //En Vue3 se sustituyen los optionsAPI (data, methods, watch, computed) y a partir de compositionAPI todo se concentra dentro de setup()

      // // El ref() puede verse como una envoltura de caramelo que envuelve al caramelo. Si quiero el caramelo simplemente tengo que abrir la envoltura (.value)
      // const counter = ref(5) // Variable reactiva; se construye otrogandole un valor inicial y retorna un objeto reactivo y mutable que tendrá una unica propiedad (value) que es la que modificará la propiedad del objeto

      // // Si el contenido (por ejemplo variables o en este caso funciones) no se utilizará en el setup y solamente se utiliza en las plantillas de Vue, se se pueden ubicar directamente sus definiciones en el return que expone los elementos
      // // const increase = () => counter.value++
      // // const decrease = () => counter.value--

      // return { //Todo el contenido que será visible y se expondrá en las plantillas/template de Vue serán contenidas en este objeto
      //   counter,

      //   // increase,
      //   // decrease

      //   decrease: () => counter.value--, // Esto se puede realizar debido a que no ocupo modificar la funcion directamente en el setup y solo es necesario exponerlas en las plantillas de Vue
      //   increase: () => counter.value++, // Esto se puede realizar debido a que no ocupo modificar la funcion directamente en el setup y solo es necesario exponerlas en las plantillas de Vue
      // }

      const { counter, increase, decrease } = useCounter() // Se desestructura el composable

      return { //Todo el contenido que será visible y se expondrá en las plantillas/template de Vue serán contenidas en este objeto
        counter, 
        increase, 
        decrease
      }

    }
}
</script>

<style>

</style>