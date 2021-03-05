<template>
  <div class="bg"> 
   

  
<mdb-jumbotron class="mb-0 text-center mdb-color lighten-2 white-text">
    <h2 class="card-title h2">Южноукраинск</h2>
    <p class="my-4 font-weight-bold">Живописные скалы, на берегу бугских порогов</p>
    <mdb-row class="d-flex justify-content-center">
      <mdb-col xl="7" class="pb-2">
        <p class="card-text">Скалолазание как преодоление скального рельефа не с целью решения житейских задач (охота, поиск кратчайших путей в горах и др.), а для самоутверждения, решения спортивных задач</p>
      </mdb-col>
    </mdb-row>
    <hr class="my-4 rgba-white-light">
    <div class="pt-2">
      <mdb-btn outline="white" icon="gem" iconRight>Repost</mdb-btn>
      <mdb-btn outline="white" icon="download" iconRight>View more</mdb-btn>
    </div>
  </mdb-jumbotron>
  </div>
</template>
<script>

import { mdbRow, mdbCol, animateOnScroll, mdbJumbotron, mdbBtn } from "mdbvue";
export default {
  name: "AnimationsPage",
  components: {
    mdbRow,
    mdbCol,
    mdbJumbotron,
    mdbBtn
  },
  directives: {
    animateOnScroll,
  },
};
</script>

<style>
  body, html {
    height: 100%;
  }
  .bg {
    /* The image used */
    background-image: url("https://images.unsplash.com/photo-1578886141033-b9f066572135?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80");

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>