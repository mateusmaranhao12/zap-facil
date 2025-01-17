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
                <div class="row d-flex align-items-center justify-content-between flex-wrap">

                    <!-- Conteúdo Time e Ver Todos -->
                    <Navbar1 />

                    <!--Atendimento-->
                    <Navbar2 />

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MenuAside from '@/components/MenuAside.vue'
import Navbar1 from '@/components/Navbar1.vue'
import Navbar2 from '@/components/Navbar2.vue';

export default {

    name: 'menu-usuario',

    components: {
        MenuAside,
        Navbar1,
        Navbar2
    }

}

</script>

<style lang="scss">
@import '../scss/menu.scss';
</style>