<template>
    <div class="container-fluid">
        <div class="row g-0">

            <!-- Navbar para Mobile -->
            <nav class="navbar bg-light d-md-none fixed-top border-bottom justify-content-between px-3">
                <!-- Ícones e Foto do Usuário -->
                <menu-aside />
            </nav>

            <!-- Sidebar para Desktop -->
            <aside
                class="nav-aside d-flex flex-column align-items-start vh-100 p-3 border-end col-md-1 d-none d-md-flex">
                <menu-aside />
            </aside>

            <!-- Conteúdo Principal -->
            <div class="col-md-11">
                <h1>a</h1>
            </div>
        </div>
    </div>
</template>

<script>
import MenuAside from '@/components/MenuAside.vue'

export default {

    name: 'menu-usuario',

    components: {
        MenuAside
    }

}

</script>

<style lang="scss">
@import '../scss/menu.scss';
</style>