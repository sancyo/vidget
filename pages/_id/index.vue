<template>
  <div class="detail-container">
    <div class="detail-page-inner">
      <div class="detail-head">
        <h2 class="heading-2">{{ items.name }}</h2>
        <img
          :src="require(`@/static/${this.$route.params.id}/eyecatch.png`)"
          alt="eye-catch"
          class="eyecatch"
        />
        <p class="widget-desc">{{ items.desc }}</p>
        <div class="dl-btn">ダウンロード</div>
      </div>
      <div class="detail-showcase">
        <h2 class="heading-2">Gallery</h2>
        <img
          :src="
            require(`@/static/${this.$route.params.id}/showcase/img-${items.img}.png`)
          "
          alt="showcase"
          class="showcase-img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: '',
    }
  },
  created() {
    this.$store.dispatch('changeDetailItemsHandler', this.$route.params.id)
    this.items = this.$store.state.detailItems
  },
}
</script>

<style scoped>
/* ===== common ===== */
.heading-2 {
  font-size: 2.8rem;
  margin-bottom: 3.2rem;
}
.detail-container {
  margin: 0 auto;
}
.detail-page-inner {
  margin: 0 auto;
}

/* ===== /common ===== */

.detail-head {
  text-align: center;
  margin-top: 5.6rem;
}
.eyecatch {
  width: 65%;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.09);
  border-radius: 8px;
  margin-bottom: 3.2rem;
}
.widget-desc {
  font-size: 1.4rem;
  font-family: Rubik, 'Noto Sans JP', sans-serif;
  width: 75%;
  margin: 0 auto;
  line-height: 1.8;
}
.dl-btn {
  display: inline-block;
  padding: 0.8rem 1.6rem;
  font-size: 1.6em;
  color: #fff;
  text-decoration: none;
  user-select: none;
  background: #3d83f4;
  border-radius: 3px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 2px 0 rgba(0, 0, 0, 0.12);
  transition: 0.2s ease;
  margin-top: 3.2rem;
}

/* ===== showcase関連 ===== */
.detail-showcase {
  text-align: center;
  margin-top: 5.6rem;
  background: #fff;
  padding: 4.8rem 0;
}

/* ===== /showcase関連 ===== */
.showcase-img {
  width: 70%;
  border-radius: 16px;
}

/* =========== pc用css ========== */
@media screen and (min-width: 481px) {
  .page-header-inner {
    max-width: 1100px;
    margin: 0 auto;
  }
  .header-icon {
    width: 12em;
  }
  .eyecatch {
    width: 25%;
  }
  .showcase-img {
    width: 300px;
  }
}
</style>
