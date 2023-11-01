// Composable: Funcion que regresa objetos reactivos, estados, metodos, etc. Sirve para reutilizar codigo
// Como nomenclatura de un archivo composable, se antepone la palabra "use". Ejemplo "useCounter.js"

import { ref } from 'vue'

const useCounter = ( initialValue = 5 ) => {

    // El ref() puede verse como una envoltura de caramelo que envuelve al caramelo. Si quiero el caramelo simplemente tengo que abrir la envoltura (.value)
    const counter = ref(initialValue) // Variable reactiva; se construye otrogandole un valor inicial y retorna un objeto reactivo y mutable que tendrá una unica propiedad (value) que es la que modificará la propiedad del objeto

    // Si el contenido (por ejemplo variables o en este caso funciones) no se utilizará en el setup y solamente se utiliza en las plantillas de Vue, se se pueden ubicar directamente sus definiciones en el return que expone los elementos
    // const increase = () => counter.value++
    // const decrease = () => counter.value--
    
    return {
        counter,
        // increase,
        // decrease
        decrease: () => counter.value--, // Esto se puede realizar debido a que no ocupo modificar la funcion directamente en el setup y solo es necesario exponerlas en las plantillas de Vue
        increase: () => counter.value++, // Esto se puede realizar debido a que no ocupo modificar la funcion directamente en el setup y solo es necesario exponerlas en las plantillas de Vue
    }

}

export default useCounter