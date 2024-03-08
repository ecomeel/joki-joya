<template>
  <section class="cover-list">
    <img
      class="cover-list__picture"
      src="/assets/images/main-board.png"
      alt="cover list"
    />
    <div class="title-wrapper">
      <h1 class="title">О <span class="title_blue">Joki joya</span></h1>
      <div class="stars">
        <img
          class="star"
          v-for="n in 3"
          src="/assets/images/star.png"
          alt="star"
        />
      </div>
      <img class="welcome" src="/assets/images/welcome.png" alt="Welcome" />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.cover-list {
  max-width: 100%;

  &__picture {
    display: block;
    width: 100%;
    height: 616px;
    object-fit: cover;
    object-position: center center;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
  }
}
.title-wrapper {
  margin-top: 40px;
  position: relative;
  display: flex;
  align-items: center;
}
.title {
  font-family: "DrukWideCyr", sans-serif;
  font-size: 73px;
  line-height: 72px;
  text-transform: uppercase;

  &_blue {
    color: #0267ff;
    position: relative;

    &::before {
      content: "JOKI JOYA";
      position: absolute;
      top: 15px;
      left: 10px;
      z-index: -1;
      width: 100%;
      color: transparent;
      -webkit-text-stroke: 3px #abec20;
    }
  }
}
.stars {
  margin-left: 27px;
  & > *:not(:last-child) {
    margin-right: 19px;
  }
  & > * {
    width: 55px;
  }
}
.welcome {
  position: absolute;
  top: -8px;
  right: 0;
  width: 144px;
  height: 144px;
}
</style>
