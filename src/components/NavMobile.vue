<template>
    <!-- Ícones do menu no mobile -->
    <nav class="nav justify-content-evenly w-75">
        <!-- Ícone 1 - Início -->
        <router-link to="/" class="nav-link text-center">
            <i class="fa-solid fa-table-cells-large"></i>
        </router-link>

        <!-- Ícone 2 - Chats -->
        <router-link to="/menu-usuario/conversas" class="nav-link text-center">
            <i class="fa-regular fa-comments"></i>
        </router-link>

        <!-- Ícone 3 - Kanban -->
        <router-link to="/menu-usuario/kanban" class="nav-link text-center">
            <i class="fa-solid fa-bars-staggered"></i>
        </router-link>

        <!-- Ícone 4 - Telefone -->
        <a :class="{ active: mostrarAbaTelefone }" class="nav-link p-3" @click="toggleAbaTelefone">
            <i class="fa-solid fa-phone"></i>
        </a>
    </nav>

    <!-- Aba do telefone -->
    <Softphone :mostrarAbaTelefone="mostrarAbaTelefone" @fechar-aba-telefone="toggleAbaTelefone" />

    <!-- Foto do Usuário -->
    <img src="../assets/imgs/user1.png" alt="Avatar do Usuário" class="img-fluid img-usuario rounded-circle border" />
</template>

<script>

import Softphone from './Softphone.vue'
export default {
    name: 'nav-mobile',

    data() {
        return {
            mostrarAbaTelefone: false,
        }
    },

    components: {
        Softphone
    },

    methods: {
        toggleAbaTelefone() {
            this.mostrarAbaTelefone = !this.mostrarAbaTelefone
        },
    },
}

</script>