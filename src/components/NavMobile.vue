<template>
    <!-- Ícones do menu no mobile -->
    <nav class="nav justify-content-evenly w-75">
        <!-- Ícone 1 - Início -->
        <a href="#" class="nav-link text-center">
            <i class="fa-solid fa-table-cells-large"></i>
        </a>

        <!-- Ícone 2 - Chats -->
        <a href="#" class="nav-link text-center">
            <i class="fa-regular fa-comments"></i>
        </a>

        <!-- Ícone 3 - Kanban -->
        <a href="#" class="nav-link text-center">
            <i class="fa-solid fa-bars-staggered"></i>
        </a>
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