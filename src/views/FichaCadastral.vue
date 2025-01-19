<template>
    <Navbar3 />

    <!--Formulario-->
    <form-ficha-cadastral />

</template>

<script>

import FormFichaCadastral from '@/components/FormFichaCadastral.vue';
import Navbar3 from '@/components/Navbar3.vue'
export default {

    name: 'ficha-cadastral',

    components: {
        FormFichaCadastral,
        Navbar3
    }

}

</script>