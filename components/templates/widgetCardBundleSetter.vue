<template>
  <widget-card-bundle :items="widgetContent" />
</template>

<script>
export default {
  data() {
    return {
      widgetContent: [
        {
          date: '2020/10/14',
          name: 'Solid Icon Set',
          desc: 'シンプルなソリッドアイコン',
          eyecatch: 'simple-solid-icon',
          exImg: [],
        },
      ],
    }
  },
}
</script>
