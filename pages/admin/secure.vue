<template>
    <div>
        <h1>Secure Page</h1>
        <p>Form will be here to enter token</p>
    </div>
</template>

<script>
export default {
    middleware: 'auth'
}
</script>