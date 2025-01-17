<template>
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
</template>

<script>
import Chat from '@/components/Chat.vue'
import Mensagens from '@/components/Mensagens.vue'


export default {

    name: 'conversas-usuario',

    components: {
        Chat,
        Mensagens
    }

}

</script>