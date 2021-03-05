<template>
  <b-row>
    <b-col
      ><mdb-jumbotron class="mb-0 text-center w-25">
        <mdb-card-title class="pb-2 h4"
          ><strong>My adventure</strong></mdb-card-title
        >
        <mdb-view
          class="my-4 w-25"
          src="https://images.unsplash.com/photo-1548130547-e0497a348fe9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1568&q=80"
          alt=""
        >
          <a><mdb-mask waves overlay="white-slight" /></a>
        </mdb-view>
        <h5 class="indigo-text h5 mb-4">Photography</h5>
        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam.
        </p>
        <a class="fa-lg p-2 m-2 li-ic"
          ><mdb-icon fab icon="linkedin-in" class="grey-text"
        /></a>
        <a class="fa-lg p-2 m-2 tw-ic"
          ><mdb-icon fab icon="twitter" class="grey-text"
        /></a>
        <a class="fa-lg p-2 m-2 fb-ic"
          ><mdb-icon fab icon="facebook-f" class="grey-text"
        /></a> </mdb-jumbotron
    ></b-col>
    <b-col></b-col>
    <b-col></b-col>
    <b-col></b-col>
  </b-row>
</template>


<script>
import { mdbJumbotron, mdbCardTitle, mdbView, mdbMask, mdbIcon } from "mdbvue";
export default {
  name: "JumbotronPage",
  components: {
    mdbJumbotron,
    mdbCardTitle,
    mdbView,
    mdbMask,
    mdbIcon,
  },
};
</script>