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
import Card2 from '@/components Card2.vue';

export default {
  components: {
    Navbar,
    Card,
    Footer,
    Card2
  }
}
</script>

<style>

</style>
