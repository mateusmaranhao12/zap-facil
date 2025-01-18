<template>
    <div v-if="mostrarAbaTelefone" class="telefone-aba">
        <div class="telefone-header">
            <h5>Softphone</h5>
            <button class="btn-close" @click="toggleAbaTelefone">&times;</button>
        </div>
        <div class="telefone-body">
            <input type="text" class="telefone-display" v-model="numero" readonly />
            <div class="teclado">
                <button v-for="tecla in teclas" :key="tecla" @click="adicionarNumero(tecla)">
                    {{ tecla }}
                </button>
            </div>
        </div>
        <div class="telefone-footer">
            <button class="btn-apagar" @click="apagarNumero">Apagar</button>
            <button class="btn-chamar">Chamar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'softphone-menu',

    props: {
        mostrarAbaTelefone: {
            type: Boolean,
            required: true,
        },
    },

    data() {
        return {
            numero: '',
            teclas: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'],
        }
    },

    methods: {
        toggleAbaTelefone() {
            this.$emit('fechar-aba-telefone')
        },
        adicionarNumero(tecla) {
            this.numero += tecla
        },
        apagarNumero() {
            this.numero = this.numero.slice(0, -1)
        },
    },
}

</script>