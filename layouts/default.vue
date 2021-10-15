<template>
  <div>
    <app-navbar></app-navbar>
    
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '../components/layout/Navbar'
export default {
  components: {
    'app-navbar' : Navbar
  }
}
</script>