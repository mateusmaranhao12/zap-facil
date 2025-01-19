<template>
    <Navbar3 />
    <div class="sms-container mt-4">
        <div class="row">
            <!-- Histórico de SMS -->
            <div class="col-md-6">
                <h5>Histórico de SMS <span class="badge bg-light text-muted">{{ this.mensagens.length }} enviados</span></h5>
                <div class="d-flex mb-3">
                    <input type="text" class="form-control" placeholder="Buscar..." v-model="filtroBusca" />
                </div>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Número</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(sms, index) in mensagensFiltradas" :key="index">
                            <td>{{ sms.numero }}</td>
                            <td>{{ sms.data }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Enviar novo SMS -->
            <div class="col-md-6">
                <h5>Enviar novo SMS</h5>
                <form @submit.prevent="enviarSms">
                    <div class="mb-3">
                        <label for="enviarPara" class="form-label">Enviar para</label>
                        <input type="text" id="enviarPara" class="form-control" v-model="novoSms.para" />
                    </div>
                    <div class="mb-3">
                        <label for="mensagem" class="form-label">Mensagem</label>
                        <textarea id="mensagem" class="form-control" rows="5" maxlength="275"
                            placeholder="Anotações gerais sobre o cliente a serem inseridas bem aqui pelo agente responsável."
                            v-model="novoSms.mensagem"></textarea>
                        <div class="form-text">{{ 275 - novoSms.mensagem.length }} caracteres restantes</div>
                    </div>
                    
                    <div class="d-flex justify-content-end">
                        <button type="submit" class="btn btn-enviar">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar3 from '@/components/Navbar3.vue';

export default {
    name: 'enviar-sms',

    components: {
        Navbar3
    },

    data() {
        return {
            filtroBusca: '',
            mensagens: [
                { numero: 'João Wellington - (91) 99840-0139', data: '19/08/2024' },
                { numero: 'João Wellington - (91) 99840-0139', data: '19/08/2024' },
                { numero: 'João Wellington - (91) 99840-0139', data: '19/08/2024' },
                { numero: 'João Wellington - (91) 99840-0139', data: '19/08/2024' },
            ],
            novoSms: {
                para: 'João Wellington - (91) 99840-0139',
                mensagem: '',
            },
        };
    },
    computed: {
        mensagensFiltradas() {
            return this.mensagens.filter((sms) =>
                sms.numero.toLowerCase().includes(this.filtroBusca.toLowerCase())
            );
        },
    },
    methods: {
        enviarSms() {
            alert(`Mensagem enviada para: ${this.novoSms.para}`)
            this.novoSms.mensagem = ''
        },
    },
};
</script>