<template>
    <div v-if="mostrar" class="filtro-menu">
        <div class="filtro-header d-flex justify-content-between align-items-center">
            <h5>Filtros</h5>
            <button class="btn-close" @click="$emit('fechar-filtro')"></button>
        </div>
        <div class="filtro-body">
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="filtro-nome">Filtrar por nome</label>
                    <input
                        id="filtro-nome"
                        type="text"
                        class="form-control"
                        placeholder="Digite aqui"
                        v-model="filtros.nome"
                    />
                </div>
                <div class="col-md-6 mb-3">
                    <label for="filtro-email">Filtrar por e-mail</label>
                    <input
                        id="filtro-email"
                        type="email"
                        class="form-control"
                        placeholder="Digite aqui"
                        v-model="filtros.email"
                    />
                </div>
                <div class="col-md-6 mb-3">
                    <label for="filtro-preco">Filtrar por preço</label>
                    <input
                        id="filtro-preco"
                        type="number"
                        class="form-control"
                        placeholder="R$0,00"
                        v-model="filtros.preco"
                    />
                </div>
                <div class="col-md-6 mb-3">
                    <label for="filtro-valor">Filtrar por valor</label>
                    <input
                        id="filtro-valor"
                        type="number"
                        class="form-control"
                        placeholder="R$0,00"
                        v-model="filtros.valor"
                    />
                </div>
            </div>
        </div>
        <div class="filtro-footer d-flex justify-content-end gap-3">
            <button class="btn-limpar" @click="limparFiltros">Limpar filtros</button>
            <button class="btn-aplicar" @click="$emit('aplicar-filtros', filtros)">Aplicar filtros</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'filtro-menu',
    props: {
        mostrar: {
            type: Boolean,
            required: true,
        },

        filtrosInicial: {
            type: Object,
            default: () => ({
                nome: '',
                email: '',
                preco: '',
                valor: '',
            }),
        },
    },

    data() {
        return {
            filtros: { ...this.filtrosInicial },
        }
    },

    methods: {
        limparFiltros() {
            this.filtros = {
                nome: '',
                email: '',
                preco: '',
                valor: '',
            };
        },
    },
}
</script>