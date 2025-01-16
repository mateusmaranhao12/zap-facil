<template>
    <div class="secao-login row vh-100 gx-0">
        <!-- Coluna do formulário -->
        <div class="col-md-6 d-flex align-items-center justify-content-center bg-light">
            <div class="container text-center formulario">
                <img src="../assets/imgs/img-zap-facil.png" alt="ZapFácil" class="mb-4 img-fluid logo">
                <h1 class="fw-bold">Seja bem-vindo!</h1>
                <p class="text-muted mb-5">Por favor, insira seus dados.</p>
                <form>
                    <div class="mb-3">
                        
                        <div class="d-flex justify-content-start">
                            <label for="email" class="form-label">Email</label>
                        </div>
                        <input type="email" class="form-control" id="email" placeholder="Digite aqui" />
                    </div>
                    <div class="mb-3">
                        <div class="d-flex justify-content-start">
                            <label for="password" class="form-label">Senha</label>
                        </div>
                        <input type="password" class="form-control" id="password" placeholder="********" />
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <input type="checkbox" id="remember" class="me-2 form-check-input" />
                            <label for="remember" class="form-label">Lembrar senha</label>
                        </div>
                        <a href="#" class="texto-roxo text-decoration-none">Esqueci a senha</a>
                    </div>
                    <button type="submit" class="btn-roxo w-100">Entrar</button>
                </form>
                <p class="mt-4">
                    Não tem conta? <a href="#" class="texto-roxo text-decoration-none">Cadastre-se</a>
                </p>
            </div>
        </div>
        <!-- Coluna da imagem -->
        <div class="col-md-6 d-none d-md-block">
            <img src="../assets/imgs/img-login.jpg" alt="Atendimento" class="img-fluid vh-100 w-100 object-fit-cover">
        </div>
    </div>
</template>

<script>

export default {

    name: 'LoginUsuario',

    components: {
    }

}

</script>

<style lang="scss">
@import '../scss/login.scss';
</style>