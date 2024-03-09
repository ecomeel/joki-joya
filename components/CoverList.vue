<template>
  <section class="cover-list">
    <img
      class="cover-list__picture"
      src="/assets/images/main-board.png"
      alt="cover list"
    />
    <div class="title-wrapper">
      <div class="flex-wrapper">
        <h1 class="title">О <span class="title_blue">Joki joya</span></h1>
        <div class="stars">
          <img
            class="star"
            v-for="n in 3"
            src="/assets/images/star.png"
            alt="star"
          />
        </div>
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
    border-radius: 32px;
  }
}
.title-wrapper {
  margin-top: 40px;
  position: relative;

  @media (max-width: 1024px) {
    margin-top: 32px;
  }
}
.flex-wrapper {
  display: flex;
  align-items: center;

  @media (max-width: 525px) {
    justify-content: center;
  }
}
.title {
  font-family: "DrukWideCyr", sans-serif;
  font-size: 73px;
  line-height: 72px;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    font-size: 50px;
    line-height: 50px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }

  &_blue {
    color: #0267ff;
    position: relative;
    z-index: 2;

    &::before {
      content: "JOKI JOYA";
      position: absolute;
      top: 15px;
      left: 10px;
      z-index: -1;
      width: 100%;
      color: transparent;
      -webkit-text-stroke: 3px #abec20;

      @media (max-width: 1024px) {
        top: 10px;
        left: 7px;
        -webkit-text-stroke: 2px #abec20;
      }
      @media (max-width: 1024px) {
        top: 6px;
        left: 5px;
      }
    }
  }
}
.stars {
  margin-left: 27px;

  @media (max-width: 1024px) {
    margin-left: 15px;
  }
  & > *:not(:last-child) {
    margin-right: 19px;
  }
  & > *:not(:first-child) {
    @media (max-width: 1230px) {
      display: none;
    }
  }
  & > * {
    width: 55px;

    @media (max-width: 1024px) {
      width: 40px;
    }
    @media (max-width: 768px) {
      width: 24px;
    }
  }
}
.welcome {
  position: absolute;
  top: -8px;
  right: 0;
  width: 144px;
  height: 144px;

  @media (max-width: 525px) {
    margin-top: 50px;
    position: static;
    display: block;
  }
}
</style>
