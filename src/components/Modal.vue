<template>
  <div id="myModal" ref="myModal" class="modal">
    <div class="modal-content">
      <div class="wrapImage">
        <template v-if="loading">
          Загрузка...
        </template>
        <template v-else>
          <img :src="image.url" alt="" />
        </template>
      </div>
      <div class="wrapComments">
        <template v-if="loading">
          Загрузка...
        </template>
        <template v-else>
          <template v-if="image.comments && image.comments.length">
            <Comment
              v-for="(comment, index) in image.comments"
              :key="index"
              :comment="comment"
            />
          </template>
          <template v-else>
            Комментариев не найдено
          </template>
        </template>
      </div>
      <div class="wrapForm">
        <CommentForm />
      </div>
      <button @click="close" class="close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="bevel"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import CommentForm from "./CommentForm.vue";
import Comment from "./Comment";
export default {
  components: {
    CommentForm,
    Comment
  },
  data() {
    return {
      loading: false
    };
  },
  async mounted() {
    var modal = document.getElementById("myModal");
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  },
  computed: {
    image({ $store }) {
      return $store.state.image;
    }
  },
  methods: {
    async open(id) {
      this.loading = true;
      document.body.style.overflow = "hidden";
      this.$refs.myModal.style.display = "block";
      await this.$store.dispatch("GET_IMAGE", id);
      this.loading = false;
    },
    close() {
      document.body.style.overflow = "auto";
      this.$refs.myModal.style.display = "none";
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  padding: 100px 0 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  @media (max-width: 800px) {
    padding: 0;
  }
}

.modal-content {
  position: relative;
  background-color: white;
  margin: auto;
  padding: 2rem;
  width: 800px;
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 3fr 2fr;
  grid-gap: 1rem;
  overflow: auto;
  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
    grid-template-rows: 205px 1fr auto;
    grid-template-columns: auto;
    padding: 0 1rem 1rem;
  }
  .wrapImage {
    grid-row: 1/2;
    grid-column: 1/2;
    min-height: 288px;
    @media (max-width: 800px) {
      min-height: auto;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      @media (max-width: 800px) {
        width: 100vw;
        margin: 0 -1rem;
      }
    }
  }
  .wrapComments {
    grid-row: 1/3;
    grid-column: 2/3;
    @media (max-width: 800px) {
      grid-row: 2/3;
      grid-column: 1/2;
    }
  }
  .wrapForm {
    grid-row: 2/3;
    grid-column: 1/2;
    @media (max-width: 800px) {
      grid-row: 3/4;
      grid-column: 1/2;
    }
  }
  button.close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    outline: none;
    @media (max-width: 800px) {
      position: fixed;
      // background-color: rgba(255, 255, 255, 0.5);
    }
    svg {
      display: block;
    }
  }
}

@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
</style>
