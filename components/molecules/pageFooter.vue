<template>
  <footer class="page-footer">
    <ul class="page-footer-inner">
      <li class="footer-item">
        <nuxt-link to="terms" class="footer-item-link">Terms</nuxt-link>
      </li>
      <li class="footer-item">
        <nuxt-link to="privacy" class="footer-item-link">Privacy</nuxt-link>
      </li>
      <li class="footer-item end">
        <a
          href="https://forms.gle/aL7MPngT3Ujr5D4Q8"
          class="footer-item-link"
          target="_blank"
        >
          Contact
        </a>
      </li>
    </ul>
    <p class="copyright">@Copyright 2020, vidget All rights resrved</p>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.page-footer {
  padding: 3.2rem 2.2rem;
  background: #323232;
}
.page-footer-inner {
  display: flex;
  justify-content: center;
  padding: 0.6rem 0;
}
.footer-item {
  margin-right: 2.4rem;
  font-size: 1.2rem;
}
.end {
  margin-right: 0 !important;
}
.footer-item-link {
  color: #fff;
}
.copyright {
  text-align: center;
  padding: 1.2rem 0;
  font-size: 1.2rem;
  color: #bababa;
}
</style>
