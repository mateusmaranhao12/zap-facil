<template>
    <div class="secao-login row vh-100 gx-0">
        <!-- Coluna do formulário -->
        <card-login />
        <!-- Coluna da imagem -->
        <div class="col-md-6 d-none d-md-block">
            <img src="../assets/imgs/img-login.jpg" alt="Atendimento" class="img-fluid vh-100 w-100 object-fit-cover">
        </div>
    </div>
</template>

<script>

import CardLogin from '@/components/CardLogin.vue'

export default {

    name: 'LoginUsuario',

    components: {
        CardLogin
    }

}

</script>

<style lang="scss">
@import '../scss/login.scss';
</style>