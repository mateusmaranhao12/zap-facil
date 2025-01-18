<template>
    <div class="menu-container w-100">
        <!--Nav Mobile-->
        <div class="d-flex justify-content-between align-items-center d-md-none">
            <nav-mobile></nav-mobile>
        </div>

        <!-- Menu completo no desktop -->
        <div class="d-none d-md-flex flex-column vh-100">
            <nav-desktop></nav-desktop>
        </div>
    </div>
</template>

<script>
import NavDesktop from './NavDesktop.vue'
import NavMobile from './NavMobile.vue'

export default {

    name: 'menu-aside',

    components: {
        NavMobile,
        NavDesktop
    },

    methods: {

    }

}

</script>