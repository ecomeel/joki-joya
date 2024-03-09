<script></script>
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
  max-width: 100%;

  @media (max-width: 768px) {
    margin-top: 80px;
    column-gap: 50px;
  }
  @media (max-width: 525px) {
    column-gap: 35px;
  }

  &__content-wrapper {
    max-width: 80%;
  }
}
</style>
