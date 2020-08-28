<template>
  <div class="home">
    <ul>
      <li v-for="(image, index) in images" :key="index">
        <img :src="image.url" @click="open(image.id)" alt="" />
      </li>
    </ul>
    <Modal ref="modal" />
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  name: "Home",
  components: {
    Modal
  },
  async mounted() {
    this.$store.dispatch("GET_IMAGES");
  },
  computed: {
    images({ $store }) {
      return $store.state.images;
    }
  },
  methods: {
    open(id) {
      this.$refs.modal.open(id);
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
  grid-gap: 1rem;
  li {
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
