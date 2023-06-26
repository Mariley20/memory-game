<template>
  <header class="header">
    <div class="logo-box">
      <img
        :src="require('@/assets/img/logo-white.png')"
        alt="Logo"
        class="logo"
      >
    </div>
    <div class="text-box">
      <h1 class="heading-primary">
        <span class="heading-primary-main">Outdoors</span>
        <span class="heading-primary-sub">is where life happens</span>
      </h1>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header {
  height: 95vh;
  background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.8)), url(@/assets/img/hero.jpg);
  background-size: cover;
  background-position: top;
  position: relative;

  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
}

.logo-box {
  position: absolute;
  top: 40px;
  left: 40px;

}

.logo {
  height: 35px;
}

.heading-primary {
  color: #fff;
  text-transform: uppercase;

}

.text-box {
  position: absolute;
  top: 40%;
  left: 50%;
  background-color: red;
  transform: translate(-50%, -50%);
}

.heading-primary-main {
  display: block;
  font-size: 60px;
  font-weight: 400;
  letter-spacing: 35px;
}

.heading-primary-sub {
  display: block;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 17.4px;

}
</style>
