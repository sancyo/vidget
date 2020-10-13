<template>
  <div class="widget-card">
    <img :src="require(`@/static/${id}/eyecatch.png`)" alt="eye-catch" />
    {{ id }}
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    exImg: {
      type: Array,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.widget-card {
  display: inline-block;
  margin-bottom: 4rem;
}
img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08), 0 2px 2px 0 rgba(0, 0, 0, 0.1);
}
h2 {
  color: #323232;
  padding: 1rem 1.6rem;
  font-size: 1.2rem;
}
</style>
