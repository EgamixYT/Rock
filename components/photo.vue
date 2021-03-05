<template>
  <div>
    <h1></h1>

    <main>
      <mdb-parallax
        src="https://images.unsplash.com/photo-1578763399089-42091eda1cda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1512&q=80"
        height="600"
        factor="0.5"
      >
        </mdb-parallax>

      <mdb-mask dark overlay="blue-grey-light" flexCenter>
        <mdb-row class="mb-5 pb-5 text-center">
          <h1 class="justify-content: center baseline">

              <p class="mt-5 pt-1 mb-4">Folow Us in:</p>
            </h1>
          <mdb-col md="12" xl="12" class="mx-auto ">
            
        
            <mdb-btn class="btn-fb" icon="facebook-f" href="facebook.com" fab>Facebook</mdb-btn>
            <mdb-btn class="btn-tw" icon="twitter" fab>Twitter</mdb-btn>
            <mdb-btn class="btn-gplus" icon="google-plus-g" href="google.com" fab> Google +</mdb-btn>
            <mdb-btn class="btn-li" icon="linkedin-in" fab>Linkedin</mdb-btn>
            <mdb-btn class="btn-ins" icon="instagram" fab>Instagram</mdb-btn>
          </mdb-col>
        </mdb-row>
      </mdb-mask>

      <mdb-parallax
        src="https://images.unsplash.com/photo-1595931288159-8164ae5def72?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        factor="1.0"
        height="600"
      />
      <mdb-mask dark overlay="blue-grey-light" flexCenter>

      </mdb-mask>
      <mdb-parallax
        src="https://images.unsplash.com/photo-1574002493833-92a3c9e6580f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        factor="0.5"
        height="600"
      />
    </main>
   
  </div>
</template>

<script>
import {
  mdbParallax,
  mdbMask,
  mdbRow,
  mdbCol,
  mdbBtn,
  mdbContainer,
 
  
} from "mdbvue";

export default {
  components: {
    mdbBtn,
    mdbParallax,
    mdbContainer,
    mdbMask,
    mdbRow,
    mdbCol
  },
  data() {
    return {
      key: "value",
    };
  },
  computed: {
    name() {
      return this;
    },
  },
};
</script>