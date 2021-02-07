<template> 
<div>
<h1></h1>
  
    <main>
    <mdb-parallax
    src="https://images.unsplash.com/photo-1578763399089-42091eda1cda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1512&q=80"
    height="full"
    factor="1.3">
      <mdb-mask overlay="blue-slight" flexCenter>
        <mdb-row class="mb-5 pb-5 text-center">
          <mdb-col md="12" xl="8" class="mx-auto">
            <h1 class="display-3 font-weight-bold">Parallax image with a mask and some content</h1>
          </mdb-col>
        </mdb-row>
      </mdb-mask>
    </mdb-parallax>
    <h1></h1>
     <mdb-parallax src="https://images.unsplash.com/photo-1595931288159-8164ae5def72?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" 
     factor="1.3" height="600"/>
     <h1></h1>
    <mdb-parallax src="https://images.unsplash.com/photo-1574002493833-92a3c9e6580f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1433&q=80" 
     factor="1.3" height="600"/>
  </main>
  <!-- Main layout -->
   
  </div>
</template>

<script>
import { mdbParallax, mdbContainer, mdbMask, mdbRow, mdbCol } from 'mdbvue';
export default {
  components: {
      mdbParallax,
      mdbContainer,
      mdbMask,
      mdbRow,
      mdbCol
    },
  computed: {
    images() {
      //return this.$store.getters['mainPhoto/data']
      return 0
    }
  },
  data() {
    return {
      }
    }
};
</script>