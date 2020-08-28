import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
    image: {}
  },
  mutations: {
    SET_IMAGES(state, images) {
      state.images = images;
    },
    SET_IMAGE(state, image) {
      state.image = image;
    },
    ADD_COMMENT(state, comment) {
      state.image.comments.push(comment);
    }
  },
  actions: {
    async GET_IMAGES({ commit }) {
      const { data } = await axios.get(
        "https://boiling-refuge-66454.herokuapp.com/images"
      );
      commit("SET_IMAGES", data);
    },
    async GET_IMAGE({ commit }, id) {
      const { data } = await axios.get(
        "https://boiling-refuge-66454.herokuapp.com/images/" + id
      );
      commit("SET_IMAGE", data);
    },
    async ADD_COMMENT({ state, commit }, comment) {
      comment.date = Date.now(); // Добавляем дату, так как сервер не возвращает результут добавления комментарий
      commit("ADD_COMMENT", comment);
      await axios.post(
        "https://boiling-refuge-66454.herokuapp.com/images/" +
          state.image.id +
          "/comments",
        {
          name: comment.name,
          comment: comment.text
        }
      );
    }
  },
  modules: {}
});
