<template>
  <ul class="widget-card-bundle">
    <li v-for="item in items" :key="item.id">
      <widget-card :id="item.id" :name="item.name" :num="item.num" />
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
<style scoped>
@media screen and (min-width: 481px) {
  .widget-card-bundle {
    display: flex;
    width: 70%;
    box-sizing: border-box;
  }
  .widget-card-bundle > li {
    width: 30%;
    margin-right: 3.2rem;
    box-sizing: border-box;
  }
}
</style>
