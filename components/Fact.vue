<script setup lang="ts">
import { defineProps } from "vue";
import plusBlack from "/images/plus-black.png";
import plusWhite from "/images/plus-white.png";

export interface IFact {
  title: string;
  description: string;
  background: string;
  picture: string;
  theme?: string;
  buttonText: string;
}

const props = defineProps<IFact>();

let plus;
if (props.theme) {
  plus = plusWhite;
} else {
  plus = plusBlack;
}
</script>
<template>
  <div :style="{ backgroundColor: background }" class="fact">
    <img class="fact__plus fact__plus_top-left" :src="plus" />
    <img class="fact__plus fact__plus_top-right" :src="plus" />
    <img class="fact__plus fact__plus_bot-left" :src="plus" />
    <img class="fact__plus fact__plus_bot-right" :src="plus" />
    <div :class="[{ white: theme }, 'fact__head']">
      <p class="fact__title">{{ title }}</p>
      <p class="fact__desc">{{ description }}</p>
    </div>
    <img class="fact__image" :src="picture" />
    <div class="fact__button-wrapper">
      <ButtonArrow :text="buttonText" :theme="theme" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.fact {
  position: relative;
  width: 344px;
  height: 240px;

  &::before {
    content: "";
    width: 100%;
    height: 240px;
    position: absolute;
    z-index: 10;
    opacity: 0.3;
    background-image: url("/assets/images/plastic-back.png");
  }

  &__plus {
    position: absolute;
    width: 16px;
    height: 16px;
    z-index: 16;

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
.white {
  color: #fff;
}
</style>
