<template>
    <div class="container-fluid">
        <div class="row g-0">

            <!-- Navbar para Mobile -->
            <nav class="navbar bg-light d-md-none fixed-top border-bottom justify-content-between px-3">
                <!-- Ícones e Foto do Usuário -->
                <menu-aside />
            </nav>

            <!-- Sidebar para Desktop -->
            <aside class="nav-aside d-none d-md-flex">
                <menu-aside />
            </aside>

            <!-- Conteúdo Principal -->
            <div class="col-md-11 conteudo-principal">
                <div class="row d-flex align-items-center justify-content-between flex-wrap">

                    <!-- Conteúdo Time e Ver Todos -->
                    <Navbar1 />

                    <!--Atendimento-->
                    <Navbar2 />

                    <!--Navs e Tabs-->
                    <Navbar3 />

                    <!--Mensagens-->
                    <div class="row mt-5 mb-2">
                        <!-- Mensagens -->
                        <aside class="mensagens col-md-4">
                            <div class="mensagens-container">
                                <mensagens />
                            </div>
                        </aside>

                        <!-- Chat -->
                        <div class="chat-container col-md-8">
                            <div class="chat">
                                <Chat />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Chat from '@/components/Chat.vue'
import Mensagens from '@/components/Mensagens.vue'
import MenuAside from '@/components/MenuAside.vue'
import Navbar1 from '@/components/Navbar1.vue'
import Navbar2 from '@/components/Navbar2.vue'
import Navbar3 from '@/components/Navbar3.vue'

export default {

    name: 'menu-usuario',

    components: {
        Chat,
        MenuAside,
        Mensagens,
        Navbar1,
        Navbar2,
        Navbar3
    }

}

</script>

<style lang="scss">
@import '../scss/menu.scss';
</style>