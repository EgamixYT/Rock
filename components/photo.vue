<template>
  <div>
    <h1></h1>

    <main>
   
        <img src="https://images.unsplash.com/photo-1578763399089-42091eda1cda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1512&q=80"
        height="600"
        class="img-fluid">
      
      

      <mdb-mask dark overlay="blue-grey-light text-center" flexCenter>
        <mdb-row class="mb-5 pb-5 text-center">
          <h1 class=" mt-5 pt-1 mb-4 mx-auto" >

           Folow Us in:
            </h1>
          <mdb-col md="12" xl="12" class="mx-auto">
            
        
            <mdb-btn class="btn-fb zoom overlay" icon="facebook-f" href="facebook.com" fab>Facebook</mdb-btn>
            <mdb-btn class="btn-tw" icon="twitter" fab>Twitter</mdb-btn>
            <mdb-btn class="btn-gplus" icon="google-plus-g" href="google.com" fab> Google +</mdb-btn>
            <mdb-btn class="btn-li" icon="linkedin-in" fab>Linkedin</mdb-btn>
            <mdb-btn class="btn-ins" icon="instagram" fab>Instagram</mdb-btn>
          </mdb-col>
        </mdb-row>
      </mdb-mask>
      <mdb-row>
        <mdb-col col="12">
           <img src="https://images.unsplash.com/photo-1595931288159-8164ae5def72?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    
        class="mb-2 img-fluid"
        />
        </mdb-col>
        <mdb-col col="6"> <img src="https://images.unsplash.com/photo-1583623010148-9c00f6b12efe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
        height=""
        
        class="float-left img-fluid mb-2"

        /></mdb-col>
        <mdb-col col="6"><img src="" alt=""></mdb-col>
        <mdb-col col="12"></mdb-col>
      </mdb-row>
     
      
  
      
       
     
        <img src="https://images.unsplash.com/photo-1574002493833-92a3c9e6580f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
       
        height="600"
        class="img-fluid"
        
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