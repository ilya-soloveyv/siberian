<template>
  <div class="comment">
    <div class="comment__date">{{ date }}</div>
    <div class="comment__text">{{ comment.text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    date() {
      const date = new Date(this.comment.date);
      const d = ("0" + date.getDate()).slice(-2);
      const m = ("0" + (date.getMonth() + 1)).slice(-2);
      const y = date.getFullYear();
      return d + "." + m + "." + y;
    }
  }
};
</script>

<style lang="scss" scoped>
.comment {
  font-size: 13px;
  line-height: 15px;
  margin-bottom: 20px;
  &__date {
    color: #999999;
    padding-bottom: 5px;
  }
}
</style>
