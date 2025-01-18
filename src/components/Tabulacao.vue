<template>
    <div v-if="mostrarTabulacaoMenu" class="tabulacao-menu">
        <div class="tabulacao-header">
            <div class="d-flex align-items-center justify-content-between">
                <h5>Adicionar tabulação</h5>
                <button class="btn-close" @click="fecharTabulacaoMenu">&times;</button>
            </div>

            <p>Preencha os campos abaixo</p>
        </div>
        <div class="tabulacao-body">
            <div class="tabulacao-campo" v-for="(campo, index) in campos" :key="index">
                <label :for="'campo' + (index + 1)">Campo {{ index + 1 }}</label>
                <select :id="'campo' + (index + 1)" class="form-select" aria-label="Default select example">
                    <option selected>Selecionar</option>
                    <option value="1">Opção 1</option>
                    <option value="2">Opção 2</option>
                    <option value="3">Opção 3</option>
                </select>
            </div>
        </div>
        <div class="tabulacao-footer">
            <button class="btn-salvar-tabulacao">Salvar</button>
        </div>
    </div>
</template>

<script>
export default {

    name: 'menu-tabulacao',

    props: {
        mostrarTabulacaoMenu: {
            type: Boolean,
            required: true,
        },
        campos: {
            type: Array,
            required: true,
        },
    },

    methods: {
        fecharTabulacaoMenu() {
            this.$emit('fechar-menu');
        },
    },

}
</script>