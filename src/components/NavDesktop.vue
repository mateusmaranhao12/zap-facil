<template>
    <!-- Logo -->
    <div class="mb-4">
        <img src="../assets/imgs/img-zap-facil.png" alt="Logo" class="img-fluid logo"
            style="width: 50px; cursor: pointer;" />
    </div>

    <!-- Ícones do menu no desktop -->
    <nav class="nav flex-column text-center nav-aside">
        <!-- Ícone 1 - Início -->
        <router-link to="/" class="nav-link p-3">
            <i class="fa-solid fa-table-cells-large"></i>
            <span class="custom-tooltip">Início</span>
        </router-link>

        <!-- Ícone 2 - Chats -->
        <router-link to="/menu-usuario/conversas" class="nav-link p-3">
            <i class="fa-regular fa-comments"></i>
            <span class="custom-tooltip">Chats</span>
        </router-link>

        <!-- Ícone 3 - Kanban -->
        <router-link to="/menu-usuario/kanban" class="nav-link p-3">
            <i class="fa-solid fa-bars-staggered"></i>
            <span class="custom-tooltip">Kanban</span>
        </router-link>
    </nav>


    <!-- Espaço flexível para alinhar o avatar ao final -->
    <div class="mt-auto">
        <img src="../assets/imgs/user1.png" alt="Avatar do Usuário"
            class="img-fluid img-usuario rounded-circle border mb-5" />
    </div>
</template>

<script>

export default {

    name: 'nav-desktop',

    components: {
    }

}

</script>