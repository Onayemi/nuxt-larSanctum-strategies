<template>
    <div class="container my-5 py-5 text-center">
        <h3>Welcome to Dashboard</h3>
    </div>
</template>

<script>
export default {
    name: 'dashboard',
    middleware: 'auth',
    data(){
        return {
            results: []
        }
    },
    mounted(){

    },
    methods: {
        async getUser(){
            
        }
    }
}
</script>