<template>
  <mdb-container>
    <h1></h1>
    <mdb-card class="promoting-card" style="width: 22rem">
      <mdb-card-body class="d-flex flex-row">
        <div>
          <mdb-card-title class="font-weight-bold mb-2"
            >Лазание на природном рельефе</mdb-card-title
          >
        </div>
      </mdb-card-body>
      
      <mdb-view>
        <a href="/nature">
          <mdb-card-image
            top
            class="rounded-0"
            src="https://images.unsplash.com/photo-1503540130927-f730a045483b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="Card image cap"
          />
          <mdb-mask overlay="white-slight" waves />
        </a>
      </mdb-view>
      <mdb-card-body>
        <div class="collapse-content">
          <mdb-card-text
            :class="['collapse', show1 && 'show']"
            ref="collapse1"
            :style="'height:' + height1"
            >Узнай больше о лазании на натуральном рельефе</mdb-card-text
          >
          <mdb-btn
            @click.native="toggle1"
            tag="a"
            flat
            darkWaves
            :class="['red-text p-1 my-1 mr-0', !show1 && 'collapsed']"
          ></mdb-btn>
          <mdb-tooltip trigger="hover" :options="{ placement: 'top' }">
            <div class="tooltip">Share this post</div>
            <mdb-icon
              slot="reference"
              icon="share-alt"
              class="text-muted float-right p-1 my-1"
            />
          </mdb-tooltip>
          <mdb-tooltip trigger="hover" :options="{ placement: 'top' }">
            <div class="tooltip">I like it</div>
            <mdb-icon
              slot="reference"
              icon="heart"
              class="text-muted float-right p-1 my-1 mr-3"
            />
          </mdb-tooltip>
        </div>
      </mdb-card-body>
    </mdb-card>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbIcon,
  mdbView,
  mdbMask,
  mdbBtn,
  mdbTooltip,
} from "mdbvue";
export default {
  name: "CardProPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbIcon,
    mdbView,
    mdbMask,
    mdbBtn,
    mdbTooltip,
  },
  data() {
    return {
      show1: false,
      height1: "2.65rem",
    };
  },
  mounted() {
    this.fullHeight1 = this.$refs.collapse1.$el.scrollHeight + "px";
    this.fullHeight2 = "100%";
  },
  methods: {
    toggle1() {
      this.show1 = !this.show1;
      this.show1
        ? (this.height1 = this.fullHeight1)
        : (this.height1 = "2.65rem");
    },
  },
};
</script>


<style scoped>
.collapse {
  transition: height 0.3s;
}
.collapse-item {
  transition: all 0.5s;
}
.collapse-content .fas.fa-heart:hover {
  color: #f44336 !important;
}
.collapse-content .fas.fa-share-alt:hover {
  color: #0d47a1 !important;
}
</style>