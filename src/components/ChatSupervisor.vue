<template>
    <div class="chat-supervisor">
        <div class="chat-supervisor-header">
            <div class="d-flex align-items-center justify-content-between">
                <div>
                    <h5>{{ supervisor.nome }}</h5>
                    <span class="user-status text-success">Online</span>
                </div>
                <button class="btn-close" @click="$emit('fechar-chat')">&times;</button>
            </div>
            <small>Supervisor</small>
        </div>
        <div class="chat-supervisor-body">
            <div class="message" :class="{ received: !message.sent, sent: message.sent }" v-for="message in messages"
                :key="message.id">

                <!-- Container para avatar e nome -->
                <div class="message-header" v-if="!message.sent">
                    <img :src="require(`../assets/imgs/${supervisor.avatar}`)" alt="Avatar" class="message-avatar">
                    <small class="name-user-message">{{ supervisor.nome }}</small>
                </div>

                <!--Mensagem-->
                <p>{{ message.text }}</p>
                <span class="message-time">{{ message.time }}</span>
            </div>
        </div>
        <div class="chat-supervisor-footer">
            <textarea placeholder="Message"></textarea>
            <button><i class="fa-solid fa-paper-plane"></i></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChatSupervisor',
    props: {
        supervisor: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            messages: [
                { id: 1, text: 'Boa tarde.', time: 'Ontem 10:16' },
                { id: 2, text: 'Tudo bem?', time: 'Ontem 10:16' },
                { id: 3, text: 'Está dando tudo certo por aí?', time: 'Ontem 10:18' },
                { id: 4, text: 'Sim. Está tudo perfeito!', time: 'Hoje 2:20', sent: true },
            ],
        }
    },
}
</script>