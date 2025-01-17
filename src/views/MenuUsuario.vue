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
                    <div class="d-flex align-items-center flex-wrap w-100">
                        <!-- Ver Todos -->
                        <div class="ver-todos d-flex align-items-center me-3 flex-wrap">
                            <i class="fa-solid fa-house me-3"></i>
                            <i class="fa-solid fa-arrow-right me-3"></i>
                            <span class="me-3">Chats</span>
                            <i class="fa-solid fa-arrow-right me-3"></i>
                            <span class="me-3">Ver todos</span>
                            <i class="fa-solid fa-arrow-right me-3"></i>
                            <span style="background-color: rgb(248, 248, 248); border-radius: 10px; padding: 10px;">
                                Mateus Maranhão
                            </span>
                        </div>

                        <!-- Time -->
                        <div class="time d-flex align-items-center justify-content-center flex-wrap">
                            <span class="me-3">Ramal: 100001: Livre</span>
                            <span class="me-3">Tempo logado: 0-16:14:43</span>
                            <span class="me-3">Última Chamada: ----------</span>
                            <span class="me-3">Disponível: 00:00:28</span>
                        </div>
                    </div>

                </div>
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