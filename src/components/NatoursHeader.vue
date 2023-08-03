<template>
  <header class="header">
    <div class="header__logo-box">
      <img
        :src="require('@/assets/img/logo-white.png')"
        alt="Logo"
        class="header__logo"
      >
    </div>
    <div class="header__text-box">
      <h1 class="heading-primary">
        <span class="heading-primary--main">Outdoors</span>
        <span class="heading-primary--sub">is where life happens</span>
      </h1>
      <a
        href="#"
        class="btn btn--white btn--animated"
      >Discover our tours</a>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  height: 95vh;
  background-image: linear-gradient(to right bottom, rgba($color-primary-light, 0.8), rgba($color-primary-dark, 0.8)), url(@/assets/img/hero.jpg);
  background-size: cover;
  background-position: top;
  position: relative;

  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

  &__logo-box {
    position: absolute;
    top: 40px;
    left: 40px;
  }

  &__logo {
    height: 35px;
  }

  &__text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
}

.heading-primary {
  color: $color-white;
  text-transform: uppercase;
  backface-visibility: hidden;
  margin-bottom: 60px;

  &--main {
    display: block;
    font-size: 60px;
    font-weight: 400;
    letter-spacing: 35px;

    animation: moveInLeft 1s ease-out;
  }

  &--sub {
    display: block;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 17.4px;
    animation-name: moveInRight;
    animation-duration: 1s;
    animation-timing-function: ease-out;
  }
}

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  80% {
    transform: translateX(10px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  80% {
    transform: translateX(-10px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

.btn {

  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 15px 40px;
    display: inline-block;
    border-radius: 100px;
    transition: all .2s;
    position: relative;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgb($color-black, .2);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgb($color-black, .2);
  }

  &--white {
    background-color: $color-white;
    color: $color-grey-dark;

    &::after {
      background-color: $color-white;
    }
  }

  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
  }

  &--animated {
    animation: moveInBottom .5s ease-out .75s;
    animation-fill-mode: backwards;
  }
}
</style>
