<script>
export default {
  props: {
    title: String,
    description: String,
    background: String,
    picture: String,
    theme: String,
    buttonText: String,
  },
  setup(props) {
    
  },
};
</script>
<template>
  <div class="fact">
    <img
      class="fact__plus fact__plus_top-left"
      src="/assets/images/icons/plus-black.png"
    />
    <img
      class="fact__plus fact__plus_top-right"
      src="/assets/images/icons/plus-black.png"
    />
    <img
      class="fact__plus fact__plus_bot-left"
      src="/assets/images/icons/plus-black.png"
    />
    <img
      class="fact__plus fact__plus_bot-right"
      src="/assets/images/icons/plus-black.png"
    />
    <div class="fact__head">
      <p class="fact__title">{{ title }}</p>
      <p class="fact__desc">{{ description }}</p>
    </div>
    <img class="fact__image" src="/assets/images/facts/castle.png" />
    <div class="fact__button-wrapper">
      <ButtonArrow :text="buttonText" theme="white" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.fact {
  position: relative;
  width: 344px;
  height: 240px;
  background-color: #abec20;

  &::before {
    content: "";
    width: 344px;
    height: 240px;
    position: absolute;
    z-index: 10;
    opacity: 0.2;
    background-image: url("/assets/images/plastic-back.png");
  }

  &__plus {
    position: absolute;
    width: 16px;
    height: 16px;

    &_top-left {
      top: 16px;
      left: 16px;
    }
    &_top-right {
      top: 16px;
      right: 16px;
    }
    &_bot-left {
      bottom: 16px;
      left: 16px;
    }
    &_bot-right {
      bottom: 16px;
      right: 16px;
    }
  }
  &__head {
    position: absolute;
    top: 32px;
    left: 40px;
    text-transform: uppercase;
  }
  &__title {
    font-size: 54px;
    line-height: 48px;
  }
  &__desc {
    font-family: "DrukWideCyr", sans-serif;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.03em;
  }
  &__image {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  &__button-wrapper {
    position: absolute;
    left: 40px;
    bottom: 24px;
    z-index: 11;
  }
}
</style>
