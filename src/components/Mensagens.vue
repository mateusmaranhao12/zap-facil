<template>

    <div class="container">
        <div class="row align-items-center">
            <!-- Mensagens e Número -->
            <div class="col d-flex align-items-center">
                <h3 class="me-2">Mensagens</h3>
                <small>{{ this.MensagensNaoLidas }} não lidas</small>
            </div>

            <!-- Botão de Edição -->
            <div class="col-auto">
                <button class="btn-editar">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
            </div>
            <div class="col-md-12">
                <!-- Input de Pesquisa -->
                <div class="input-mensagens mt-4">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" class="form-input" placeholder="Pesquisar..." />
                </div>
            </div>

            <!-- Lista de Cards com v-for -->
            <div v-for="(message, index) in messages" :key="index" class="card-mensagem mt-4">
                <div class="d-flex align-items-start">
                    <!--Mensagem nao lida-->
                    <div v-if="!message.lida" class="nao-lida"></div>

                    <!-- Avatar -->
                    <img :src="require(`../assets/imgs/${message.avatar}`)" alt="Avatar" class="avatar img-fluid" />
                    <div class="ms-3">
                        <!-- Nome e Telefone -->
                        <div class="d-flex justify-content-between">
                            <h5 class="nome">{{ message.name }}</h5>
                            <span v-if="message.status == 'online'" class="user-status-online">Online</span>
                            <span v-if="message.status == 'offline'" class="user-status-offline">Offline</span>
                            <span class="tempo">{{ message.time }}</span>
                        </div>
                        <p class="telefone">{{ message.phone }}</p>
                        <p class="mensagem">{{ message.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'mensagens-usuario',

    data() {
        return {
            messages: [
                {
                    name: 'Yali Maria',
                    avatar: 'user2.png',
                    time: '5min ago',
                    phone: '(61) 99732-4666',
                    text: 'Oi! Vi o cardápio de vocês e tenho uma perguntinha rápida sobre as encomendas...',
                    status: 'online',
                    lida: false
                },
                {
                    name: 'Lucas Rafael',
                    avatar: 'user3.png',
                    time: '5min ago',
                    phone: '(61) 99732-4666',
                    text: 'Oi! Vi o cardápio de vocês e tenho uma perguntinha rápida sobre as encomendas...',
                    status: 'online',
                    lida: true
                },
                {
                    name: 'Ian Zambanini',
                    avatar: 'user4.png',
                    time: '5min ago',
                    phone: '(61) 99732-4666',
                    text: 'Oi! Vi o cardápio de vocês e tenho uma perguntinha rápida sobre as encomendas...',
                    status: 'offline',
                    lida: false
                },
                {
                    name: 'George Soares',
                    avatar: 'user5.png',
                    time: '5min ago',
                    phone: '(61) 99732-4666',
                    text: 'Oi! Vi o cardápio de vocês e tenho uma perguntinha rápida sobre as encomendas...',
                    status: 'offline',
                    lida: true
                },
                {
                    name: 'João Barroso',
                    avatar: 'user6.png',
                    time: '5min ago',
                    phone: '(61) 99732-4666',
                    text: 'Oi! Vi o cardápio de vocês e tenho uma perguntinha rápida sobre as encomendas...',
                    status: 'offline',
                    lida: false
                },
            ],
        }
    },

    computed: {
        MensagensNaoLidas() {
            // Filtra as mensagens onde `lidas` é `false` e retorna o tamanho do array
            return this.messages.filter(message => !message.lida).length
        },
    },
}
</script>
