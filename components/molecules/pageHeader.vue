<template>
  <header class="page-header">
    <div class="page-header-inner">
      <nuxt-link to="/">
        <img src="@/static/vidget-icon.png" alt="Vidget" class="header-icon" />
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.page-header {
  background: #fff;
  padding: 1rem 2.2rem;
  text-align: center;
}
.header-icon {
  width: 30%;
}
@media screen and (min-width: 481px) {
  .page-header-inner {
    max-width: 1100px;
    margin: 0 auto;
  }
  .header-icon {
    width: 12em;
  }
}
</style>
