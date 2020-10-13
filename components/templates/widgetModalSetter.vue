<template>
  <widget-modal
    :status="this.$store.getters.getModalStatus"
    :items="this.$store.getters.getModalItems"
  />
</template>

<script>
export default {}
</script>
