<template>
  <div class="widget-card">
    <nuxt-link
      :to="{
        name: 'id',
        params: { id: id },
      }"
    >
      <img
        :src="require(`@/static/${id}/eyecatch.png`)"
        alt="eye-catch"
        class="eyecatch"
      />
      <div class="card-info">
        <h2 class="widget-name">{{ name }}</h2>
        <time class="widget-num">{{ num }} icons</time>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    num: {
      type: Number,
      default: 0,
    },
    exImg: {
      type: Array,
      default: () => {},
    },
  },
  methods: {
    changeModalStatus() {
      this.$store.dispatch('changeDetailItemsHandler', this.id)
    },
  },
}
</script>

<style scoped>
.widget-card {
  margin: 0 auto;
  margin-bottom: 4rem;
  width: 80%;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08), 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  color: #323232;
  border-radius: 8px;
}
.eyecatch {
  width: 100%;
  border-radius: 10px 10px 0 0;
}
.card-info {
  padding: 1.6rem 2.2rem;
}
.widget-name {
  font-size: 1.6rem;
  margin-bottom: 0.6rem;
}
.widget-date {
  color: #bbb;
}
</style>
