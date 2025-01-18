<template>
    <!-- Cabeçalho do Chat -->
    <div class="chat-header d-flex align-items-center justify-content-between">
        <div class="user-info d-flex align-items-center">
            <img src="../assets/imgs/user3.png" alt="Avatar" class="avatar img-fluid">
            <div class="ms-3">
                <h5 class="user-name">Lucas Rafael</h5>
                <span class="user-status text-success">● Online</span>
                <p class="user-phone">(11) 99840-0139</p>
            </div>
        </div>
        <div class="chat-actions d-flex">
            <button class="btn-action"><i class="fa-solid fa-clock"></i> Histórico</button>
            <button @click="toggleTabulacaoMenu" class="btn-action"><i class="fa-solid fa-table-columns"></i>
                Tabulação</button>
            <button @click="toggleSupervisorMenu" class="btn-action"><i class="fa-solid fa-ellipsis"></i></button>
            <button class="btn-supervisor me-3" @click="toggleSupervisorMenu">
                <i class="fa-regular fa-comments"></i> Falar com supervisor
            </button>
        </div>
    </div>

    <!-- Menu Lateral de Supervisor -->
    <MenuSupervisor :mostrar="mostrarSupervisorMenu" :supervisores="supervisores" @fechar-menu="toggleSupervisorMenu"
        @abrir-chat="abrirChatSupervisor" />

    <!-- Aba de Chat do Supervisor -->
    <ChatSupervisor v-if="mostrarChatSupervisor" :supervisor="supervisorSelecionado"
        @fechar-chat="fecharChatSupervisor" />

    <!-- Aba de Tabulação -->
    <Tabulacao :mostrar-tabulacao-menu="mostrarTabulacaoMenu" :campos="campos" @fechar-menu="fecharTabulacaoMenu" />

    <!-- Corpo do Chat -->
    <div class="chat-body">
        <div class="message received">
            <img src="../assets/imgs/user3.png" alt="Avatar" class="avatar">
            <div class="message-content">
                <p>Bom dia! Só pra reforçar minha pergunta de ontem, também queria saber
                    qual o prazo mínimo de antecedência para fazer o pedido. Obrigado!</p>
                <span class="message-time">Hoje 2:20</span>
            </div>
        </div>
        <div class="message sent">
            <div class="message-content">
                <p>Bom dia! Sim, fazemos bolo de aniversário por encomenda e você pode
                    personalizar tanto o sabor quanto a decoração. O prazo mínimo é de 3
                    dias de antecedência, dependendo do tamanho e da complexidade do pedido.
                </p>
                <div class="message-reactions">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-thumbs-up"></i>
                </div>
                <span class="message-time">Agora mesmo</span>
            </div>
        </div>
        <div class="message received">
            <img src="../assets/imgs/user3.png" alt="Avatar" class="avatar">
            <div class="message-content">
                <p>Certo, vou querer um bolo para 20 pessoas, para quarta-feira que vem, eu poderia ir buscar nesse
                    mesmo dia as 17:00?</p>
                <span class="message-time">Agora mesmo</span>
            </div>
        </div>
        <div class="message received">
            <img src="../assets/imgs/user3.png" alt="Avatar" class="avatar">
            <div class="message-content file-message">
                <div class="file-header d-flex align-items-center justify-content-between">
                    <span class="file-sender">Lucas Rafael</span>
                    <span class="message-time">Agora mesmo</span>
                </div>
                <div class="file-content d-flex align-items-center">
                    <i class="fa-solid fa-file-pdf fa-3x text-danger me-3"></i>
                    <div>
                        <p class="file-name">Pedido.PDF</p>
                        <span class="file-size">1.2 MB</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Rodapé do Chat -->
    <div class="chat-footer d-flex align-items-center">
        <img src="../assets/imgs/user1.png" alt="Avatar" class="avatar">
        <textarea class="message-input" placeholder="Digite uma mensagem"></textarea>
        <div class="icones-enviar">
            <i class="fa-regular fa-face-smile fa-2x ms-3"></i>
            <i class="fa-solid fa-microphone fa-2x ms-3"></i>
            <i class="fa-solid fa-ellipsis fa-2x ms-3 dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown"
                aria-expanded="false" style="cursor: pointer;">
            </i>

            <!-- Dropdown do Bootstrap -->
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                <li>
                    <a class="dropdown-item" href="#">
                        <i class="fa-solid fa-paperclip"></i> Enviar documento
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="#">
                        <i class="fa-solid fa-pen"></i> Mensagens formatadas
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="#">
                        <i class="fa-solid fa-arrow-right-arrow-left"></i> Transferência
                    </a>
                </li>
            </ul>
        </div>
        <button class="btn-send"><i class="fa-solid fa-paper-plane"></i> Enviar</button>
    </div>
</template>

<script>
import ChatSupervisor from './ChatSupervisor.vue'
import MenuSupervisor from './MenuSupervisor.vue'
import Tabulacao from './Tabulacao.vue'

export default {

    name: 'chat-usuario',

    components: {
        ChatSupervisor,
        MenuSupervisor,
        Tabulacao
    },

    data() {

        return {
            mostrarSupervisorMenu: false,
            mostrarChatSupervisor: false,

            mostrarTabulacaoMenu: false,
            campos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

            supervisores: [
                { id: 1, nome: 'Yali Maria', iniciais: 'YM', avatar: 'user2.png' },
                { id: 2, nome: 'Enzo Levy', iniciais: 'EL', avatar: 'user7.png' },
                { id: 3, nome: 'Ian Zambanini', iniciais: 'YZ', avatar: 'user4.png' },
            ],
            supervisorSelecionado: null
        }
    },

    methods: {
        //mostrar menu de supervisor
        toggleSupervisorMenu() {
            this.mostrarSupervisorMenu = !this.mostrarSupervisorMenu
        },

        //Abrir chat do supervisor
        abrirChatSupervisor(supervisor) {
            this.supervisorSelecionado = supervisor
            this.mostrarChatSupervisor = true
            this.mostrarSupervisorMenu = false
        },

        //Fechar chat do supervisor
        fecharChatSupervisor() {
            this.mostrarChatSupervisor = false
            this.supervisorSelecionado = null
        },

        //Mostrar menu de tabulação
        toggleTabulacaoMenu() {
            this.mostrarTabulacaoMenu = !this.mostrarTabulacaoMenu
        },

        //Fechar tabulação menu
        fecharTabulacaoMenu() {
            this.mostrarTabulacaoMenu = false
        },
    },

}

</script>