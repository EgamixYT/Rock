<template>
  <!-- Footer -->
  <mdb-footer color="indigo" class="font-small pt-0">
    <mdb-container>
      <mdb-row class="pt-5 mb-3 text-center d-flex justify-content-center">
        <mdb-col md="2" class="b-3" v-for="link in data.links" :key="link.id">
          <h6 class="title font-weight-bold"><a :href="link.link">{{link.label}}</a></h6>
        </mdb-col>
      </mdb-row>
      <hr class="rgba-white-light" style="margin: '0 15%'" />
      <mdb-row class="d-flex text-center justify-content-center mb-md-0 mb-4">
        <mdb-col md="8" sm="12" class="mt-5">
          <p style="lineHeight: '1.7rem'">{{data.info}}</p>
        </mdb-col>
      </mdb-row>
      <hr class="clearfix d-md-none rgba-white-light" style="margin: '10% 15% 5%'" />
      <mdb-row class="pb-3">
        <mdb-col md="12">
          <div class="mb-5 flex-center">
            <a v-for="icon in data.iconList" :key="icon.id" :class="icon.icon + ' m-1'"><i :class="'fab ' +  icon.iclass + ' white-text mr-md-4'"> </i></a>
          </div>
        </mdb-col>
      </mdb-row> 
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'FooterPage',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    },
    computed: {
            data() {
                return this.$store.getters['footer/data']
            }
        },
  }
</script>