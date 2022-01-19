<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: black;
  font-family: "Arial";
  font-weight: 400;
  font-size: 1.6rem;
}

#app {
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
}

@media screen and (min-width: 576px) {
  #app {
    max-width: 540px;
    padding: 0;
  }
}
@media screen and (min-width: 768px) {
  #app {
    max-width: 720px;
  }
}
@media screen and (min-width: 992px) {
  #app {
    max-width: 960px;
  }
}
@media screen and (min-width: 1200px) {
  #app {
    max-width: 1140px;
  }
}
@media screen and (min-width: 1400px) {
  #app {
    max-width: 1320px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
