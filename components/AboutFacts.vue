<script setup>
import castleImg from "/images/facts/castle.png";
import parkImg from "/images/facts/park.png";
import keyImg from "/images/facts/key.png";
import burgerImg from "/images/facts/burger.png";
import restaurantImg from "/images/facts/restaurant.png";
import candyHouseImg from "/images/facts/candy-house.png";
import boyImg from "/images/facts/boy.png";
const facts = [
  {
    title: "26",
    description: "парков",
    background: "#ABEC20",
    picture: castleImg,
    buttonText: "посмтреть адреса",
  },
  {
    title: "800+",
    description: "аттракционов",
    background: "#0267FF",
    picture: parkImg,
    buttonText: "во всех парках",
    theme: "white",
  },
  {
    title: "200+",
    description: "банкетных комнат",
    background: "#F55E1D",
    picture: keyImg,
    buttonText: "во всех парках",
    theme: "white",
  },
  {
    title: "Семейные",
    description: "рестораны",
    background: "#F269AF",
    picture: burgerImg,
    buttonText: "Во всех парках",
    theme: "white",
  },
  {
    title: "11",
    description: "премиальных ресторанов Family villa",
    background: "#000000",
    picture: restaurantImg,
    buttonText: "подробнее",
    theme: "white",
  },
  {
    title: "Праздники",
    description: "и мастер-классы",
    background: "#A66EFF",
    picture: candyHouseImg,
    buttonText: "купить билеты",
    theme: "white",
  },
  {
    title: "300+",
    description: "аниматоров квестов и шоу программ",
    background: "#ABEC20",
    picture: boyImg,
    buttonText: "подробнее",
  },
];
</script>
<template>
  <section class="facts">
    <h3 class="facts__title">jj \\\ facts</h3>

    <Fact
      v-for="fact in facts"
      :title="fact.title"
      :description="fact.description"
      :background="fact.background"
      :picture="fact.picture"
      :buttonText="fact.buttonText"
      :theme="fact.theme"
    />
  </section>
</template>
<style lang="scss" scoped>
.facts {
  margin-top: 110px;
  width: 1040px;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  &__title {
    font-family: 'DrukWideCyr', sans-serif;
    font-size: 11px;
    line-height: 16px;
    text-transform: uppercase;
    position: absolute;
    top: 2px;
    left: -25px;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
}
</style>
