<template>
  <div secondary >
    
    <Navbar/>
    <Photo />
    
    <Footer />
<Nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/'
import Photo from '@/components/photo/'
import Card from '@/components/Card'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Photo,
    Card,
    Footer
  }
}
</script>

<style>

</style>
