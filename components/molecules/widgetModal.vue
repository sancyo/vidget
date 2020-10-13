<template>
  <div v-if="status" class="widget-modal">
    <p>widget detail modal</p>
    <p>{{ items }}</p>
    <button @click="changeModalStatus()">戻る</button>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    changeModalStatus() {
      this.$store.dispatch('changeModalStatusHandler')
    },
  },
}
</script>

<style scoped>
.widget-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
}
</style>
