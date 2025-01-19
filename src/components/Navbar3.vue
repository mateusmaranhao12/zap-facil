<template>
    <div class="container">
        <ul class="nav nav-tabs d-flex justify-content-center ms-2 mt-3">
            <li class="nav-item">
                <router-link to="/menu-usuario/conversas" class="nav-link" active-class="active" exact>
                    Chats
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/menu-usuario/ficha-cadastral" class="nav-link" active-class="active">
                    Ficha cadastral
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/menu-usuario/email" class="nav-link" active-class="active">
                    E-mail
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/menu-usuario/sms" class="nav-link" active-class="active">
                    SMS
                </router-link>
            </li>
            <li class="nav-item">
                <a href="" class="nav-link" active-class="active">
                    Fone
                </a>
            </li>
        </ul>
    </div>
</template>
<script>

export default {

    name: 'navbar-3',

    components: {
    }

}

</script>