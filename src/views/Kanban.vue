<template>
    <!-- Botao de filtro -->
    <div class="d-flex justify-content-end">
        <button @click="toggleFiltro()" class="btn-filtro"><i class="fa-solid fa-filter"></i> Filtro</button>
    </div>

    <!-- Aba de Filtro -->
    <div class="filtro-container">
        <Filtro :mostrar="mostrarFiltro" :filtros-inicial="filtros" @fechar-filtro="toggleFiltro"
            @aplicar-filtros="aplicarFiltros" />
    </div>

    <!-- Kanban -->
    <div class="kanban-container">
        <div v-for="(coluna, index) in colunas" :key="index" class="kanban-column">
            <div class="kanban-column-header">
                <h5>{{ coluna.titulo }} <span>({{ coluna.itens.length }})</span></h5>
                <p :style="{ color: coluna.cor }">{{ coluna.totalLabel }}: {{ coluna.total }}</p>
            </div>
            <div class="kanban-items">
                <div v-for="(item, idx) in coluna.itens" :key="idx" class="kanban-item">
                    <h6>{{ item.nome }}</h6>
                    <p>Endereço: {{ item.endereco }}</p>
                    <p>E-mail: {{ item.email }}</p>
                    <p>Valor da peça: {{ item.valor }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Filtro from '@/components/FIltro.vue'

export default {

    name: 'kanban-usuario',

    components: {
        Filtro
    },

    data() {
        return {

            mostrarFiltro: false,
            filtros: {
                nome: '',
                email: '',
                preco: '',
                valor: '',
            },

            colunas: [
                {
                    titulo: 'Em contato',
                    totalLabel: 'Total em negociação',
                    total: 'R$240.005,20',
                    cor: 'red',
                    itens: [
                        { nome: 'Item nome #1234', endereco: 'Rua Mauri Afonso Sva', email: 'luana@email.com.br', valor: 'R$2.550,00' },
                        { nome: 'Item nome #1234', endereco: 'Rua Mauri Afonso Sva', email: 'luana@email.com.br', valor: 'R$2.550,00' },
                        { nome: 'Item nome #1234', endereco: 'Rua Mauri Afonso Sva', email: 'luana@email.com.br', valor: 'R$2.550,00' },
                    ],
                },
                {
                    titulo: 'Convertidos',
                    totalLabel: 'Total em conversão',
                    total: 'R$240.005,20',
                    cor: 'green',
                    itens: [
                        { nome: 'Item nome #1234', endereco: 'Rua Mauri Afonso Sva', email: 'luana@email.com.br', valor: 'R$2.550,00' },
                        { nome: 'Item nome #1234', endereco: 'Rua Mauri Afonso Sva', email: 'luana@email.com.br', valor: 'R$2.550,00' },
                        { nome: 'Item nome #1234', endereco: 'Rua Mauri Afonso Sva', email: 'luana@email.com.br', valor: 'R$2.550,00' },
                    ],
                },
                {
                    titulo: 'Perdidos',
                    totalLabel: 'Total em perdidos',
                    total: 'R$240.005,20',
                    cor: 'red',
                    itens: [
                        { nome: 'Item nome #1234', endereco: 'Rua Mauri Afonso Sva', email: 'luana@email.com.br', valor: 'R$2.550,00' },
                        { nome: 'Item nome #1234', endereco: 'Rua Mauri Afonso Sva', email: 'luana@email.com.br', valor: 'R$2.550,00' },
                        { nome: 'Item nome #1234', endereco: 'Rua Mauri Afonso Sva', email: 'luana@email.com.br', valor: 'R$2.550,00' },
                    ],
                },
                {
                    titulo: 'Recuperação',
                    totalLabel: 'Total em recuperação',
                    total: 'R$240.005,20',
                    cor: 'blue',
                    itens: [
                        { nome: 'Item nome #1234', endereco: 'Rua Mauri Afonso Sva', email: 'luana@email.com.br', valor: 'R$2.550,00' },
                        { nome: 'Item nome #1234', endereco: 'Rua Mauri Afonso Sva', email: 'luana@email.com.br', valor: 'R$2.550,00' },
                        { nome: 'Item nome #1234', endereco: 'Rua Mauri Afonso Sva', email: 'luana@email.com.br', valor: 'R$2.550,00' },
                    ],
                },
                {
                    titulo: 'Aquecimento',
                    totalLabel: 'Total em aquecimento',
                    total: 'R$240.005,20',
                    cor: 'orange',
                    itens: [
                        { nome: 'Item nome #1234', endereco: 'Rua Mauri Afonso Sva', email: 'luana@email.com.br', valor: 'R$2.550,00' },
                        { nome: 'Item nome #1234', endereco: 'Rua Mauri Afonso Sva', email: 'luana@email.com.br', valor: 'R$2.550,00' },
                        { nome: 'Item nome #1234', endereco: 'Rua Mauri Afonso Sva', email: 'luana@email.com.br', valor: 'R$2.550,00' },
                    ],
                },
            ],
        }
    },

    methods: {

        toggleFiltro() {
            this.mostrarFiltro = !this.mostrarFiltro
        },

        aplicarFiltros(filtros) {
            console.log('filtros aplicados', filtros)
        },

        limparFiltros() {

            this.filtros = {
                nome: '',
                email: '',
                preco: '',
                valor: '',
            }

        },
    },
}
</script>

<style lang="scss">
@import '../scss/menu.scss';
@import '../scss/kanban.scss';
</style>