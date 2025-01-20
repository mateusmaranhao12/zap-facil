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
                                <th>Telefone</th>
                                <th>Protocolo</th>
                                <th>Tabulações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Linhas principais -->
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
                                <td>
                                    {{ item.telefone }}
                                </td>
                                <td>
                                    {{ item.protocolo }}
                                </td>
                                <td>
                                    {{ item.tabDetalhes }}
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
                {
                    id: 1,
                    tabulacao: 'Aguarda retorno',
                    data: '19/08/2024',
                    resultado: 'Salvo',
                    contato: 'Ligação',
                    agente: 'Rogério Eduardo',
                    telefone: '(91) 99840-0139',
                    protocolo: '2031108162704154',
                    tabDetalhes: 'Modelo ATN 05',
                },
                {
                    id: 2,
                    tabulacao: 'Não aceitou',
                    data: '19/08/2024',
                    resultado: 'Salvo',
                    contato: 'E-mail',
                    agente: 'Rogério Eduardo',
                    telefone: '(91) 99840-0139',
                    protocolo: '2031108162704154',
                    tabDetalhes: 'Modelo ATN 05',
                },
                {
                    id: 3,
                    tabulacao: 'Operador não tabulou',
                    data: '19/08/2024',
                    resultado: 'Envio de e-mail',
                    contato: 'E-mail',
                    agente: 'Rogério Eduardo',
                    telefone: '(91) 99840-0139',
                    protocolo: '2031108162704154',
                    tabDetalhes: 'Modelo ATN 05',
                },
                {
                    id: 4,
                    tabulacao: 'Operador não tabulou',
                    data: '19/08/2024',
                    resultado: 'Envio de e-mail',
                    contato: 'E-mail',
                    agente: 'Rogério Eduardo',
                    telefone: '(91) 99840-0139',
                    protocolo: '2031108162704154',
                    tabDetalhes: 'Modelo ATN 05',
                },
                {
                    id: 5,
                    tabulacao: 'Operador não tabulou',
                    data: '19/08/2024',
                    resultado: 'Salvo',
                    contato: 'Whatsapp',
                    agente: 'Rogério Eduardo',
                    telefone: '(91) 99840-0139',
                    protocolo: '2031108162704154',
                    tabDetalhes: 'Modelo ATN 05',
                },
            ],
        }
    },

    computed: {
        historicoFiltrado() {
            // Filtra os itens pelo texto de busca
            return this.historico.filter((item) =>
                item.tabulacao.toLowerCase().includes(this.filtroBusca.toLowerCase())
            )
        },
    },
}
</script>