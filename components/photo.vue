<template>
  <div>
    <b-img
      src="https://images.unsplash.com/photo-1586627161720-ee2849303aee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      class="img-fluid"
      alt="Responsive image"
    ></b-img>

    <h1></h1>

    <b-img
      src="https://images.unsplash.com/photo-1595931288159-8164ae5def72?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      class="img-fluid"
      alt="Responsive image"
    ></b-img>

    <h1></h1>

    <b-img
      src="https://images.unsplash.com/photo-1454618454636-a42c7330ccce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      class="img-fluid"
      alt="Responsive image"
    ></b-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: "#bbb",
        width: 600,
        height: 400,
        class: "my-5",
      },
    };
  },
  methods: {
    getImageUrl(imageId) {
      const { width, height } = this.mainProps;
      return `https://picsum.photos/${width}/${height}/?image=${imageId}`;
    },
  },
};
</script>