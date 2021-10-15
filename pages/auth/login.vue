<template>
    <div class="container py-5">
        <div class="row mb-2 mx-5 my-5">
            <div class="col-md-6 offset-md-3">
                <div class="list-group">
                    <div class="list-group-item list-group-item-action active text-center" aria-current="true">
                        <h5>Login Page</h5>
                    </div>
                    <div class="list-group-item list-group-item-action">
                        <form class="row" @submit.prevent="login">
                            <div v-if="errors">
                                <span class="error_valid"> {{ errors }}</span>
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" v-model="form.email" id="email" required>
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" v-model="form.password" id="password" required>
                            </div>
                            <div class="col-md-12 mb-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck">
                                    <label class="form-check-label mb-2" for="invalidCheck">
                                        Agree to terms and conditions
                                    </label>
                                    <!-- <span class="text-red" v-if="errors.password">{{ errors.password[0] }}</span> -->
                                </div>
                            </div>

                            <div class="col-md-12 mb-3">
                                <button class="btn btn-primary" type="submit">Login</button>
                            </div>

                            <div class="col-md-12">
                                Don't have an account? <nuxt-link to="/auth/register">Register</nuxt-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    layout: 'loginLayout',
    middleware: ["guest"],
    data(){
        return {
            form: {
                email: 'onayemi18@gmail.com',
                password: '#1Lighting@80'
            },
            errors: ''
        }
    },
    mounted() {

    },
    methods: {
        async login() {
            try {
                await this.$auth.loginWith('laravelSanctum', { data:this.form})
                    .then((response) =>{
                        this.$router.push('/admin/dashboard')
                    })
            } catch (e) {
                console.log(e)
                if(e.response.status == 422){
                    this.errors = 'Could not sign you in with those credentials.'
                }
            }
        }
    }
}
</script>

<style scoped>
    .error_valid{
        color: red; font-weight:bold;
    }
</style>