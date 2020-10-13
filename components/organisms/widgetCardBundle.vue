<template>
  <ul class="widget-card-bundle">
    <li v-for="item in items" :key="item.id">
      <widget-card
        :date="item.date"
        :name="item.name"
        :desc="item.desc"
        :eyecatch="item.eyecatch"
        :ex-img="item.exImg"
      />
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
