<script></script>
<template>
  <header class="header">
    <div class="logo"></div>
    <div class="container header__container">
      <div class="contacts">
        <div class="contact">
          <img src="/assets/images/icons/location.png" alt="" />
          <p class="headers">Москва</p>
        </div>
        <div class="contact">
          <img src="/assets/images/icons/phone.png" alt="" />
          <p class="phone">+7 (812) 635 22 77</p>
        </div>
      </div>
      <div class="take-order">
        <button class="order order_pink">Купить билеты</button>
        <button class="order order_green">Заказать праздник</button>
      </div>
    </div>
    <div class="menu">
      <img src="/assets/images/icons/burger/long-stick.png" alt="" />
      <img
        class="short"
        src="/assets/images/icons/burger/long-stick.png"
        alt=""
      />
      <img src="/assets/images/icons/burger/long-stick.png" alt="" />
      <p>Меню</p>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header {
  padding: 9px 6px 9px 16px;
  position: fixed;
  top: 0;
  z-index: 20;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.811);
  backdrop-filter: blur(5px);
  border-bottom: 3px solid pink;
  border-image: linear-gradient(
    224.14deg,
    rgb(253, 243, 152) -1.136%,
    rgb(247, 190, 135) 22.241%,
    rgb(229, 99, 125) 44.972%,
    rgb(232, 75, 186) 65.177%,
    rgb(147, 16, 216) 98.333%
  );
  border-image-slice: 1;

  &__container {
    display: flex;
    justify-content: space-between;
  }
}
.logo {
  width: 40px;
  height: 40px;
  position: absolute;
  background: url("/assets/images/logo.png");
  background-size: cover;
  background-position: center center;
}
.contacts {
  margin-left: -5px;
  display: flex;
  column-gap: 16px;
}
.contact {
  padding: 6px 16px;
  display: flex;
  align-items: center;
  column-gap: 8px;
  border: 2px solid #5834a4;
  border-radius: 30px;

  & img {
    height: 18px;
  }
  & p {
    color: #5834a4;
    text-transform: uppercase;
  }
}
.phone {
  font-family: "DrukWideCyr";
  font-size: 13px;
  line-height: 16px;
}
.take-order {
  margin-left: -5px;
  display: flex;
  column-gap: 16px;
}
.order {
  padding: 8px 32px;
  border: none;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &_pink {
    background-color: #f269af;
    color: #fff;
  }
  &_green {
    background-color: #abec20;
  }
}
.menu {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: end;

  row-gap: 5px;
  position: absolute;
  top: 15px;
  right: 16px;
  & img {
    height: 4px;
  }
  & p {
    font-family: "Montserrat Bold";
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #0267ff;
  }
}
.short {
  width: 22px;
}
</style>
