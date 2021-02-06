<template>
  <div>
    <b-img
      src="https://images.unsplash.com/photo-1586627161720-ee2849303aee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      class="mb-1 img-fluid"
      alt="Responsive image"
    ></b-img>

    <b-img
      src="https://images.unsplash.com/photo-1595931288159-8164ae5def72?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      class="mb-1 img-fluid"
      alt="Responsive image"
    ></b-img>

    <b-img
      src="https://images.unsplash.com/photo-1454618454636-a42c7330ccce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      class="mb-1 img-fluid"
      alt="Responsive image"
    ></b-img>
  </div>
</template>

<script>
export default {
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