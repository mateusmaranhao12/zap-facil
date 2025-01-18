<template>
    <div class="atendimento">
        <div class="row">
            <div class="col-md-5">
                <h2 class="ms-5">Atendimento</h2>
                <span class="ms-5">Visualize todos os chats em andamento</span>
            </div>
            <div class="col-md-7 d-flex align-items-center justify-content-end flex-wrap">
                <!-- Botões -->
                <button class="btn-roxo me-3">
                    <i class="fa-solid fa-pause"></i> Pausa
                </button>

                <!-- Input de Pesquisa -->
                <div class="input-container">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" class="form-input" placeholder="Pesquisar..." />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    name: 'navbar-2',

    components: {
    }

}

</script>