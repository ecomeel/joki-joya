<script setup lang="ts">
import { defineProps } from "vue";
import blackArrow from "/images/Arrow.png";
import whiteArrow from "/images/Arrow-white.png";
const props = defineProps({
  text: String,
  theme: String,
});

const arrow = props.theme ? whiteArrow : blackArrow;

</script>
<template>
  <a :class="[{ button_white: theme }, 'button']" href="">
    {{ text }}
    <img class="button__arrow" :src="arrow" alt="arrow"
  /></a>
</template>
<style lang="scss" scopted>
.button {
  padding: 12px 17px;
  border-radius: 48px;
  border: 2px solid #000;
  display: inline-block;
  font-family: "DrukCyr";
  font-size: 22px;
  line-height: 24px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  &_white {
    color: #fff;
    border-color: #fff;
  }
  &__arrow {
    margin-left: 13px;
    width: 32px;
  }
}
</style>
