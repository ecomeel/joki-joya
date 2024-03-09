<script>
export default {
  setup() {
    const celebrations = ["quests", "jjshow", "birthday", "celebrate", "jshow"];

    return {
      celebrations,
    };
  },
};
</script>
<template>
  <div class="vertical">
    <div class="item" v-for="celebrate in celebrations">
      <p>{{ celebrate }}</p>
      <svg
        width="72.000000"
        height="64.000000"
        viewBox="0 0 72 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <path
          id="✽"
          d="M72 32.1C72 28.6 68.7182 25.9 64.0442 25.9C61.7569 25.9 58.0773 26.8 52.9061 28.5C47.7348 30.2 42.9613 31.1 38.6851 31.1L37.3923 31.1C40.1768 26.7 42.4641 23.7 44.0552 22.3C47.337 19.4 56.6851 11.8 56.6851 5.90002C56.6851 2.40002 54.1989 0 51.2155 0C49.5249 0 48.0331 0.700012 46.5414 2.09998C43.6575 4.90002 42.2652 11.1 40.674 18.4C39.8785 22.1 38.3867 26 36 30.3C33.6133 25.9 32.0221 21.9 31.2265 18.1C30.4309 14.4 29.6354 11.1 28.7403 8.29999C26.8508 2.5 23.9669 0 20.5856 0C17.5028 0 15.3149 2.40002 15.3149 5.59998C15.3149 7.59998 15.9116 9.5 17.2044 11.4C18.3978 13.2 21.5801 16.5 26.7514 21.2C31.4254 26.1 31.0276 25.4 34.6077 31.1C29.8343 31.1 24.7624 30.2 19.4917 28.4C14.221 26.6 10.3425 25.7 7.9558 25.7C3.18232 25.7 0 28.4 0 31.9C0 35.5 3.38121 38.1 7.9558 38.1C11.4365 38.1 18.895 35.6 23.6685 34C26.0552 33.2 29.337 32.9 33.3149 32.9L34.6077 32.9C32.221 36.9 29.7348 40 27.2486 42.2C22.2762 46.6 15.3149 52.8 15.3149 58.1C15.3149 61.6 17.6022 64 20.5856 64C22.2762 64 23.8674 63.3 25.3591 62C28.3425 59.4 29.6354 53.4 31.2265 45.9C32.0221 42.1 33.6133 38 36 33.7C38.3867 37.9 39.9779 41.9 40.674 45.5C41.3702 49.2 42.2652 52.5 43.0608 55.4C44.6519 61.3 47.9337 64 51.2155 64C54.1989 64 56.6851 61.4 56.6851 58.2C56.6851 53 51.2155 48.1 45.6464 43.1C42.8619 40.6 40.0773 37.3 37.3923 32.9C42.5635 32.9 47.5359 33.8 52.7072 35.6C57.779 37.4 61.558 38.3 64.0442 38.3C68.5193 38.3 72 35.8 72 32.1Z"
          fill="#000000"
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
      </svg>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.vertical {
  width: 73px;
  @media (max-width: 1024px) {
    justify-content: space-around;
  }
  @media (max-width: 768px) {
    width: 60px;
  }
  @media (max-width: 568px) {
    width: 40px;
  }
}
.item,
.vertical {
  display: flex;
  flex-direction: column-reverse;
  row-gap: 40px;
}
.item {
  align-items: center;
  @media (max-width: 1024px) {
    justify-content: space-between;
  }
}
p {
  font-size: 84px;
  line-height: 84px;
  color: #fff;
  -webkit-text-stroke: 1.5px #000000;
  transform: rotate(180deg);
  writing-mode: vertical-rl;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 65px;
    line-height: 70px;
  }
  @media (max-width: 568px) {
    font-size: 50px;
    line-height: 56px;
  }
}
svg {
  @media (max-width: 768px) {
    width: 60px;
    height: 56px;
  }
  @media (max-width: 568px) {
    width: 40px;
    height: 36px;
  }
}
</style>
