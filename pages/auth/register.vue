<template>
    <div class="container">        
        <div class="row mb-2 mx-5 my-5">
            <div class="col-md-6 offset-md-3">
                <div class="list-group">
                    <div class="list-group-item list-group-item-action active text-center" aria-current="true">
                        <h5>Register Page</h5>
                    </div>
                    <div class="list-group-item list-group-item-action">
                        <form class="row" @submit.prevent="register">
                            <!-- <div v-if="errors">
                                <span text-red> {{ errors }}</span>
                            </div> -->
                            <div class="col-md-12 mb-2">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" v-model="form.name" id="name" required>
                                <span class="error_valid" v-if="errors.name">{{ errors.name[0] }}</span>
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" v-model="form.email" id="email" required>
                                <span class="error_valid" v-if="errors.email">{{ errors.email[0] }}</span>
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" v-model="form.password" id="password" required>
                                <span class="error_valid" v-if="errors.password">{{ errors.password[0] }}</span>
                            </div>
                            <div class="col-md-12 mb-2">
                            <label for="password" class="form-label">Password Confirmation</label>
                            <input type="password" class="form-control" v-model="form.password_confirmation" id="password" required>
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
                                <button class="btn btn-primary" type="submit">Register</button>
                            </div>

                            <div class="col-md-12">
                                Already have an account? <nuxt-link to="/auth/login">Sign In</nuxt-link>
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
    name: 'register',
    layout: 'loginLayout',
    middleware: ["guest"],
    data(){
        return {
            form: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            errors: [],
        }
    },
    methods: {
        async register() {
            try {
                // let errors = null
                await this.$axios.$get('sanctum/csrf-cookie')  //1
                await this.$axios.$post('/register', this.form) //2
                    // .then((resp) => { this.$router.push('/admin/secure') })
                await this.$auth.loginWith('laravelSanctum', { data:{ email:this.form.email, password:this.form.password }})
                    .then((response) =>{
                    this.$router.push('/admin/secure')
                })                
                // this.$router.push('/admin/secure')
            } catch (e) {
                console.log(e)
                if(e.response.status == 422){
                    this.errors = e.response.data.errors
                    // this.errors = 'Could not sign you in with those credentials.'
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