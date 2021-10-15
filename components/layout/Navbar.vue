<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5 fixed-top">
        <div class="container">
            <nuxt-link class="navbar-brand" to="/">
                <img src="~assets/images/logo.png" class="card-img-top logo" alt="remlex logo">
            </nuxt-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse mr-auto" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <nuxt-link class="nav-link active" aria-current="page" to="/admin/dashboard">Dashboard</nuxt-link>
                </div>
                <div class="navbar-nav ms-auto">
                    <template v-if="$auth.loggedIn">
                        <a class="nav-link" href="#">Hi {{ $auth.user.name }},</a>
                        <nuxt-link class="nav-link" to="/about">Manage Account</nuxt-link>
                        <nuxt-link class="nav-link" to="/about">Manage Products</nuxt-link>
                        <nuxt-link class="nav-link" to="/about">Manage Users</nuxt-link>
                        <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
                    </template>
                    <template v-else>
                        <nuxt-link class="nav-link" to="/auth/login">Login</nuxt-link>
                        <nuxt-link class="nav-link" to="/auth/register">Register</nuxt-link>
                    </template>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$auth.logout()
        }
    }
}
</script>

<style scoped>
    .logo {
        width: 45px;
        /* height: 60px; */
    }
</style>