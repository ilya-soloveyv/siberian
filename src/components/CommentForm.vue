<template>
  <form @submit.prevent="submit">
    <div class="input-wrap">
      <input
        id="name"
        type="text"
        required
        autocomplete="off"
        minlength="2"
        placeholder="Ваше имя"
        v-model="name"
      />
      <label for="name">Ваше имя</label>
      <div class="input-wrap__status" />
    </div>
    <div class="input-wrap">
      <input
        id="email"
        type="email"
        required
        autocomplete="off"
        placeholder="Ваша электронная почта"
        v-model="email"
      />
      <label for="email">Ваша электронная почта</label>
      <div class="input-wrap__status" />
    </div>
    <div class="input-wrap">
      <input
        id="comment"
        type="text"
        required
        autocomplete="off"
        minlength="5"
        placeholder="Комментарий"
        v-model="comment"
      />
      <label for="comment">Комментарий</label>
      <div class="input-wrap__status" />
    </div>
    <button type="submit">Отправить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      comment: null
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("ADD_COMMENT", {
        name: this.name,
        email: this.email,
        text: this.comment
      });
      this.name = null;
      this.email = null;
      this.comment = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.input-wrap {
  position: relative;
  margin: 0 0 1rem;
}
input {
  width: 100%;
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 25px 60px 10px 15px;
  z-index: 100;
  line-height: 1.5rem;
  font-size: 14px;
  &:focus {
    outline: none;
  }
  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    top: 10px;
    opacity: 0.5;
    transform: none;
    font-size: 12px;
  }
  &:valid:not(:placeholder-shown) {
    border-color: #28a745;
  }
  &:invalid:not(:placeholder-shown) {
    border-color: #dc3545;
  }
  &:not(:placeholder-shown) ~ .input-wrap__status {
    display: block;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translate(0, -50%);
    width: 24px;
    height: 24px;
    svg {
      stroke: white;
    }
  }
  &:invalid:not(:placeholder-shown) ~ .input-wrap__status {
    background-color: #dc3545;
    background-image: url("~@/assets/input-wrap__error.svg");
  }
  &:valid:not(:placeholder-shown) ~ .input-wrap__status {
    background-color: #28a745;
    background-image: url("~@/assets/input-wrap__success.svg");
  }
  &::placeholder {
    opacity: 0;
  }
}
label {
  transition: all 0.25s;
  font-size: 14px;
  line-height: 1rem;
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translate(0, -50%);
  z-index: 10;
  cursor: text;
  color: #333333;
}
.input-wrap__status {
  display: none;
}
button {
  background-color: #4997d0;
  border: none;
  color: white;
  padding: 10px 10px;
  border-radius: 5px;
}
</style>
