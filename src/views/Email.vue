<template>
    <div class="email-container">
        <div class="row">
            <!-- Histórico de e-mails -->
            <div class="email-historico col-md-6">
                <h5>Histórico de e-mails <span class="badge">{{ this.emails.length }} enviados</span></h5>
                <div class="search-bar">
                    <input type="text" class="form-control" placeholder="Buscar" />
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(email, index) in emails" :key="index">
                            <td>{{ email.titulo }}</td>
                            <td>{{ email.data }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Enviar novo e-mail -->
            <div class="email-novo col-md-6">
                <h5>Enviar novo e-mail</h5>
                <div class="form-group">
                    <label for="enviar-para">Enviar para</label>
                    <input id="enviar-para" type="email" class="form-control" placeholder="email@email.com.br" />
                </div>
                <div class="form-group">
                    <label for="cc">Cc/cópia</label>
                    <input id="cc" type="email" class="form-control" placeholder="email@email.com.br" />
                </div>
                <div class="form-group">
                    <label for="titulo-email">Título do e-mail</label>
                    <input id="titulo-email" type="text" class="form-control" placeholder="Atualização cadastral" />
                </div>
                <div class="form-group">
                    <label for="texto-email">Conteúdo</label>
                    <div class="texto-editor">
                        <select class="form-select">
                            <option>Regular</option>
                            <option>Negrito</option>
                        </select>
                        <textarea id="texto-email" class="form-control" rows="6"
                            placeholder="Escreva seu texto aqui..."></textarea>
                        <small class="char-count">275 caracteres</small>
                    </div>
                </div>
                <div class="d-flex justify-content-end">
                    <button class="btn-enviar">Enviar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'e-mail',
    data() {
        return {
            emails: [
                { titulo: 'E-mail 01', data: '19/08/2024' },
                { titulo: 'E-mail 01', data: '19/08/2024' },
                { titulo: 'E-mail 01', data: '19/08/2024' },
                { titulo: 'E-mail 01', data: '19/08/2024' },
            ],
        };
    },
};
</script>