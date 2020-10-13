<template>
  <div class="container">{{ this.$store.state.detailItems }}</div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('changeDetailItemsHandler', this.$route.params.id)
  },
}
</script>
