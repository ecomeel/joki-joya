<script>
export default {
  setup() {

  }
}
</script>
<template>
  <section class="about">
    <Vertical />
    <div class="about__content-wrapper">
      <AboutInfo />
      <AboutFacts />
    </div>
  </section>
</template>
<style lang="scss" scoped>
  .about {
    margin-top: 140px;
    display: flex;
    column-gap: 100px;

    &__content-wrapper {
      flex: 1 0 auto;
    }
  }
</style>