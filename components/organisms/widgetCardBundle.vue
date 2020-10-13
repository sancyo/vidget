<template>
  <ul class="widget-card-bundle">
    <li v-for="item in items" :key="item.id">
      <widget-card :id="item.id" />
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => {},
    },
  },
}
</script>
