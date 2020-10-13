<template>
  <div class="widget-card">
    {{ date }} <br />
    {{ name }} <br />
    {{ desc }} <br />
    <img :src="require(`@/static/${eyecatch}/eyecatch.png`)" alt="eye-catch" />
    {{ eyecatch }}
    <h3>使用例</h3>
    {{ exImg }} <br />
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    eyecatch: {
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
