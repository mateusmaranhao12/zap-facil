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
    </nav>

    <!-- Foto do Usuário -->
    <img src="../assets/imgs/user1.png" alt="Avatar do Usuário" class="img-fluid img-usuario rounded-circle border" />
</template>

<script>

export default {

    name: 'nav-mobile',

    components: {
    }

}

</script>