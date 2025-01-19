<template>
    <div class="ficha-cadastral-container">

        <!-- Botões Salvar Contato -->
        <div class="d-flex justify-content-between align-items-center mt-4">
            <button class="btn-salvar-contato"><i class="fa-solid fa-floppy-disk"></i> Salvar contato</button>
            <div>
                <button class="btn-cancelar me-2">Cancelar</button>
                <button class="btn-salvar">Salvar</button>
            </div>
        </div>

        <!-- Formulário Principal -->
        <form class="mt-4">
            <!-- Linha 1 -->
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="protocolo">Protocolo</label>
                    <div class="input-group">
                        <input type="text" id="protocolo" class="form-control" value="2024024161418716" readonly>
                        <button class="btn btn-outline-secondary">
                            <i class="fa-solid fa-copy"></i>
                        </button>
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="cep">CEP *</label>
                    <input type="text" id="cep" class="form-control" placeholder="CEP">
                </div>
            </div>

            <!-- Linha 2 -->
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="nome">Nome</label>
                    <input type="text" id="nome" class="form-control" value="Oliva">
                </div>
                <div class="col-md-3">
                    <label for="cidade">Cidade</label>
                    <input type="text" id="cidade" class="form-control" placeholder="Cidade">
                </div>
                <div class="col-md-3">
                    <label for="estado">Estado</label>
                    <select id="estado" class="form-select">
                        <option selected>Estado</option>
                        <option value="SP">São Paulo</option>
                        <option value="RJ">Rio de Janeiro</option>
                    </select>
                </div>
            </div>

            <!-- Linha 3 -->
            <div class="row mb-3">
                <div class="col-md-3">
                    <label for="telefone1">Telefone 1</label>
                    <div class="input-group">
                        <input type="text" id="telefone1" class="form-control" value="(91) 99840-0124">
                        <button class="btn btn-outline-secondary">
                            <i class="fa-solid fa-phone"></i>
                        </button>
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="telefone2">Telefone 2</label>
                    <div class="input-group">
                        <input type="text" id="telefone2" class="form-control" value="(91) 99840-0124">
                        <button class="btn btn-outline-secondary">
                            <i class="fa-solid fa-phone"></i>
                        </button>
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="endereco">Endereço</label>
                    <input type="text" id="endereco" class="form-control" placeholder="Endereço">
                </div>
                <div class="col-md-3">
                    <label for="bairro">Bairro</label>
                    <input type="text" id="bairro" class="form-control" placeholder="Bairro">
                </div>
            </div>

            <!-- Linha 5 -->
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" class="form-control" placeholder="E-mail">
                </div>
                <div class="col-md-6">
                    <label for="complemento">Complemento</label>
                    <input type="text" id="complemento" class="form-control" placeholder="Complemento">
                </div>
            </div>
        </form>
    </div>

    <div class="informacoes-container mt-4">
        <!-- Email Address -->
        <div class="mb-4">
            <label for="email-address" class="form-label">Email address</label>
            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-envelope"></i></span>
                <input type="email" id="email-address" class="form-control" value="olivia@untitledui.com" readonly>
            </div>
        </div>

        <!-- Informações Adicionais -->
        <div class="mb-4">
            <h6 class="mb-3 mt-5">Informações adicionais</h6>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="ntc">NTC</label>
                    <div class="input-group">
                        <input type="text" id="ntc" class="form-control" value="03447029609">
                        <button class="btn btn-outline-secondary"><i class="fa-solid fa-copy"></i></button>
                        <button class="btn btn-outline-secondary"><i class="fa-solid fa-pen"></i></button>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="cluster">Cluster</label>
                    <div class="input-group">
                        <input type="text" id="cluster" class="form-control" value="03447029609">
                        <button class="btn btn-outline-secondary"><i class="fa-solid fa-copy"></i></button>
                        <button class="btn btn-outline-secondary"><i class="fa-solid fa-pen"></i></button>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="dt-mailing">DT Mailing</label>
                    <div class="input-group">
                        <input type="text" id="dt-mailing" class="form-control" placeholder="">
                        <button class="btn btn-outline-secondary"><i class="fa-solid fa-copy"></i></button>
                        <button class="btn btn-outline-secondary"><i class="fa-solid fa-pen"></i></button>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="nm-mailing">NM Mailing</label>
                    <div class="input-group">
                        <input type="text" id="nm-mailing" class="form-control" placeholder="">
                        <button class="btn btn-outline-secondary"><i class="fa-solid fa-copy"></i></button>
                        <button class="btn btn-outline-secondary"><i class="fa-solid fa-pen"></i></button>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="faixa">Faixa</label>
                    <div class="input-group">
                        <input type="text" id="faixa" class="form-control" value="1000">
                        <button class="btn btn-outline-secondary"><i class="fa-solid fa-copy"></i></button>
                        <button class="btn btn-outline-secondary"><i class="fa-solid fa-pen"></i></button>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="numero">Número</label>
                    <div class="input-group">
                        <input type="text" id="numero" class="form-control" placeholder="">
                        <button class="btn btn-outline-secondary"><i class="fa-solid fa-copy"></i></button>
                        <button class="btn btn-outline-secondary"><i class="fa-solid fa-pen"></i></button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Notas Adicionais -->
        <div class="mb-4">
            <h6>Notas adicionais</h6>
            <div class="form-group">
                <div class="d-flex align-items-center mb-2">
                    <select class="form-select w-auto me-3">
                        <option selected>Regular</option>
                        <option value="important">Importante</option>
                        <option value="urgent">Urgente</option>
                    </select>
                    <button class="btn-notas"><i class="fa-solid fa-bold"></i></button>
                    <button class="btn-notas"><i class="fa-solid fa-italic"></i></button>
                    <button class="btn-notas"><i class="fa-solid fa-list"></i></button>
                    <button class="btn-notas"><i class="fa-solid fa-link"></i></button>
                </div>
                <textarea class="form-control" rows="4" maxlength="275"
                    placeholder="Anotações gerais sobre o cliente a serem inseridas bem aqui pelo agente responsável.">Anotações gerais sobre o cliente a serem inseridas bem aqui pelo agente responsável.
        </textarea>
                <div class="text-end mt-2">
                    <small>275 caracteres</small>
                </div>
            </div>
        </div>

        <!-- Botões Salvar no Fim -->
        <div class="d-flex justify-content-end">
            <button class="btn-cancelar me-2">Cancelar</button>
            <button class="btn-salvar">Salvar</button>
        </div>
    </div>
</template>

<script>

export default {

    name: 'form-ficha-cadastral',

    components: {
    }

}

</script>