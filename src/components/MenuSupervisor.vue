<template>
    <div v-if="mostrar" class="supervisor-menu">
        <div class="supervisor-header">
            <h5>Falar com supervisor</h5>
            <button class="btn-close" @click="$emit('fechar-menu')">&times;</button>
        </div>
        <div class="supervisor-body">
            <div v-for="supervisor in supervisores" :key="supervisor.id" class="supervisor-item">
                <div class="supervisor-avatar">
                    {{ supervisor.iniciais }}
                </div>
                <div class="supervisor-info">
                    <h6>{{ supervisor.nome }}</h6>
                    <a href="#" class="supervisor-link">Abrir chat <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    name: 'menu-supervisor',

    props: {
        mostrar: {
            type: Boolean,
            required: true,
        },
        supervisores: {
            type: Array,
            required: true,
        },
    },

}

</script>