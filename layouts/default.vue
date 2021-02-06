<template>
  <div>
    <Navbar/>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/'
import Card from '@/components/Card'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Card,
    Footer
  }
}
</script>

<style>

</style>
