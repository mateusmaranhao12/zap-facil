<template>
    <div class="modal-backdrop">
        <div class="modal-content">
            <div class="modal-header d-flex justify-content-between align-items-center">
                <h5>Histórico <span class="badge bg-light text-muted">{{ this.historico.length }} atendimentos</span>
                </h5>
                <button class="btn-close" @click="$emit('fechar-historico')"></button>
            </div>
            <div class="modal-body">
                <div class="d-flex mb-3">
                    <input type="text" class="form-control" placeholder="Buscar..." v-model="filtroBusca" />
                </div>
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Tabulação</th>
                                <th>Data</th>
                                <th>Resultado</th>
                                <th>Contato</th>
                                <th>Agente</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in historicoFiltrado" :key="index">
                                <td>{{ item.tabulacao }}</td>
                                <td>{{ item.data }}</td>
                                <td>
                                    <span :class="{
                                        'badge bg-success text-white': item.resultado === 'Salvo',
                                        'badge bg-primary text-white': item.resultado === 'Envio de e-mail',
                                    }">
                                        {{ item.resultado }}
                                    </span>
                                </td>
                                <td>
                                    <i :class="{
                                        'fa-solid fa-phone': item.contato === 'Ligação',
                                        'fa-solid fa-envelope': item.contato === 'E-mail',
                                        'fa-brands fa-whatsapp': item.contato === 'Whatsapp',
                                    }"></i>
                                    {{ item.contato }}
                                </td>
                                <td>
                                    {{ item.agente }}
                                    <i class="fa-brands fa-whatsapp text-success ms-2"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'historico-usuario',

    data() {
        return {
            filtroBusca: '',
            historico: [
                { tabulacao: 'Aguarda retorno', data: '19/08/2024', resultado: 'Salvo', contato: 'Ligação', agente: 'Rogério Eduardo' },
                { tabulacao: 'Não aceitou', data: '19/08/2024', resultado: 'Salvo', contato: 'E-mail', agente: 'Rogério Eduardo' },
                { tabulacao: 'Operador não tabulou', data: '19/08/2024', resultado: 'Envio de e-mail', contato: 'E-mail', agente: 'Rogério Eduardo' },
                { tabulacao: 'Modelo ATN 01', data: '19/08/2024', resultado: 'Envio de e-mail', contato: 'E-mail', agente: 'Rogério Eduardo' },
                { tabulacao: 'Testando', data: '19/08/2024', resultado: 'Salvo', contato: 'Whatsapp', agente: 'Rogério Eduardo' },
            ],
        }
    },

    computed: {
        historicoFiltrado() {
            return this.historico.filter((item) =>
                item.tabulacao.toLowerCase().includes(this.filtroBusca.toLowerCase())
            )
        },
    },
};
</script>